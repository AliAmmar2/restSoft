import { useState } from 'react';
import FormInput from '../../components/FormInput/FormInput.component';
import './SignUp.styles.scss';
import { createAuthWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const defaultFormFields = {
        Username: '',
        Email: '',
        Password: '',
        ConfirmPassword: '',
    }

    const navigate = useNavigate();

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { Username, Email, Password, ConfirmPassword } = formFields;
    const [error, setError] = useState('');

    const onChangeHandler = (event) =>{
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async(event) => {
        event.preventDefault();

        if(Password !== ConfirmPassword){
            setError('Passwords do not match');
            document.getElementsByName('ConfirmPassword')[0].focus();
            return;
        }

        try{
            const { user } = await createAuthWithEmailAndPassword(Email,Password);
            console.log(user)
            await createUserDocumentFromAuth(user, {Username});
            setFormFields(defaultFormFields);
            
            
        }catch(error){
            console.log(error);
            if(error.code ==='auth/email-already-in-use'){
                alert("Email already in use.");
            }else if(error.code === 'auth/weak-password'){
                alert('Choose a stronger password.');
            }
        }
    }

    return(
        <form onSubmit={handleSubmit}>
        <FormInput
        label='Username'
        name='Username'
        type='text'
        value={Username}
        onChange={onChangeHandler}
        required
        />

        <FormInput
        label='Email'
        name='Email'
        type='email'
        value={Email}
        onChange={onChangeHandler}
        required
        />

        <FormInput
        label='Password'
        name='Password'
        type='password'
        value={Password}
        onChange={onChangeHandler}
        required
        />

        <FormInput
        label='ConfirmPassword'
        name='ConfirmPassword'
        type='password'
        value={ConfirmPassword}
        onChange={onChangeHandler}
        required
        />
        <span className='errorMessage'>{error}</span>
        <br/>
        <button type='submit'>Create Account</button>
</form>
    )
}

export default SignUp;
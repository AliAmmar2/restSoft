import { useState } from "react";
import { resetPassword } from "../../utils/firebase/firebase.utils";

const ForgotPassword = () => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const onSubmitHandler = async(e) =>{
        e.preventDefault();
        try{
        await resetPassword(email);
        setMessage('Password reset email sent!');
        }catch(error){
            setMessage(error.code);
        }
    }

    return(
        <div>
            <h1>Please enter your email address</h1>
            <form onSubmit={onSubmitHandler}>
            <input
            type="email"
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required
            />
            <button>Request Email</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    )
}

export default ForgotPassword;
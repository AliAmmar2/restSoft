import { Route, Routes,useLocation } from 'react-router-dom';
import Home from './routes/Home/home.component';
import Navigation from './routes/Navigation/Navigation.component';
import Login from './routes/Login/Login.component';
import SignUp from './routes/SignUp/SignUp.component';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createAuthWithEmailAndPassword, onAuthStateChangedListener } from './utils/firebase/firebase.utils';
import { setCurrentUser } from './store/user/user.reducer';
import Menus from './routes/Menus/menus.component';
import Footer from './components/footer/footer.component';
import Checkout from './routes/checkout/checkout.component';

function App() {

  const dispatch = useDispatch();
  const location = useLocation();
  const showNavigation = !location.pathname.toLowerCase().startsWith('/menus');
  const showFooter = !location.pathname.toLowerCase().startsWith('/menus/');

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        const userdata = await createAuthWithEmailAndPassword(user);
        console.log(userdata);
        const userData = {
          uid: user.uid,
          email: user.email,
        };
        
        dispatch(setCurrentUser(userData));
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <>
      {showNavigation && <Navigation />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Login' element={<Login />} />
        <Route path='SignUp' element={<SignUp />} />
        <Route path='Menus/*' element={<Menus />} />
        <Route path='checkout' element={<Checkout/>} />
      </Routes>
      {showFooter && <Footer />}
    </>
  );
}



export default App;
   
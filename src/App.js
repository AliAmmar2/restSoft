import React, { useEffect, Suspense, lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createAuthWithEmailAndPassword, onAuthStateChangedListener } from './utils/firebase/firebase.utils';
import { setCurrentUser } from './store/user/user.reducer';
import Navigation from './routes/Navigation/Navigation.component';
import Footer from './components/footer/footer.component';
import './App.styles.scss'; 

// Lazy load components
const Home = lazy(() => import('./routes/Home/home.component'));
const Login = lazy(() => import('./routes/Login/Login.component'));
const SignUp = lazy(() => import('./routes/SignUp/SignUp.component'));
const Menus = lazy(() => import('./routes/Menus/menus.component'));
const Checkout = lazy(() => import('./routes/checkout/checkout.component'));
const ForgotPassword = lazy(() => import('./routes/forgot-password/forgot-password.component'));

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
    <div className="app-container"> 
      {showNavigation && <Navigation />}
      <div className="content"> 
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='Login' element={<Login />} />
            <Route path='SignUp' element={<SignUp />} />
            <Route path='Menus/*' element={<Menus />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='forgot-password' element={<ForgotPassword/>}/>
          </Routes>
        </Suspense>
      </div>
      {showFooter && <Footer />}
    </div>
  );
}

export default App;

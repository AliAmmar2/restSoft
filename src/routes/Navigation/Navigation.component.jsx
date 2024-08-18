import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import './navigation.styles.scss';
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { onSnapshot, doc } from 'firebase/firestore';
import { db } from '../../utils/firebase/firebase.utils';
import { setCurrentUser } from '../../store/user/user.reducer';
import { useEffect, useState, useRef } from "react";
import Mailto from "../../components/Mailto/mailto.component";
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../assets/tempLogo.png';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const [username, setUsername] = useState('undefined');
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const menuRef = useRef(null);

  useEffect(() => {
    let unsubscribe;
    if (currentUser) {
      const userDocRef = doc(db, 'users', currentUser.uid);
      unsubscribe = onSnapshot(userDocRef, (docSnapshot) => {
        if (docSnapshot.exists()) {
          const userData = docSnapshot.data();
          setUsername(userData.Username || null);
        } else {
          console.log("Working on it!");
          setUsername(null);
        }
      }, (error) => {
        console.error("Error fetching user document:", error);
      });
    }
  
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [currentUser]);

  const handleSignOut = async () => {
    try {
      await signOutUser();
      dispatch(setCurrentUser(null));
      setUsername(null);
      setMenuOpen(false); 
    } catch (error) {
      console.error(`Sign-out failed: ${error.message}`);
      alert('Sign out failed!');
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    // Add the event listener to the document
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Cleanup the event listener on component unmount
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <>
      <div className="navigation" ref={menuRef}>
      <Link to='/'>
          <img src={Logo} alt="Logo"className="logo-container" />
        </Link>
        <div className={`nav-links-container ${menuOpen ? 'open' : ''}`}>
          <Mailto email='ammarsoltan51@gmail.com' subject='make website' body='Please make website free.' className="nav-link">
            <span  onClick={closeMenu}>Contact Us</span>
          </Mailto>
          <Link className="nav-link" to='Menus' onClick={closeMenu}>Menus</Link>
          {currentUser ? (
            <>
              <Link className="nav-link" to={`menus/${username}/admin`} onClick={closeMenu}>Admin</Link>
              <Link className="nav-link" onClick={() => { handleSignOut(); closeMenu(); }}>Sign Out</Link>
            </>
          ) : (
            <Link className="nav-link" to='/Login' onClick={closeMenu}>Login</Link>
          )}
        </div>
        <div className="burger-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation;

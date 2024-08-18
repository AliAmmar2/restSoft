import React, { useState, useEffect, useCallback } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import { getRestaurantsByUsername } from '../../utils/firebase/firebase.utils';
import MenuItems from '../../components/menuItems/menuItems.component';
import { useSelector } from 'react-redux';
import { selectRestaurants } from '../../store/menu/menu.selector';
import Admin from '../Admin/admin.component';
import Spinner from '../../components/spinner/spinner.component';
import RestFooter from '../../components/restFooter/restFooter.component';

const RestMenu = ({ isAdmin }) => {
  const { restName } = useParams();
  const [selectedMenu, setSelectedMenu] = useState(null);
  const restaurants = useSelector(selectRestaurants);
  const res = restaurants.find(r => r.id === restName);

  const fetchMenu = useCallback(async () => {
    if (res) {
      const menu = await getRestaurantsByUsername(restName.toLowerCase());
      setSelectedMenu(menu);
      console.log(res)
    }
  }, [restName, res]);

  useEffect(() => {
    if (restName && res) {
      fetchMenu();
    }
  }, [restName, res, fetchMenu]);
  
  return (
    <div>
       {selectedMenu ? (
        <MenuItems
          initialMenu={selectedMenu} 
          name={res.name} 
          id={res.id} 
          location={res.location}
          isAdmin={isAdmin}
        />
      ) : ( 
          <Spinner/> 
     )}
      {isAdmin && (
        <Routes>
          <Route path="admin" element={<Admin />} />
        </Routes>
      )} 
      {restName && <RestFooter restName={restName}/>}
    </div>
  );
}

export default RestMenu;

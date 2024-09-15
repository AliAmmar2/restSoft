import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import { getRestaurantsByUsername } from '../../utils/firebase/firebase.utils';
import MenuItems from '../../components/menuItems/menuItems.component';
import { useSelector, useDispatch } from 'react-redux';
import { selectRestaurants, selectMenuByRestId } from '../../store/menu/menu.selector';
import { setMenu } from '../../store/menu/menu.reducer';
import Admin from '../Admin/admin.component';
import Spinner from '../../components/spinner/spinner.component';
import RestFooter from '../../components/restFooter/restFooter.component';

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

const RestMenu = ({ isAdmin }) => {
  const { restName } = useParams();
  const dispatch = useDispatch();
  const restaurants = useSelector(selectRestaurants);
  const selectedMenu = useSelector(state => selectMenuByRestId(state, restName));
  const res = useMemo(() => restaurants.find(r => r.id === restName), [restaurants, restName]);

  const cachedMenu = useSelector(state => selectMenuByRestId(state, restName));
  const isCacheValid = cachedMenu && (Date.now() - cachedMenu.timestamp < CACHE_DURATION);

  const fetchMenu = useCallback(async () => {
    if (res && (!cachedMenu || !isCacheValid)) { 
      const menu = await getRestaurantsByUsername(restName.toLowerCase());
      dispatch(setMenu({ restId: restName, menu }));
    }
  }, [restName, res, cachedMenu, isCacheValid, dispatch]);

  useEffect(() => {
    if (restName && res && (!cachedMenu || !isCacheValid)) {
      fetchMenu();
    }
  }, [restName, fetchMenu, res, cachedMenu, isCacheValid]);
  
  return (
    <div>
       {cachedMenu ? (
        <MenuItems
          initialMenu={cachedMenu.data} 
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

import React, { useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getRestaurantsByUsername } from '../../utils/firebase/firebase.utils';
import MenuItems from '../../components/menuItems/menuItems.component';
import { useSelector, useDispatch } from 'react-redux';
import { selectRestaurants, selectMenuByRestId } from '../../store/menu/menu.selector';
import { setMenu } from '../../store/menu/menu.reducer';
import Spinner from '../../components/spinner/spinner.component';

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

const RestMenu = ({ isAdmin }) => {
  const { restName } = useParams();
  const dispatch = useDispatch();
  const restaurants = useSelector(selectRestaurants);
  const cachedMenu = useSelector(state => selectMenuByRestId(state, restName));
  const res = restaurants.find(r => r.id === restName);

  const isCacheValid = cachedMenu && (Date.now() - cachedMenu.timestamp < CACHE_DURATION);

  const fetchMenu = useCallback(async () => {
    if (!isCacheValid) { 
      const menu = await getRestaurantsByUsername(restName.toLowerCase());
      dispatch(setMenu({ restId: restName, menu }));
    }
  }, [restName, isCacheValid, dispatch]);

  useEffect(() => {
    if (restName && !isCacheValid) {
      fetchMenu();
    }
  }, [restName, fetchMenu, isCacheValid]);
  
  if (!cachedMenu) return <Spinner />;

  return (
    <MenuItems
      initialMenu={cachedMenu.data} 
      name={res?.name} 
      id={res?.id} 
      location={res?.location}
      isAdmin={isAdmin}
    />
  );
}

export default RestMenu;

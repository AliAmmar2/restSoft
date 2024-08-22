import { Routes,Route } from "react-router-dom";
import RestMenu from "../restMenu/restMenu.component";
import MenuPreview from "../menuPreview/menuPreview.component";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllRestaurants } from "../../utils/firebase/firebase.utils";
import { setRestaurants } from "../../store/menu/menu.reducer";
import Admin from "../Admin/admin.component";
import { selectRestaurants } from "../../store/menu/menu.selector";

const Menus = () => {

    const dispatch = useDispatch();
const restaurants = useSelector(selectRestaurants);

useEffect(() => {
    const fetchRestaurants = async () => {
        if (!restaurants.length) {
            const restArray = await getAllRestaurants();
            dispatch(setRestaurants(restArray));
        }
    };
    fetchRestaurants();
}, [dispatch, restaurants]);

    return (
        <Routes>
            <Route index element={<MenuPreview/>}/>
            <Route path=":restName" element={<RestMenu/>}/>
            <Route path=":restName/admin/*" element={<Admin/>}/>
        </Routes>
    )
}

export default Menus;
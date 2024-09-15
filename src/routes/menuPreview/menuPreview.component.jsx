import { useState, useEffect } from "react";
import './menuPreview.styles.scss';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectRestaurants, selectSelectedRestaurant } from "../../store/menu/menu.selector";
import { setSelectedRestaurant } from "../../store/menu/menu.reducer";

const MenuPreview = () => {
    const [searchField, setSearchField] = useState('');
    const restaurants = useSelector(selectRestaurants);
    const selectedRestaurant = useSelector(selectSelectedRestaurant);
    const dispatch = useDispatch();

    const filteredRestaurants = restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(searchField.toLowerCase())
    );

    const handleSearchChange = (event) => {
        setSearchField(event.target.value);
    };

    const handleRestaurantClick = (restaurant) => {
        dispatch(setSelectedRestaurant(restaurant));
    };

    // Clear selected restaurant when component unmounts
    useEffect(() => {
        return () => {
            dispatch(setSelectedRestaurant(null));
        };
    }, [dispatch]);

    return(
        <div className="menu-preview-container">
            <h1>All Menus</h1>

            <input
                type="search"
                placeholder="Search restaurants..."
                className="search-box"
                value={searchField}
                onChange={handleSearchChange}
            />
            
            <div className="menus">
                {filteredRestaurants.map((restaurant, restIdx) => (
                    <div key={restIdx} onClick={() => handleRestaurantClick(restaurant)}>
                        <Link to={restaurant.id}>
                            <img className='rest-logo' src={restaurant.url} alt={restaurant.name}/>
                        </Link>
                        <h3>{restaurant.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MenuPreview;

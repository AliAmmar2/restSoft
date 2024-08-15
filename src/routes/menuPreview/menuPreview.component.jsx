import { useState } from "react";
import './menuPreview.styles.scss';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRestaurants } from "../../store/menu/menu.selector";

const MenuPreview = () => {
    const [searchField, setSearchField] = useState('');
    const restaurants = useSelector(selectRestaurants);

    const filteredRestaurants = restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(searchField.toLowerCase())
    );

    const handleSearchChange = (event) => {
        setSearchField(event.target.value);
    };

    return(
        <div className="menu-preview-container">
            <h1>All Menus</h1>
            
            {/* Search box visible only on smaller screens */}
            <input
                type="search"
                placeholder="Search restaurants..."
                className="search-box"
                value={searchField}
                onChange={handleSearchChange}
            />
            
            <div className="menus">
                {filteredRestaurants.map((restaurant, restIdx) => (
                    <div key={restIdx}>
                        <Link to={restaurant.id} >
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

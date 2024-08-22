import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { getRestaurantsInfo } from "../../utils/firebase/firebase.utils";
import './restFooter.styles.scss'

const RestFooter = ({restName}) => {
    const [infos,setInfo] = useState({});
    useEffect(() => {
        const fetchInfo = async () => {
            if (!infos[restName]) {
                const info = await getRestaurantsInfo(restName);
                setInfo(prev => ({ ...prev, [restName]: info }));
                setInfo(info);
            } else {
                setInfo(infos[restName]);
            }
        };
        fetchInfo();
    }, []);
    return (
        <footer className="rest-footer">
            <div className="info-section">
                <div className="info-item">
                    <FaMapMarkerAlt className="icon" /> 
                    <span>{infos.location}</span>
                </div>
                <div className="info-item">
                    <FaPhoneAlt className="icon" />
                    <span>{infos.phone}</span>
                </div>
            </div>
            <hr className="divider" />
            <div className="copyright-section">
                <span>All rights reserved</span>
                <span>Developed by Abu3leshSoftware</span>
            </div>
        </footer>
    );
}

export default RestFooter;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCamera } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../public/logo.png';

function Menu() {
    return (
        <div className="h-[100vh] w-[8%] flex flex-col items-center bg-secondary-color py-8">
            <img src={Logo} className=" w-20 h-auto pb-4 mb-6 border-b border-green-500"/>
            <FontAwesomeIcon icon={faHouse} className="text-white bg-main-color rounded-2xl p-3.5 text-2xl my-2.5" />
            <FontAwesomeIcon icon={faCamera} className="text-white bg-main-color rounded-2xl p-3.5 text-2xl my-2.5" />
        </div>
    )
}

export default Menu;
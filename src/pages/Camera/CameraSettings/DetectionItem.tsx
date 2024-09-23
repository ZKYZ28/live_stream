import React, { useState } from 'react';
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ListItemProps {
    icon: IconDefinition;
    title: string;
    isActive: boolean;
}

const DetectionItem: React.FC<ListItemProps> = ({ icon, title, isActive: initialActive }) => {
    const [isActive, setIsActive] = useState(initialActive);

    const toggleActive = () => {
        setIsActive(!isActive);
    };

    return (
        <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                    <FontAwesomeIcon icon={icon} className="w-6 h-6 text-gray-500" />
                </div>

                <div className="flex-1 min-w-0">
                    <p className=" font-medium text-white truncate">
                        {title}
                    </p>

                    <p className={`text-sm truncate ${isActive ? 'text-green-500' : 'text-gray-500'}`}>
                        {isActive ? 'Active' : 'Inactive'}
                    </p>
                </div>

                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                    <div>
                        <input
                            className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-green-500 checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-green-500 checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-green-500 checked:focus:bg-green-500 checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault"
                            checked={isActive}
                            onChange={toggleActive}
                        />
                    </div>
                </div>
            </div>
        </li>
    );
};

export default DetectionItem;

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell, faUser, faCat, faGun} from "@fortawesome/free-solid-svg-icons";
import Camera from "../../../../public/surveillance.png"
import {useUpdateAlarmStatus} from "../../../api/Queries/CameraQueries.ts";
import {useState} from "react";
import DetectionItem from "./DetectionItem.tsx";

const CameraSettings = () => {
    const {mutate: mutateUpdateChanneName} = useUpdateAlarmStatus();
    const [rangeValue, setRangeValue] = useState(50);

    const handleUpdateAlarmStatus= () => {
        mutateUpdateChanneName(
            true,
            {
                onSuccess: () => {

                },
                onError: () => {

                },
            }
        );
    }


    const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRangeValue(Number(e.target.value));
    };

    return (
        <div className="w-1/3 bg-secondary-color gap-8 rounded-xl px-6 py-8 flex flex-col justify-around">

            <div className="flex justify-between border-b-2 pb-4 border-green-500">
                <div className="pr-6">
                    <h2 className="uppercase text-white text-4xl font-bold">Caméra salon</h2>
                    <p className="text-gray-300 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.</p>
                </div>

                <img src={Camera} className="w-16 h-16"/>
            </div>

            <div className="border-b-2 pb-4 border-green-500">
                <h3 className="mb-2 text-xl text-white font-semibold">Sensivity</h3>
                <input
                    type="range"
                    min={0}
                    max="100"
                    value={rangeValue}
                    onChange={handleRangeChange}
                    className="range"
                    step="25"
                />
                <div className="flex w-full justify-between px-2 text-xs">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                </div>
            </div>

            <div className="border-b-2 pb-4 border-green-500">
                <h3 className="mb-2 text-xl text-white font-semibold">Detection</h3>

                <ul className="divide-y divide-gray-200 dark:divide-gray-700 w-full">
                    <DetectionItem icon={faUser} title={"Person"} isActive={false}  />
                    <DetectionItem icon={faCat} title={"Animal"} isActive={false}  />
                    <DetectionItem icon={faGun} title={"Weapon"} isActive={false}  />
                </ul>

            </div>

            <div className={"flex justify-center"}>
                <FontAwesomeIcon onClick={handleUpdateAlarmStatus} icon={faBell}
                                 className="cursor-pointer text-white bg-third-color rounded-full p-3.5 text-xl my-2.5 hover:bg-green-500"/>
            </div>
        </div>
    )
}

export default CameraSettings;
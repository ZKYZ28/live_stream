import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell} from "@fortawesome/free-solid-svg-icons";
import Camera from "../../../../public/surveillance.png"
import {useUpdateAlarmStatus} from "../../../api/Queries/CameraQueries.ts";

const CameraSettings = () => {
    const {mutate: mutateUpdateChanneName} = useUpdateAlarmStatus();


    const handleUpdateAlarmStatus= () => {
        mutateUpdateChanneName(
            true,
            {
                onSuccess: () => {
                    console.log("OK")
                },
                onError: (error) => {
                    console.error("Error resetting password:", error.message);
                },
            }
        );
    }

    return (
        <div className="w-1/3 bg-secondary-color gap-8 rounded-xl px-6 py-8 flex flex-col">
            <div className="flex justify-between border-b-2 pb-4 border-green-500">
                <div className="pr-6">
                    <h2 className="uppercase text-white text-4xl font-bold">Caméra salon</h2>
                    <p className="text-gray-300 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.</p>
                </div>

                <img src={Camera} className="w-16 h-16"/>
            </div>

            <div className={"flex justify-center"}>
                <FontAwesomeIcon onClick={handleUpdateAlarmStatus} icon={faBell}
                                 className="text-white bg-third-color rounded-full p-3.5 text-xl my-2.5 hover:bg-green-500"/>
                <FontAwesomeIcon icon={faBell}
                                 className="text-white bg-third-color rounded-full p-3.5 text-xl my-2.5 mx-4 hover:bg-green-500"/>
                <FontAwesomeIcon icon={faBell}
                                 className="text-white bg-third-color rounded-full p-3.5 text-xl my-2.5 hover:bg-green-500"/>
            </div>
        </div>
    )
}

export default CameraSettings;
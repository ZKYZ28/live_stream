import MapComponent from "../Home/MapComponent.tsx";
import DirectionalButtons from "../Home/DirectionalButtons.tsx";
import CameraStream from "./CameraStream/CameraStream.tsx";
import CameraSettings from "./CameraSettings/CameraSettings.tsx";

const Camera = () => {
    return (
        <div className="h-[100vh] w-[92%] bg-main-color flex flex-col p-6">

            <div className="flex h-[60vh] gap-8">
                <CameraStream />
                <CameraSettings />
            </div>

            <div className="flex h-[35vh] gap-8 pt-8">

                <div className="w-2/3 bg-secondary-color rounded-xl p-4 flex justify-between">
                    <div className="bg-red-500 w-1/3 border-2 border-green-500 rounded-xl overflow-hidden">
                        <MapComponent/>
                    </div>

                    <div className="border-x-2 border-green-500 px-4 w-1/3 mx-4">

                    </div>

                    <div className="w-1/3 h-full flex items-center justify-center">
                        <DirectionalButtons/>
                    </div>
                </div>

                <div className="w-1/3 bg-secondary-color rounded-xl ">

                </div>
            </div>
        </div>
    )
}

export default Camera;
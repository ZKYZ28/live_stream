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
                    <div className="w-1/3 border-2 border-green-500 rounded-xl overflow-hidden mr-4">
                        <MapComponent/>
                    </div>

                    <div className="border-r-2 border-green-500 pr-12 w-1/3 flex items-center justify-center">
                        <div className=" mx-4 flex items-center w-1/2">
                            <dl className="w-full text-white divide-y divide-gray-500">
                                <div className="flex flex-col pb-3">
                                    <dt className="mb-1  md:text-lg font-semibold">IP Address</dt>
                                    <dd className="">192.168.0.16</dd>
                                </div>
                                <div className="flex flex-col py-3">
                                    <dt className="mb-1  md:text-lg font-semibold">Version</dt>
                                    <dd className="">V 0.01</dd>
                                </div>
                                <div className="flex flex-col py-3">
                                    <dt className="mb-1  md:text-lg font-semibold">Version</dt>
                                    <dd className="">V 0.01</dd>
                                </div>
                            </dl>
                        </div>

                        <div className="mx-4 flex items-center w-1/2">
                            <dl className="w-full text-white divide-y divide-gray-500">
                                <div className="flex flex-col pb-3">
                                    <dt className="mb-1  md:text-lg font-semibold">IP Address</dt>
                                    <dd className="">192.168.0.16</dd>
                                </div>
                                <div className="flex flex-col py-3">
                                    <dt className="mb-1  md:text-lg font-semibold">Version</dt>
                                    <dd className="">V 0.01</dd>
                                </div>
                                <div className="flex flex-col py-3">
                                    <dt className="mb-1  md:text-lg font-semibold">Version</dt>
                                    <dd className="">V 0.01</dd>
                                </div>
                            </dl>
                        </div>
                    </div>

                    <div className="w-1/3 h-full flex items-center justify-center">
                        <DirectionalButtons/>
                    </div>
                </div>

                <div className="w-1/3 bg-secondary-color rounded-xl ">
                    <div className="w-full h-1/6 flex items-center justify-center">
                        <h3 className="text-gray-300 font-semibold text-xl pr-4 border-r-2">Heisenberg</h3>
                        <span className="pl-4 text-gray-300 font-semibold text-xl">23/09/2023 22:03</span>
                    </div>

                    <div className="h-5/6">
                        <img
                            src="https://dessin-creation.com/wp-content/uploads/2014/11/comment-dessiner-un-visage-walter-white.jpg"
                            className="w-full h-full object-cover"
                            alt="Walter White"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Camera;
import PageWrapper from "../../components/Common/PageWrapper.tsx";
import MapComponent from "./MapComponent.tsx";
import DirectionalButtons from "./DirectionalButtons.tsx";
import Camera from '../../../public/surveillance.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBell} from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
    return (
        <PageWrapper>
            <div className="h-[100vh] w-[92%] bg-main-color flex flex-col p-6">

                <div className="flex h-[60vh] gap-8">

                    <div className="w-2/3 bg-secondary-color rounded-xl">
                        <img id="videoFeed" src="http://192.168.0.16:5000/video_feed"
                             alt="Camera Feed" className="w-full h-full"/>
                    </div>

                    <div className="w-1/3 bg-secondary-color gap-8 rounded-xl px-6 py-8 flex flex-col">
                        <div className="flex justify-between border-b-2 pb-4 border-green-500">
                            <div className="pr-6">
                                <h2 className="uppercase text-white text-4xl font-bold">Caméra salon</h2>
                                <p className="text-gray-300 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>

                            <img src={Camera} className="w-16 h-16"/>
                        </div>

                        <div className={"flex justify-center"}>
                            <FontAwesomeIcon icon={faBell} className="text-white bg-third-color rounded-full p-3.5 text-xl my-2.5 hover:bg-green-500" />
                            <FontAwesomeIcon icon={faBell} className="text-white bg-third-color rounded-full p-3.5 text-xl my-2.5 mx-4 hover:bg-green-500" />
                            <FontAwesomeIcon icon={faBell} className="text-white bg-third-color rounded-full p-3.5 text-xl my-2.5 hover:bg-green-500" />
                        </div>
                    </div>
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

        </PageWrapper>
    );
};

export default HomePage;

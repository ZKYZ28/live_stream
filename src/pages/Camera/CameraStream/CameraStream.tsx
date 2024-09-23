const CameraStream = () => {
    return (
        <div className="w-2/3 bg-secondary-color rounded-xl">
            <img id="videoFeed" src="http://192.168.0.16:5000/video_feed"
                 alt="Camera Feed" className="w-full h-full"/>
        </div>
    )
}

export default CameraStream;
const DirectionalButtons = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center relative bg-third-color rounded-full p-6 border-4 border-main-color">
                <button className="w-16 h-16 bg-secondary-color text-white text-3xl rounded-lg mb-2 hover:bg-green-500">
                    ↑
                </button>
                <div className="flex">
                    <button className="w-16 h-16 bg-secondary-color text-white text-3xl rounded-lg mr-2 hover:bg-green-500">
                        ←
                    </button>

                    <div className="w-16 h-16 bg-main-color rounded-full flex items-center justify-center">

                    </div>

                    <button className="w-16 h-16 bg-secondary-color text-white text-3xl rounded-lg ml-2 hover:bg-green-500">
                        →
                    </button>
                </div>
                <button className="w-16 h-16 bg-secondary-color text-white text-3xl rounded-lg mt-2 hover:bg-green-500">
                    ↓
                </button>
            </div>
        </div>
    );
};

export default DirectionalButtons;
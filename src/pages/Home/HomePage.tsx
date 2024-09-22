import PageWrapper from "../../components/Common/PageWrapper.tsx";


const HomePage = () => {
    return (
        <PageWrapper>
            <div className="h-[100vh] w-[92%] bg-main-color flex flex-col p-8">

                <div className="flex flex-grow-[2] gap-8">

                    <div className="w-2/3 bg-red-500 bg-secondary-color rounded-xl">

                    </div>

                    <div className="w-1/3 bg-secondary-color gap-8 rounded-xl">

                    </div>
                </div>

                <div className="flex flex-grow-[1] gap-8 pt-8">

                    <div className="w-2/3 bg-secondary-color rounded-xl">

                    </div>

                    <div className="w-1/3 bg-secondary-color rounded-xl">

                    </div>
                </div>
            </div>

        </PageWrapper>
    );
};

export default HomePage;

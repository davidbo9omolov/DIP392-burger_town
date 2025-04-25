import SectionOneHomePage from "../components/section-1-home/SectionOneHomePage";
import SectionTwoHomePage from "../components/section-2-home/SectionTwoHomePage";

const Home = () => {
    return (
        <div className={'flex flex-col justify-center items-center'}>
            <SectionOneHomePage/>
            <SectionTwoHomePage/>
        </div>
    );
};

export default Home;
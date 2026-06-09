import GigForm from "../components/Gigs/Form/GigForm";
import GigList from "../components/Gigs/List/GigList";
import GigStats from "../components/Gigs/Stats/GigStats";
import Navbar from "../components/Navbar";

function Landing() {
    return (
        <div>
            <Navbar />
            <div className="flex flex-row items-start ml-8 mt-8">
                <GigForm />
                <div className="flex flex-col">
                    <GigStats />
                    <GigList />
                </div>
            </div>
        </div>
    )
}

export default Landing;
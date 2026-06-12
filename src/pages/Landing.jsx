import GigForm from "../components/Gigs/Form/GigForm";
import GigList from "../components/Gigs/List/GigList";
import GigStats from "../components/Gigs/Stats/GigStats";
import Navbar from "../components/Navbar";
import { useState } from "react";

function Landing() {
    const [gigs, setGigs] = useState([]);

    return (
        <div className="p-4">
            <Navbar />
            <div className="flex flex-col lg:flex-row items-start gap-5 mt-8">
                <GigForm setGigs={setGigs}/>
                <div className="flex flex-col w-full">
                    <GigStats gigs={gigs}/>
                    <GigList gigs={gigs} setGigs={setGigs}/>
                </div>
            </div>
        </div>
    )
}

export default Landing;
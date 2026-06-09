import GigForm from "../components/Gigs/Form/GigForm";
import GigList from "../components/Gigs/List/GigList";
import GigStats from "../components/Gigs/Stats/GigStats";
import Navbar from "../components/Navbar";
import { useState } from "react";

function Landing() {

    const [gigs, setGigs] = useState([]);

    return (
        <div>
            <Navbar />
            <div className="flex flex-row items-start ml-8 mt-8">
                <GigForm setGigs={setGigs}/>
                <div className="flex flex-col">
                    <GigStats gigs={gigs}/>
                    <GigList gigs={gigs}/>
                </div>
            </div>
        </div>
    )
}

export default Landing;
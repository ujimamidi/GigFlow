import Footer from "../components/Footer";
import GigForm from "../components/Gigs/Form/GigForm";
import GigList from "../components/Gigs/List/GigList";
import GigStats from "../components/Gigs/Stats/GigStats";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";

function Landing() {
    // const [gigs, setGigs] = useState([]);
    const [gigs, setGigs] = useState(() => {
        return JSON.parse(localStorage.getItem("gigs")) || [];
    });

    useEffect(() => {
        localStorage.setItem("gigs", JSON.stringify(gigs));
    }, [gigs]);

    return (
        <div className="flex flex-col min-h-screen p-4">
            <Navbar />
            <div className="flex flex-col lg:flex-row items-start gap-5 mt-8 flex-1">
                <GigForm setGigs={setGigs}/>
                <div className="flex flex-col w-full">
                    <GigStats gigs={gigs}/>
                    <GigList gigs={gigs} setGigs={setGigs}/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Landing;
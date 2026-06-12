import { useState } from "react";
import GigCard from "./GigCard";
import GigListNavbar from "./GigListNavbar";

function GigList({gigs , setGigs}) {

    const [filter, setFilter] = useState("all");

    /*
    * Filters gigs based on the navlinks
    */
    const filteredGigs = gigs.filter((gig) => {
        if (filter === "all") return true;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const gigDate = new Date(gig.date);
        if (filter === "upcoming") return gigDate >= today;
        if (filter === "past") return gigDate < today;
        if (filter === "paid") return gig.isPaid;
        if (filter === "unpaid") return !gig.isPaid;
    })

    const handleDeleteGig = (index) => {
    setGigs((prevGigs) => {
        const gigToRemove = prevGigs.filter((_, i) => i !== index);
        localStorage.setItem("gigs", JSON.stringify(gigToRemove));
        return gigToRemove;
    });
}
    
    return (
        <div className="ml-5 mt-8">
            <div className="p-5 bg-[#1F232B] border-[#2D333B] border-2 rounded-xl">
                <GigListNavbar setFilter={setFilter}/>
            </div>
            {filteredGigs.length === 0 ? (
                <h1 className="bg-[#1F232B] border-[#2D333B] border-2 rounded-lg p-5 text-center font-semibold text-[#e6e6e6]">No gigs found...</h1>
                ) : (
                    filteredGigs.map((gig, index) => (
                        <GigCard 
                            key={index}
                            month={gig.date ? new Date(gig.date).toLocaleString('default', { month : 'short'}) : ''}
                            day={gig.date ? new Date(gig.date).getDate() : ''}
                            year={gig.date ? new Date(gig.date).getFullYear() : ''}
                            gigName={gig.eventName}
                            venue={gig.venue}
                            payment={gig.payment}
                            isPaid={gig.isPaid}
                            remove={() => handleDeleteGig(index)}
                        />
                    ))
                )}
        </div>
    )
}

export default GigList;
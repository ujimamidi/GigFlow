import { useState } from "react";
import GigCard from "./GigCard";
import GigListNavbar from "./GigListNavbar";

function GigList({gigs, setGigs}) {

    const [filter, setFilter] = useState("upcoming");
    const [search, setSearch] = useState("");

    const filteredGigs = gigs.filter((gig) => {
        const matchesSearch = gig.eventName.toLowerCase().includes(search.toLowerCase()) || gig.venue.toLowerCase().includes(search.toLowerCase());
        if (!matchesSearch) return false;
        if (filter === "all") return true;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const gigDate = new Date(gig.date);
        if (filter === "upcoming") return gigDate >= today;
        if (filter === "past") return gigDate < today;
        if (filter === "paid") return gig.isPaid;
        if (filter === "unpaid") return !gig.isPaid;
    })

    const searchGigs = (newSearch) => setSearch(newSearch);

    const handleDeleteGig = (index) => {
        setGigs((prevGigs) => {
            const updated = prevGigs.filter((_, i) => i !== index);
            localStorage.setItem("gigs", JSON.stringify(updated));
            return updated;
        });
    }

    const handleTogglePaid = (index) => {
        setGigs((prevGigs) => {
            const updated = prevGigs.map((gig, i) =>
                i === index ? {...gig, isPaid: !gig.isPaid} : gig
            );
            localStorage.setItem("gigs", JSON.stringify(updated));
            return updated;
        });
    }

    return (
        <div className="ml-5 mt-8">
            <div className="p-5 bg-[#1F232B] border-[#2D333B] border-2 rounded-xl">
                <GigListNavbar filter={filter} setFilter={setFilter} search={search} searchGigs={searchGigs}/>
            </div>
            {filteredGigs.length === 0 ? (
                <h1 className="bg-[#1F232B] border-[#2D333B] border-2 rounded-lg p-5 text-center font-semibold text-[#e6e6e6]">No gigs found...</h1>
            ) : (
                filteredGigs.map((gig) => {
                    const originalIndex = gigs.indexOf(gig);
                    return (
                        <GigCard
                            key={originalIndex}
                            month={gig.date ? new Date(gig.date).toLocaleString('default', { month: 'short' }) : ''}
                            day={gig.date ? new Date(gig.date).getDate() : ''}
                            year={gig.date ? new Date(gig.date).getFullYear() : ''}
                            gigName={gig.eventName}
                            venue={gig.venue}
                            payment={gig.payment}
                            isPaid={gig.isPaid}
                            remove={() => handleDeleteGig(originalIndex)}
                            togglePaid={() => handleTogglePaid(originalIndex)}
                        />
                    )
                })
            )}
        </div>
    )
}

export default GigList;
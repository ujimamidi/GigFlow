import { useState } from "react";
import GigCard from "./GigCard";
import GigListNavbar from "./GigListNavbar";

function GigList({gigs, setGigs}) {

    const [filter, setFilter] = useState("upcoming");
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const gigsPerPage = 5;

    const filteredGigs = gigs.filter((gig) => {
        const matchesSearch = gig.eventName.toLowerCase().includes(search.toLowerCase()) || 
                              gig.venue.toLowerCase().includes(search.toLowerCase()) || 
                              gig.clientName.toLowerCase().includes(search.toLowerCase());
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

    const totalPages = Math.ceil(filteredGigs.length / gigsPerPage);
    const paginatedGigs = filteredGigs.slice((page - 1) * gigsPerPage, page * gigsPerPage);

    const searchGigs = (newSearch) => {
        setSearch(newSearch);
        setPage(1); // reset to page 1 on search
    }

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

    const handleSaveNotes = (index, notes) => {
        setGigs((prevGigs) => {
            const updated = prevGigs.map((gig, i) =>
                i === index ? {...gig, notes} : gig
            );
            localStorage.setItem("gigs", JSON.stringify(updated));
            return updated;
        });
    }

    return (
        <div className="ml-5 mt-8">
            <div className="p-5 bg-[#1F232B] border-[#2D333B] border-2 rounded-xl">
                <GigListNavbar filter={filter} setFilter={(f) => { setFilter(f); setPage(1); }} search={search} searchGigs={searchGigs}/>
            </div>
            {paginatedGigs.length === 0 ? (
                <h1 className="bg-[#1F232B] border-[#2D333B] border-2 rounded-lg p-5 text-center font-semibold text-[#e6e6e6]">No gigs found...</h1>
            ) : (
                paginatedGigs.map((gig) => {
                    const originalIndex = gigs.indexOf(gig);
                    return (
                        <GigCard
                            key={originalIndex}
                            month={gig.date ? new Date(gig.date).toLocaleString('default', { month: 'short' }) : ''}
                            day={gig.date ? new Date(gig.date).getDate() : ''}
                            year={gig.date ? new Date(gig.date).getFullYear() : ''}
                            gigName={gig.eventName}
                            clientName={gig.clientName}
                            venue={gig.venue}
                            payment={gig.payment}
                            isPaid={gig.isPaid}
                            remove={() => handleDeleteGig(originalIndex)}
                            togglePaid={() => handleTogglePaid(originalIndex)}
                            notes={gig.notes || ""}
                            saveNotes={(notes) => handleSaveNotes(originalIndex, notes)}
                        />
                    )
                })
            )}
            {totalPages > 1 && (
                <div className="flex justify-between items-center mt-4 text-[#A0A7B2] text-sm">
                    <button
                        onClick={() => setPage(p => p - 1)}
                        disabled={page === 1}
                        className="px-4 py-2 bg-[#1F232B] border-[#2D333B] border-2 rounded-lg disabled:opacity-30 hover:text-[#8b5cf6] cursor-pointer">
                        ← Prev
                    </button>
                    <span>Page {page} of {totalPages}</span>
                    <button
                        onClick={() => setPage(p => p + 1)}
                        disabled={page === totalPages}
                        className="px-4 py-2 bg-[#1F232B] border-[#2D333B] border-2 rounded-lg disabled:opacity-30 hover:text-[#8b5cf6] cursor-pointer">
                        Next →
                    </button>
                </div>
            )}
        </div>
    )
}

export default GigList;
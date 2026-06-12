import GigCard from "./GigCard";
import GigListNavbar from "./GigListNavbar";

function GigList({gigs , setGigs}) {

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
                <GigListNavbar />
            </div>
            {
                gigs.map((gig, index) => (
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
            }
        </div>
        
    )
}

export default GigList;
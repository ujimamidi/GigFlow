import GigCard from "./GigCard";
import GigListNavbar from "./GigListNavbar";

function GigList({gigs}) {
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
                        gigName={gig.eventName}
                        venue={gig.venue}
                        payment={gig.payment}
                    />
                ))
            }
        </div>
        
    )
}

export default GigList;
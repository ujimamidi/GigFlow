import GigStatsCard from "./GigStatsCard";

function GigStats({gigs}) {

    function getTotalEarnings() {
        return gigs.reduce((total, gig) => total + Number(gig.payment), 0);
    }

    function getUpcomingGigsTotal() {
        const today = new Date();
        const next30Days = new Date();
        next30Days.setDate(today.getDate() + 30);
        return gigs.filter(gig => new Date(gig.date) >= today && new Date(gig.date) <= next30Days).length;
    }

    function getPaidGigsTotal() {
        return gigs.filter(gig => gig.isPaid === true).length;
    }

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 ml-5">
            <GigStatsCard icon="📅" label="Total Gigs" number={gigs.length} subtext="All time"/>
            <GigStatsCard icon="✔️" label="Paid Gigs" number={getPaidGigsTotal()} subtext="All time"/>
            <GigStatsCard icon="⌛" label="Upcoming Gigs" number={getUpcomingGigsTotal()} subtext="Next 30 days"/>
            <GigStatsCard icon="💰" label="Total Earnings" number={`$${getTotalEarnings()}.00`} subtext="All time"/>
        </div>
    )
}

export default GigStats;
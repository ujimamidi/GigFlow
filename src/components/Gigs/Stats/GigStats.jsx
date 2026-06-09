import GigStatsCard from "./GigStatsCard";

function GigStats({gigs}) {

    function getTotalEarnings() {
        let total = 0;
        gigs.map((gig) => {
            total = total + Number(gig.payment);
        })
        return total;
    }

    function getUpcomingGigsTotal() {
        let total = 0;
        const today = new Date();
        const next30Days = new Date();
        next30Days.setDate(today.getDate() + 30);
        gigs.map((gig) => {
            if (new Date(gig.date) >= today && new Date(gig.date) <= next30Days) {
                total = total + 1;
            }
        })
        return total;
    }

    function getPaidGigsTotal() {
        let paidTotal = 0;
        gigs.map((gig) => {
            if (gig.isPaid === true) {
                paidTotal = paidTotal + 1;
            }
        })
        return paidTotal;
    }
    
    return (
        <div className="flex flex-row">
            <GigStatsCard icon={`📅`} label="Total Gigs" number={gigs.length} subtext={`All time`}/>
            <GigStatsCard icon={`✔️`} label="Paid Gigs" number={getPaidGigsTotal()} subtext={`This month`}/>
            <GigStatsCard icon={`⌛`} label="Upcoming Gigs" number={getUpcomingGigsTotal()} subtext={`Next 30 days`}/>
            <GigStatsCard icon={`💰`} label="Total Earnings" number={`$${getTotalEarnings()}`} subtext={`All time`}/>
        </div>
    )
}

export default GigStats;
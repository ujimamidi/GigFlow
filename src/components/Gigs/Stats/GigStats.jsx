import GigStatsCard from "./GigStatsCard";

function GigStats() {
    return (
        <div className="flex flex-row">
            <GigStatsCard icon={`📅`} label="Total Gigs" number={`10`} subtext={`All time`}/>
            <GigStatsCard icon={`✔️`} label="Paid Gigs" number={`20`} subtext={`This month`}/>
            <GigStatsCard icon={`⌛`} label="Upcoming Gigs" number={`5`} subtext={`Next 30 days`}/>
            <GigStatsCard icon={`💰`} label="Total Earnings" number={`$5650`} subtext={`All time`}/>
        </div>
    )
}

export default GigStats;
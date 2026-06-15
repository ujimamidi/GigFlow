function GigStatsCard({icon, label, number, subtext}) {
    return (
        <div className="bg-[#1F232B] p-5 border-[#2D333B] border-2 rounded-xl text-[#E6E6E6] flex flex-row gap-3">
            <div className="text-4xl">{icon}</div>
            <div>
                <h1 className="text-md mb-2">{label}</h1>
                <p className="font-bold text-xl mb-2">{number}</p>
                <p className="text-sm">{subtext}</p>
            </div>
        </div>
    )
}

export default GigStatsCard;
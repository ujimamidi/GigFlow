function GigStatsCard({icon, label, number, subtext}) {
    return (
        <div>
            <div className="bg-[#1F232B] ml-5 p-5 border-[#2D333B] border-2 rounded-xl w-64 text-[#E6E6E6] flex flex-row gap-3">
                <div className="text-5xl">{icon}</div>
                <div>
                    <h1 className="text-md mb-2">{label}</h1>
                    <p className="font-bold text-xl mb-2">{number}</p>
                    <p className="text-sm">{subtext}</p> 
                </div>
            </div>
        </div>
    )
}

export default GigStatsCard;
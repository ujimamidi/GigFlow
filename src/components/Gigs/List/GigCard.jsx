function GigCard({month, day, gigName, venue, number}) {
    return (
        <div className="flex flex-row bg-[#1F232B] border-[#2D333B] border-2 rounded-lg p-5 items-center gap-5">
            <div className="flex flex-col bg-[#0D1117] text-[#e6e6e6] px-5 py-2 text-center border-[#2D333B] border-2 rounded-xl ">
                <h1 className="uppercase">{month}</h1>
                <p className="text-2xl">{day}</p>
            </div>
            <div className="flex flex-col text-[#e6e6e6] gap-1">
                <h1 className="text-lg font-bold">{gigName}</h1>
                <p className="font-medium"><span>📍 </span>{venue}</p>
            </div>
            <h1 className="">Upcoming</h1>
            <h1>{number}</h1>
        </div>
    )
}

export default GigCard;
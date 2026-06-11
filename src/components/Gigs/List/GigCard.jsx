function GigCard({month, day, year, gigName, venue, payment, isPaid, remove}) {

    const today = new Date();
    const gigDate = new Date(`${month} ${day}, ${year}`);
    const isUpcoming = gigDate >= today;

    return (
        <div className="flex flex-row bg-[#1F232B] border-[#2D333B] border-2 rounded-lg p-5 items-center justify-between gap-5">
            <div className="flex flex-row items-center gap-5 w-64">
                <div className="flex flex-col bg-[#0D1117] text-[#e6e6e6] px-5 py-2 text-center border-[#2D333B] border-2 rounded-xl">
                    <h1 className="uppercase">{month}</h1>
                    <p className="text-2xl">{day}</p>
                </div>
                <div className="flex flex-col text-[#e6e6e6] gap-1">
                    <h1 className="text-lg font-bold">{gigName}</h1>
                    <p className="font-medium"><span>📍 </span>{venue}</p>
                </div>
            </div>
            <div className="flex flex-row items-center text-[#e6e6e6]" style={{minWidth: '400px'}}>
                <div className="w-28 flex justify-center">
                    {isUpcoming ? (
                        <span className="bg-[#8b5cf6] text-purple-300 text-sm font-medium px-3 py-1 rounded-full">
                            Upcoming
                        </span>
                    ) : (
                        <span className="bg-gray-500/20 text-gray-400 text-sm font-medium px-3 py-1 rounded-full">
                            Past
                        </span>
                    )}
                </div>
                <div className="w-32 flex justify-center">
                    <h1 className="font-bold text-xl">${payment}</h1>
                </div>
                <div className="w-24 flex justify-center">
                    {isPaid ? (
                        <span className="bg-[#09a342] text-green-300 text-sm font-medium px-4 py-1 rounded-full">
                            Paid
                        </span>
                    ) : (
                        <span className="bg-[#b11717] text-red-300 text-sm font-medium px-4 py-1 rounded-full">
                            Unpaid
                        </span>
                    )}
                </div>
            </div>
            <div className="flex flex-row items-center align-middle gap-3 text-[#e6e6e6]">
                {/* <h1 className="p-2 bg-[#0D1117] rounded-lg border border-[#A0A7B2]">🖍</h1> */}
                <button className="p-2 bg-[#0D1117] rounded-lg border border-[#b11717]" onClick={remove}>❌</button>
            </div>
        </div>
    )
}

export default GigCard;
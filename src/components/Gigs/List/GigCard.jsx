function GigCard({month, day, year, gigName, venue, payment, isPaid, remove, togglePaid}) {

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const gigDate = new Date(`${month} ${day}, ${year}`);
    const isUpcoming = gigDate >= today;

    return (
        <div className="flex flex-col sm:flex-row bg-[#1F232B] border-[#2D333B] border-2 rounded-lg p-5 gap-4 mt-3">
            <div className="flex flex-row items-center gap-5 sm:w-64">
                <div className="flex flex-col bg-[#0D1117] text-[#e6e6e6] px-5 py-2 text-center border-[#2D333B] border-2 rounded-xl shrink-0">
                    <h1 className="uppercase">{month}</h1>
                    <p className="text-2xl">{day}</p>
                </div>
                <div className="flex flex-col text-[#e6e6e6] gap-1">
                    <h1 className="text-lg font-bold">{gigName}</h1>
                    <p className="font-medium"><span>📍 </span>{venue}</p>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center text-[#e6e6e6] sm:ml-10 gap-4 sm:gap-0 flex-1">
                <div className="sm:w-28 flex justify-center">
                    {isUpcoming ? (
                        <span className="text-[#8b5cf6] text-sm font-medium px-3 py-2 rounded-lg italic">Upcoming</span>
                    ) : (
                        <span className="text-gray-400 text-sm font-medium px-3 py-2 rounded-lg italic">Past</span>
                    )}
                </div>
                <div className="sm:w-32 flex justify-center">
                    <h1 className="font-bold text-xl">${payment}</h1>
                </div>
                <div className="sm:w-24 flex justify-center">
                    {isPaid ? (
                        <span onClick={togglePaid} className="bg-[#09a342] text-green-300 text-xs font-medium px-4 py-2 rounded-lg cursor-pointer hover:border-2">Paid</span>
                    ) : (
                        <span onClick={togglePaid} className="bg-[#b11717] text-red-300 text-xs font-medium px-4 py-2 rounded-lg cursor-pointer hover:border-2">Unpaid</span>
                    )}
                </div>
            </div>
            <div className="flex items-center justify-end">
                <button className="p-2 bg-[#0D1117] rounded-lg border-2 border-[#2D333B] hover:border-[#b11717] cursor-pointer" onClick={remove}>❌</button>
            </div>
        </div>
    )
}

export default GigCard;
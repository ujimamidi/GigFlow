function GigListNavbar({filter, setFilter, search, searchGigs}) {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <h1 className="text-xl text-[#E6E6E6] font-medium">📅 Upcoming Gigs</h1>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="flex flex-wrap gap-10 text-[#A0A7B2] font-normal px-4 py-2 bg-[#0D1117] border-[#2D333B] border-2 rounded-xl">
                    <a className={`cursor-pointer hover:text-[#8b5cf6] hover:font-medium ${filter === "all" ? "text-[#8b5cf6] font-medium" : ""}`} onClick={() => setFilter("all")}>All</a>
                    <a className={`cursor-pointer hover:text-[#8b5cf6] hover:font-medium ${filter === "upcoming" ? "text-[#8b5cf6] font-medium" : ""}`} onClick={() => setFilter("upcoming")}>Upcoming</a>
                    <a className={`cursor-pointer hover:text-[#8b5cf6] hover:font-medium ${filter === "past" ? "text-[#8b5cf6] font-medium" : ""}`} onClick={() => setFilter("past")}>Past</a>
                    <a className={`cursor-pointer hover:text-[#8b5cf6] hover:font-medium ${filter === "paid" ? "text-[#8b5cf6] font-medium" : ""}`} onClick={() => setFilter("paid")}>Paid</a>
                    <a className={`cursor-pointer hover:text-[#8b5cf6] hover:font-medium ${filter === "unpaid" ? "text-[#8b5cf6] font-medium" : ""}`} onClick={() => setFilter("unpaid")}>Unpaid</a>
                </div>
                <div className="relative w-full sm:w-auto">
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A0A7B2] pointer-events-none text-lg">⌕</span>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => searchGigs(e.target.value)}
                        placeholder="Search gigs..."
                        className="bg-[#0D1117] border-[#2D333B] border-2 rounded-xl pl-4 py-2 w-full sm:w-60 text-[#A0A7B2] font-medium"
                    />
                </div>
            </div>
        </div>
    )
}

export default GigListNavbar;
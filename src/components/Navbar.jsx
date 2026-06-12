function Navbar() {
    return (
        <div className="bg-[#0D1117] border-[#2D333B] border-2 rounded-xl flex justify-between items-center font-['Montserrat'] font-extrabold p-5">
            <h1 className="text-[#c7ccd4] ml-3">hi, uji</h1>
            <a className="text-[#E6E6E6] absolute left-1/2 -translate-x-1/2" href="/">GigFlow 🎶</a>
            <ul className="flex gap-15 mr-3 text-[#c7ccd4]">
                <a href="/">Home</a>
            </ul>
        </div>
    )
}

export default Navbar;
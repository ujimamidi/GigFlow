function Navbar() {
    return (
        <div className="bg-[#0D1117] border-[#2D333B] border-2 rounded-xl flex justify-between items-center font-extrabold p-5 font-[Rubik] text-[#E6E6E6]">
            <h1 className=" ml-3">hi, uji</h1>
            <a className=" absolute left-1/2 -translate-x-1/2 tracking-wider" href="/">GigFlow 🎶</a>
            <ul className="flex gap-15 mr-3 ">
                <a href="/">Home</a>
                <a href="/">About</a>
            </ul>
        </div>
    )
}

export default Navbar;
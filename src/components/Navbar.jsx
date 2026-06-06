function Navbar() {
    return (
        <div>
            <div className="bg-[#0D1117] border-[#2D333B] border-2 rounded-xl flex justify-between items-center font-['Montserrat'] font-extrabold p-5">
                <h1 className="text-[#c7ccd4]">hi, uji</h1>
                <div className="flex w-1/2 justify-between text-[#c7ccd4]">
                    <h2 className="text-[#E6E6E6]">GigFlow 🎶</h2>
                    <ul className="flex gap-15">
                        <li>Home</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
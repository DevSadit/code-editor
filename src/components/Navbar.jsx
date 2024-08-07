import logo from "../../public/logo.jpg"
function Navbar() {
    return (
        <div
            className='main lg:flex md:flex flex-wrap justify-between items-center px-4 bg-[#010101] border-b py-4'>
            <div className="left">
                <div className="logo font-bold text-2xl text-white text-center">
                    <img className=' w-8' src={logo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar
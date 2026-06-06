function Navbar() {
    return <div className="flex justify-between p-4  bg-gray-800 text-white bg-gray ">   
        <div className="flex items-center gap-4" >
            <p>Logo</p>
            <input type="search" placeholder="Search..." className="text-gray-800" /></div>
        <div className="ps-8 flex justify-between gap-2">
            <p>About Us</p>
            <p>Login</p>
            <p>Signup</p>
        </div>
    </div>
}

export default Navbar
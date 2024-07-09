/* eslint-disable react/no-unescaped-entities */
import { useState } from "react"
import { FaBarsStaggered, FaXmark } from "react-icons/fa6"
import { FiMapPin, FiSearch } from "react-icons/fi"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenuToggler = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const [query, setQuery] = useState("")
    const handleInputChange = (event) => {
        setQuery(event.target.value)

    }
    console.log(query);
    // nav items
    const navItems = [
        { path: '/', title: "Start a Search" },
        { path: '/my-job', title: "My Job" },
        { path: '/salary', title: "Salary Estimate" },
        { path: '/post-job', title: "Post A Job" },
    ]

    return (
        <header className=" w-full max-sm:h-54 md:h-96 bg-black">

            <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
                <nav className="flex justify-between items-center">
                    <img
                        className="w-2/12"
                        src="/public/images/image__1_-removebg-preview.png" alt="" />
                    {/* nav items */}

                    <ul className="hidden md:flex gap-8">
                        {navItems &&
                            navItems.map(({ path, title }) => (
                                <li key={path}>
                                    <NavLink

                                        to={path}
                                        className={({ isActive }) =>
                                            isActive ? 'active' : 'md:text-white text-black font-bold'}
                                    >
                                        {title}
                                    </NavLink>
                                </li>
                            ))}

                    </ul>
                    {/* signup login button */}
                    <div className="text-base font-medium space-x-5 ">
                        <Link to="/login" className="py-2 border rounded-lg px-4 border-none text-white ">Login</Link>
                        <Link to='signup' className="py-2  rounded-lg bg-secondary md:text-white text-blackkk px-4">Sign Up</Link>
                    </div>
                    {/* mobile responsive nav item */}
                    <div
                        onClick={handleMenuToggler}
                        className="block md:hidden ">

                        {
                            isMenuOpen ? <button>
                                <FaXmark className="text-white text-xl " />
                            </button> : <button>
                                <FaBarsStaggered className="text-white text-xl " />
                            </button>
                        }


                    </div>
                </nav>
            </div>
         
            <div>
            </div>
            {/* for mobile device */}
            <div className={`px-4 rounded-md  ${isMenuOpen ? "" : "hidden"}`}>
                {navItems &&
                    navItems.map(({ path, title }) => (
                        <li className="py-2" key={path}>
                            <NavLink

                                to={path}
                                className={({ isActive }) =>
                                    isActive ? 'active' : 'md:text-blackk text-white font-bold'}
                            >
                                {title}
                            </NavLink>
                        </li>
                    ))}
            </div>

            {/* search bar  */}
            <div className=" container mx-auto  py-14 md:py-2 px-10 md:mt-12 ">
                <p className="text-white text-4xl mb-8 ">Find Your Dream job With <span className=" text-secondary font-bold">Find Jobs</span></p>

                {/* input form */}
                <form>
          <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-md p-2 w-full mx-auto">
            {/* Product Search Input */}
            <div className="flex items-center flex-grow">
              <FiSearch className="text-gray-500 mr-2 ml-8" />
              <input
                onChange={handleInputChange}
                value={query}
                type="text"
                placeholder="Search for products"
                className="px-2 py-2 w-full rounded-l-full focus:outline-none"
              />
            </div>
            {/* Location Search Input */}
            <div className="flex items-center flex-grow border-l border-gray-300 ml-2">
              <FiMapPin className="text-gray-500 mr-2 ml-2" />
              <input
                type="text"
                placeholder="Enter location"
                className="px-2 py-2 w-full focus:outline-none"
              />
            </div>
            {/* Search Button */}
            <button
              type="submit"
              className="bg-secondary text-white px-4 py-2 rounded-full ml-2 focus:outline-none"
            >
              Search
            </button>
          </div>
        </form>

            </div>
        </header>
    )
}

export default Navbar
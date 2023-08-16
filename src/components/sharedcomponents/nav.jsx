import { NavLink } from "react-router-dom"

export const Nav = ()=>{
    const Nav = ["Individual","Business","Pricing","Set your payroll"]
    return(
        <nav className="hidden md:flex items-center justify-between text-sm">
            <NavLink>
                <img src="./Images/logo.png" className="md:w-16 lg:w-20" alt="" />
            </NavLink>
            <div className="flex items-center md:gap-x-5 lg:gap-x-10">
            {
                Nav.map(item=><NavLink>{item}</NavLink>)
            }
            </div>

            <div className="flex lg:gap-x-10">
                <NavLink className="outline outline-1 outline-[#11453B] text-[#11453B] py-2 rounded-full md:px-6 lg:px-12 ">Login</NavLink>
                <NavLink className="outline outline-1 outline-[#11453B] py-2 rounded-full md:px-6 lg:px-12 bg-[#11453B] text-white shadow-xl">Register</NavLink>
            </div>
        </nav>
    )
}
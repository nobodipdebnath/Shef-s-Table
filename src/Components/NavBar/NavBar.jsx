
import { FaRegUser } from "react-icons/fa";

export const NavBar = () => {
  return (
    <div>
        <nav className="flex flex-col md:flex-row justify-center md:justify-between items-center px-[10%] gap-4 md:gap-0 py-10">
            <div>
                <h1 className="text-[#150B2B] font-bold cursor-pointer text-[32px] ">Recipe Calories</h1>
            </div>
            <div>
                <ul className="flex items-center gap-12 text-[#150b2bb3] text-base">
                    <li><a href="">Home</a></li>
                    <li><a href="">Recipes</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Search</a></li>
                </ul>
            </div>
            <div className="flex items-center gap-4">
                <input className="py-3 px-5 border border-gray-300 rounded-[38px] bg-[#150b2b0d] outline-none" type="text" placeholder='Search' />
                <div  className="p-3 bg-[#0BE58A] rounded-full text-[#150B2B] cursor-pointer text-xl">
                    <FaRegUser></FaRegUser>
                </div>
            </div>
        </nav>
    </div>
  )
}

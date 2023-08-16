import { NavLink } from "react-router-dom";
import { Nav } from "../sharedcomponents/nav";
import {IoLogoApple} from "react-icons/io"
export const Header = () => {
  return (
    <header className="bg-[url('/Images/bannerBg.png')] bg-cover h-[100vh] py-10 md:px-10 lg:px-24 flex flex-col gap-y-24">
      <Nav />
      {/* BannerText */}
      <div className="grid grid-cols-7 ">
        <div className="col-span-3">
          <div>
            <h1 className="text-5xl font-bold">
              Run your <span className="text-[#11453B]">payroll</span>{" "}
              <span className="text-[#B4A572]">easily</span> in{" "}
              <span className="text-[#EA4E4B]">seconds</span>
            </h1>
            <p className="text-[#515251] my-6">
              We’ve built an all-inclusive simple solution for individual and
              businesses to manage staff, pay salaries, bills, and relevant
              taxes all at once.
            </p>
            <NavLink className="text-white bg-[#11453B] rounded-full py-3 text-sm px-10 shadow-lg">
              Start Using Free, Forever
            </NavLink>
          </div>

          <div className="mt-12">
            <p className="text-md mb-2">Download Eazipay App</p>
            <div className="flex">
              <div className="grid grid-cols-2 gap-x-2">

                <a href="" className="col-span-1 flex items-center gap-x-2 bg-white py-2 px-3 rounded-md">
                  <div className="w-6 h-6 rounded-full bg-[#F2F1F1] flex items-center justify-center">
                    <IoLogoApple size={14}/>
                  </div>
                  <div className="text-[10px]">
                    Download in the <br/> <b>Appstore</b>
                  </div>
                </a>


                <a href="" className="col-span-1 flex items-center gap-x-2 bg-white py-2 px-3 rounded-md">
                  <div className="w-6 h-6 rounded-full bg-[#F2F1F1] flex items-center justify-center">
                    <img src="./Images/googlePlay.svg"/>
                  </div>
                  <div className="text-[10px]">
                    Get on <br/> <b>Google Play</b>
                  </div>
                </a>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

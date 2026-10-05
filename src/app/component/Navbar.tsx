import Image from "next/image";
import logo from '@/assets/logo.webp';
import Navlinks from "./Navlinks";
import UserInfo from "./UserInfo";

const Navbar = () => {
    return (
        <div>
            {/* part1 */}
            <div className="lg:w-7xl mx-auto p-3 flex justify-between">
                <div className="absolute left-1/2 -translate-x-1/2 flex justify-center items-center gap-2">
                    <div>
                        <Image src={logo} alt="" height={30} width={47}></Image>
                    </div>
                    <div>
                         <h2 className="redtext text-2xl font-bold">Bangla News 24</h2>
                    <p className="text-gray-500 text-[13px]">শুক্রবার, ২ অক্টোবর, ২০২৬</p>
                    </div>
                </div>
            <UserInfo/>
            </div>
            {/* part2 */}
           <Navlinks/>
        </div>
    );
};
export default Navbar;

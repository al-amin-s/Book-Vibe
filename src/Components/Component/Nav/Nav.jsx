import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import ReviewPage from "../ReviewPage/ReviewPage";
import ListedBooks from "../Listed Books/ListedBooks";


const Nav = () => {
    return (
        <div >
            <div className="navbar bg-white md:w-[1150px] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  rounded-box w-52">
                            <li><Link to={"/home"}>Home</Link></li>
                            <li><Link to={"/listedBooks"}>Listed Books</Link></li>
                            <li><Link to={"/pagesToRead"}>Pages To Read</Link></li>
                            <li><Link to={"/oldBooks"}>old Books</Link></li>
                            <li><Link to={"/goodSideOfReadingBook"}>GoodSideOfReadingBook</Link></li>

                        </ul>
                    </div>
                    <h1 className="text-2xl text-black font-bold">Book Vib</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-black">
                        <li><Link to={"/home"}>Home</Link></li>
                        <li><Link to={"/listedBooks"}>Listed Books</Link></li>
                        <li><Link to={"/pagesToRead"}>Pages To Read</Link></li>
                        <li><Link to={"/oldBooks"}>Old Books</Link></li>
                        <li><Link to={"/goodSideOfReadingBook"}>Good Side Of Reading Book</Link></li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex gap-2">
                        <button className="btn border-none text-white bg-[#23BE0AFF]">Sing-in</button>
                        <button className="btn border-none text-white bg-[#59C6D2FF]">Simg-up</button>
                    </div>
                </div>
            </div>






            <div className="md:w-[1150px] mx-auto bg-white p-2">
                <div className="flex items-center justify-between text-center">
                    {/* <div><h1 className="text-2xl text-black font-bold">Book Vib</h1></div> */}
                    {/* <div className="flex gap-5 text-black">

                        <Link to={"/home"}>Home</Link>
                        <Link to={"/listedBooks"}>Listed Books</Link>
                        <Link to={"/pagesToRead"}>Pages To Read</Link>

                    </div> */}
                    {/* <div className="flex gap-2">
                        <button className="btn border-none text-white bg-[#23BE0AFF]">Sing-in</button>
                        <button className="btn border-none text-white bg-[#59C6D2FF]">Simg-up</button>
                    </div> */}

                </div>
                <Outlet></Outlet>
                {/* <ListedBooks></ListedBooks> */}
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Nav;
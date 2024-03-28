import { data } from "autoprefixer";
import Card from "../Card/Card";
import useLOcalStorage from "../Hook/UseLOcalStorage";
import UseLocalStorageWish from "../Hook/UseLocalStorageWish";
// import useLOcalStorage from "../Hook/useLOcalStorage";
import useCactData from "../Hook/useCactData";
// import ListedBookNav from "../ListedBookNav/ListedBookNav";
// import { Link, Outlet } from 'react-router-dom';
import ReadBooks from "../ReadBooks/ReadBooks";
import ReadBooksCard from "../ReadBooksCard/ReadBooksCard";
import ReadBooksCardWish from "../ReadBooksCard/ReadBooksCardWish";

const ListedBooks = () => {
    // const { data, loading } = useCactData();
    // console.log(data);
    const { localData } = useLOcalStorage();
    console.log(localData);

    const {localDataWish}=UseLocalStorageWish();

    return (
        <div className="mt-10">
            <div>
                <button className="btn  w-full border-none text-black font-bold text-xl bg-[#e6e6e6]">Book</button>
            </div>
            <div className=" text-center mt-2">
                <button class="btn btn-neutral bg-[#23BE0A] text-white border-none">Sort By</button>

            </div>


            <div className="
            md:flex ">
                <div className="w-1/2">
                    <ul className="menu menu-horizontal ">
                        <div className="flex ga">
                            <li><a>Read Books</a></li>

                        </div>
                    </ul>
                    <hr className="w-11/12" />
                    <div className="mt-10  rounded-2xl">
                        {
                            localData.map((data) => <ReadBooksCard key={data.id} data={data}></ReadBooksCard>)
                        }
                    </div>
                </div>



                <div className="w-1/2">
                    <ul className="menu menu-horizontal ">
                        <div className="flex ga">
                            <li><a>Wish list</a></li>

                        </div>
                    </ul>
                    <hr className="w-11/12" />

                    <div className="mt-10  rounded-2xl">
                        {
                           localDataWish.map((dataWish)=><ReadBooksCardWish key={dataWish.id} dataWish={dataWish}></ReadBooksCardWish>)

                        }
                    </div>
                </div>
            </div>


            {/* <ul className="menu menu-horizontal ">
                    <div className="flex ga">
                    <li><a>Read Books</a></li>
                    <li><a>Wishlist Books</a></li>
                    </div>
                    
                </ul> */}

            {/* <ReadBooks></ReadBooks> */}
        </div>

    );
};

export default ListedBooks;
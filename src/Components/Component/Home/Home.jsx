import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import useCactData from "../Hook/useCactData";
import Cart from "./Cart";


const Home = () => {
    // const books=useLoaderData()
    // const notify = () => toast("Wow so easy!");
    const { data, loading } = useCactData();
    // console.log(data);

    return (
        <div className="mt-10 ">


            <div className="hero min-h-screen bg-[#bcb1b1] rounded-xl">
                <div className="hero-content flex-col  lg:flex-row-reverse">
                    <img  src="https://i.ibb.co/j60QdQy/red-hardcover-book-front-cover.jpg" className="sm:w-[360px] max-w-sm rounded-lg shadow-2xl" />
                    <div className="flex-col">
                        <h1 className="text-5xl text-black font-bold mb-10">Books to freshen up <br /> your bookshelf</h1>

                        <Link to={'/listedBooks'}>
                        <button  className="btn border-none text-white bg-[#23BE0AFF]">View The List</button>
                        </Link>
                        
                    </div>
                    
                </div>
            </div>

            <div className="text-center mt-6 text-4xl text-black font-bold">
                <h1>Book</h1>
            </div>

            <div className="sm:place-items-center  md:grid grid-cols-3 place-items-center gap-5 mt-20 ">
                {
                    data.map((item) => (
                        <Cart key={item.id} item={item}></Cart>
                    ))
                }
            </div>
            {/* <ToastContainer /> */}
        </div>
    );
};

export default Home;
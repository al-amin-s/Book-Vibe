import React from 'react';
import { Link } from 'react-router-dom';

const ReadBooksCardWish = ({dataWish}) => {
    const { id, image, name, author, rating, category, tags, yearOfPublishing, publisher, totalPages } = dataWish || {};

    return (
        <div>
            <div>
            <div className="card lg:card-side bg-white shadow-xl border-[1px] my-2">
                <figure><img className='w-56 h-52 rounded-lg ml-3 shadow-xl ' src={image} alt="Album" /></figure>
                <div className="card-body p-0 ml-3 py-3">
                    <h2 className="card-title text-black">{name}</h2>
                    <p className=' text-black'>By : {author}</p>
                    <div className='flex items-center'>
                        <div>
                            <div className='flex gap-4'>
                                <button className='bg-gray-300 rounded-2xl font-medium text-[#23BE0AFF] w-auto h-8 px-3'>{tags[0]}</button>
                                <button className='bg-gray-300 rounded-2xl font-medium text-[#23BE0AFF] w-auto h-8 px-3'>{tags[1]}</button>
                            </div>
                        </div>
                        <div>
                            <h1 className='ml-2'>On:{yearOfPublishing}</h1>
                            
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <h1>Publisher :{publisher}</h1>
                        <h1>Pages :{totalPages}</h1>
                    </div>
                    <div className="card-actions ">

                        <div className=' gap-2'>
                        <button className=" bg-blue-200 text-blue-400 border-none p-1 rounded-2xl hover:">{category}</button>
                        <button className="mx-1 bg-orange-200 text-orange-400 border-none p-1 rounded-2xl hover:">Rating:{rating}</button>
                        <Link to={`/reviewPage/${id}`}>
                        <button className=" bg-[#23BE0A] text-gray-300 border-none p-1 rounded-2xl hover:">View Details
                        </button>
                        </Link>
                        </div>
                        {/* <div>
                        <button className="btn btn-primary">Watch</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ReadBooksCardWish;
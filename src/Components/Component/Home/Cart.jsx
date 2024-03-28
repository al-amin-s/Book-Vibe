import React from 'react';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';
const Cart = ({item}) => {
    console.log(item);
    const {id,image,name,author,rating,category,tags}=item||{};

    // const {name,image,author,category,rating}=book;
    return (
        <Link to={`/reviewPage/${id}`}>
        
        <div className=''>
            <div className="card w-80  bg-[#F3F3F3] shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-left text-center">
                    <div className='flex gap-4'>
                        <button className='bg-gray-300 rounded-2xl font-medium text-[#23BE0AFF] w-auto h-8 px-3'>{tags[0]}</button>
                        <button className='bg-gray-300 rounded-2xl font-medium text-[#23BE0AFF] w-auto h-8 px-3'>{tags[1]}</button>
                    </div>
                    <h2 className="card-title text-black font-medium">{name}</h2>
                    <p className='text-left text-gray-600 font-medium'>Author : {author}</p>
                    <hr />
                    <div className="card-actions flex justify-between text-gray-600 font-medium">
                        <p className='text-left'>{category}</p>
                        <span className='flex items-center'>{rating} <CiStar /></span>
                    </div>
                </div>
            </div>
        </div>

        </Link>
    );
};

export default Cart;
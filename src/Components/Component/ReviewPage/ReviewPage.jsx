import React, { useEffect, useState } from 'react';
import useCactData from '../Hook/useCactData';
import { useParams } from 'react-router-dom';
import { saveToLocalStorage, saveToLocalStorageRead } from '../Utils/LocalStorage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReviewPage = () => {
    // const {data,loading}=useCactData();
    // const {id,image,name,author,rating,category,tags}=data||{};
    const notify=()=>toast("Added to wishlist");
    const [singleData, setSingleData] = useState({});
    const { id } = useParams();
    const { data, loading } = useCactData();
    //  load to local storeg.

    const handleRed=()=>{
        saveToLocalStorage(singleData);
    }
    const handleWish=()=>{
        saveToLocalStorageRead(singleData)
    }





    // console.log(id)
    useEffect(() => {
        if (data) {
            const singleData = data.find((item) => item.id == id);
            setSingleData(singleData);
            // console.log(singleData);
        }
    }, [data, id]);
    const {image,name,author,rating,category,tags,totalPages,publisher,yearOfPublishing,review,description}=singleData||{};
    return (
        <div>
            

            <div className="hero min-h-screen bg-white p-5">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <div className='w-1/2'>
                        <img src={image}
                            className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className='w-1/2'>
                        <h1 className="text-5xl font-bold text-black mt-4">{name}</h1>
                        <p className='text-gray-600 font-medium mb-5'>By : {author}</p>

                        <div>
                            <hr />
                            <p className='text-gray-600 font-medium py-2'>{category}</p>
                            <hr />
                        </div>

                        <section className='mt-4'>
                            <h1 className='text-lg text-black font-semibold '>Review: <p className='text-gray-500 font-normal my-3 text-sm'>{description}</p></h1>
                        </section>
                        <div className='flex gap-5 mb-5'>
                            <h1 className='text-lg text-black font-semibold'>Tags:</h1>
                            <button className='bg-gray-300 rounded-2xl font-medium text-[#23BE0AFF] w-auto h-8 px-3'>{tags}</button>
                            <button className='bg-gray-300 rounded-2xl font-medium text-[#23BE0AFF] w-auto h-8 px-3'>{tags}</button>

                        </div>
                        <hr />
                        <div className='mt-5 flex-row '>
                            <h1 className='text-gray-500'>Number of page : {totalPages}</h1>
                            <h1 className='text-gray-500'>Publisher :{publisher} </h1>
                            <h1 className='text-gray-500'>Year of publishing :{yearOfPublishing} </h1>
                            <h1 className='text-gray-500'>Raring :{rating}</h1>
                        </div>
                        <div className='flex gap-10 mt-4'>
                            <button onClick={handleRed} className="btn btn-outline">Read</button>
                            <button className="btn btn-primary">Wshlist</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ReviewPage;
import React from 'react';
import Card from '../Card/Card';
import { useLoaderData } from 'react-router-dom';

const OldBooks = () => {
    const oldBooks=useLoaderData()
    console.log(oldBooks);
    return (
        <div >
            <h1 className='text-3xl text-center text-blue-950 font-bold'>Old is gold</h1>
            <div className="sm:place-items-center  md:grid grid-cols-3 place-items-center gap-5 mt-20 ">
            {
                oldBooks.map((item)=><Card key={item.id} item={item}></Card>)
            }
            </div>
        </div>
    );
};

export default OldBooks;
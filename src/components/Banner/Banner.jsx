import React from 'react';
import bannerbook from '../../assets/bannerbook.png';
const Banner = () => {
    return (
        <div className=' flex flex-col md:flex-row justify-around items-center p-10 w-full bg-base-200'>
            <div className='w-[25%] '>
                <h1 className='font-bold text-3xl'>Books to freshen up your bookshelf</h1>
                <button className='btn mt-4'>View The List</button>
            </div>
            <div>
                <img  className='w-[300px] h-[350px]' src={bannerbook} alt="" />
            </div>
        </div>
    );
};

export default Banner;
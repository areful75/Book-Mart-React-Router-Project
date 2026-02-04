// import React from 'react';
// import bannerbook from '../../assets/bannerbook.png';
// const Banner = () => {
//     return (
//         <div className=' flex flex-col md:flex-row justify-around items-center p-10 w-full bg-base-200'>
//             <div className=''>
//                 <h1 className='font-bold text-3xl'>Books to freshen <br /> up your bookshelf</h1>
//                 <button className='btn mt-4'>View The List</button>
//             </div>
//             <div>
//                 <img  className='w-[300px] h-[350px]' src={bannerbook} alt="" />
//             </div>
//         </div>
//     );
// };

// export default Banner;

import React from 'react';
import bannerbook from '../../assets/bannerbook.png';

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row justify-around items-center p-10 w-full bg-base-200'>
      <div className='text-center md:text-left'>
        <h1 className='font-bold text-3xl md:text-4xl leading-tight'>
          Books to freshen <br /> up your bookshelf
        </h1>
        <button className='btn btn-primary mt-4'>
          View The List
        </button>
      </div>

      <div className='mt-6 md:mt-0'>
        <img
          className='w-[220px] sm:w-[260px] md:w-[300px] h-auto'
          src={bannerbook}
          alt="Books banner"
        />
      </div>
    </div>
  );
};

export default Banner;

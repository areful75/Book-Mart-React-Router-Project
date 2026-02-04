import React from 'react';

const ReadListShow = ({book}) => {
    //console.log(book);
    return (
        
        <div className='flex flex-col md:flex-row p-5 border-2 border-base-300 rounded-2xl gap-5 mt-4'>
        <div>
            <img  className='w-[130px] h-[170px] bg-base-200 p-5 rounded-2xl' src={book.image} alt="" />
        </div>
        <div>
            <h3 className='text-2xl font-bold'>{book.bookName}</h3>
            <p className='mt-1'>By : {book.author}</p>
            <div className='flex mt-1 gap-3'>
                <h3>Tag</h3>
                {
                    book.tags.map((tag,index)=><p className='px-3 py-1 bg-base-300 text-green-600 rounded-3xl text-sm' key={index}>#{tag}</p>)
                }
                {/* <p className='px-1 py-1 bg-base-300 text-green-600 rounded-xl text-sm'>#identity</p> */}
            </div>
            <div className='flex mt-1 gap-3'>
                <p className=''>Publisher: {book.publisher}</p>
                <p>Page:{book.totalPages}</p>
            </div>
            <div className='mt-1 border-1 border-base-500 '></div>

            <div className='flex mt-2 gap-3'>
                <p className='px-4 py-2 bg-sky-200 rounded-3xl text-sm'>Category: {book.category}</p>
                <p className='px-4 py-2 bg-[#FFAC33] rounded-3xl text-sm'>Rating:{book.rating}</p>
                <p className='px-4 py-2 bg-green-500 rounded-3xl text-sm text-white'>View Details</p>


            </div>
        </div>
       </div>
    );
};

export default ReadListShow;
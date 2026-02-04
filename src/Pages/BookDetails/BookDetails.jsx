import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDb, addToWishStoredDb } from '../../utility/adToDb';
import bannerbook from '../../assets/bannerbook.png';


const BookDetails = () => {
    const {id}=useParams();
    //console.log(typeof(id));
    const data=useLoaderData();
    //console.log(data);

    const singleBook=data.find(book=>book.bookId===parseInt(id));
    //console.log(singleBook);
 const {bookName,author,rating,totalPages,language,yearOfPublishing,price,bookCover,image,category,review,publisher}=singleBook;
    //const { bookName, image } = singleBook ;

    const handleMarkAsRead=(id)=>{
        addToStoredDb(id);
    }

    const handleWishList=(id)=>{
        addToWishStoredDb(id);
       
    }
    return (
    //     <div className='w-2/3 mx-auto'>
    //        <img className='w-48' src={image} alt="" /> 
    //        <h5>{bookName}</h5>

    //        <button onClick={()=>{
    //         handleMarkAsRead(id);
    //        }} className='btn btn-accent m-2'>Read</button>
    //        <button onClick={()=>{
    //         handleWishList(id);
    //        }} className='btn btn-info m-2'>WishList</button>

    //     </div>

        <div className='flex flex-col md:flex-row gap-10'>
            
                <img className='w-[400px] h-[500px] bg-base-300 p-5' src={image} alt="" />
           
            <div>
                <h3 className='font-bold text-4xl'>{bookName}</h3>
                <p className='mt-2'>By : {author}</p>
                <div className='border-2  border-base-300 mt-2'></div>
                <p className='mt-2'>{category}</p>
                <div className='border-2 border-base-300 mt-2'></div>
                <p className='mt-2'> <span className='font-bold'>Review:</span> {review}</p>
                <div className='mt-2 flex gap-3'>
                    <p className='font-bold'>Tag</p>
                    {
                        singleBook.tags.map((tag,index)=> <p className='px-3 py-1 bg-base-300 text-green-600 rounded-3xl text-sm' key={index}>{tag}</p>)
                    }
                    
                </div>
                <div className='border-2 border-base-300 mt-2'></div>

                <p className='mt-2'>Number of Pages:{totalPages}</p>
                <p className='mt-2'>Publisher:{publisher}</p>

                <p className='mt-2'>Year of Publishing:{yearOfPublishing}</p>
                <p className='mt-2'>Rating:{rating}</p>

                <div className='mt-2 space-x-3'>
                <button onClick={()=>{
             handleMarkAsRead(id)}} className="btn">ReadList</button>
                <button onClick={()=>{
             handleWishList(id);
           }} className="btn bg-[#50B1C9] text-white">WishList</button>

                </div>



            </div>
        </div>
      
        
    );
};

export default BookDetails;
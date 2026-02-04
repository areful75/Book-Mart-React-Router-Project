import React, { use } from 'react';
import { FaStarHalfStroke } from "react-icons/fa6";
import { Link } from 'react-router';

const Book = ({ singleBook}) => {

    const {bookName,author,image,rating,category,tags,bookId}= singleBook;
   
    //console.log(singleBook);
    return (
     <Link to={`/bookDetails/${bookId}`}>
        <div className="card bg-base-100 w-96 shadow-sm border pt-6 px-6">
  <figure className='p-4 w-[95%] mx-auto bg-gray-100 rounded-2xl'>
    <img className='h-[166px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
  <div className='flex justify-center gap-10'>
            {
                tags.map((tag,index)=><button className='px-3 py-1 bg-base-300 text-green-600 rounded-3xl text-sm' key={index} >{tag}</button>)
            }
        </div>
    <h2 className="card-title">
       
     {bookName}
    </h2>
    <p>By:{author}</p>
    <div className='border-1 border-dashed'></div>

    <div className=" flex justify-between">
      
      <div >{category}</div>
      <div className='flex items-center gap-2' >{rating} <FaStarHalfStroke /></div>
    </div>
  </div>
</div></Link>
    );
};

export default Book;





// {bookId: 1, bookName: 'The Great Gatsby', author: 'F. Scott Fitzgerald', image: 'https://i.ibb.co.com/khHN7Pk/9780143454212.jpg', review: "'The Great Gatsby' by F. Scott Fitzgerald is a tim…a literary gem that resonates across generations.", …}
// author
// : 
// "F. Scott Fitzgerald"
// bookId
// : 
// 1
// bookName
// : 
// "The Great Gatsby"
// category
// : 
// "Classic"
// image
// : 
// "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg"
// publisher
// : 
// "Scribner"
// rating
// : 
// 4.5
// review
// : 
// "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations."
// tags
// : 
// (2) ['Fiction', 'Romance']
// totalPages
// : 
// 192
// yearOfPublishing
// : 
// 1925
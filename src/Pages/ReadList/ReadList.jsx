import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook, getWishStoredBook } from '../../utility/adToDb';
import Book from '../Book/Book';
import ReadListShow from '../../components/ReadListShow/ReadListShow';
const ReadList = () => {

    const [readlist,setReadlist]=useState([]);
    const [wishlist,setWishlist]=useState([]);
    
     const data=useLoaderData();

    //console.log(data);


    useEffect(() => {
        const storedData=getStoredBook();
       const convertedStoredData=storedData.map(id=>parseInt(id));
        //console.log(convertedStoredData);
        const readListBooks=data.filter(book=>convertedStoredData.includes(book.bookId));
        //console.log(readListBooks);
        setReadlist(readListBooks);
    }, []);


    useEffect(() => {
        const storedWishList=getWishStoredBook();
        const convertedWishList=storedWishList.map(id=>parseInt(id));
        //console.log(convertedWishList);
        const wishListBooks=data.filter(book=>convertedWishList.includes(book.bookId));
        setWishlist(wishListBooks);

    }, [])

    //console.log(readlist);
    //console.log(wishlist);  
    return (
        <div>
              <div className="card bg-base-300 rounded-box grid h-20 place-items-center font-bold text-3xl mb-10">Books</div>


            <Tabs>
    <TabList>
      <Tab>ReadList</Tab>
      <Tab>WishList</Tab>
    </TabList>

    <TabPanel>
      <h2>ReadList {readlist.length}</h2>
      <div className=''>
      {
        readlist.map(book=>(<ReadListShow book={book} key={book.bookId}></ReadListShow>))
      }
      </div>
    </TabPanel>
    <TabPanel>
      <h2>WishList {wishlist.length}</h2>
      <div className=''>
      {
        wishlist.map(book=>(<ReadListShow book={book} key={book.bookId}></ReadListShow>))
      }
      </div>
    </TabPanel>
  </Tabs>

        </div>
    );
};

export default ReadList;
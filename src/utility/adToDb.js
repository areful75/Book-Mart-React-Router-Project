const getStoredBook=()=>{
    const storedBook=localStorage.getItem('readList');
    if(storedBook){
        return JSON.parse(storedBook);
    }
    return [];
}

const addToStoredDb=(id)=>{
    const storedBookData=getStoredBook();

    if(storedBookData.includes(id)){
       alert('This Book is already in your Read List');
    }
    else{
        storedBookData.push(id);
        localStorage.setItem('readList',JSON.stringify(storedBookData));
    }
}

const getWishStoredBook=()=>{
    const storedWishBook=localStorage.getItem('wishList');
    if(storedWishBook){
        return JSON.parse(storedWishBook);
    }
    return [];
}

const addToWishStoredDb=(id)=>{
    const storedWishBookData=getWishStoredBook();

    if(storedWishBookData.includes(id)){
       alert('This Book is already in your Wish List');
    }
    else{
        storedWishBookData.push(id);
        localStorage.setItem('wishList',JSON.stringify(storedWishBookData));
    }
}




export {addToStoredDb,getStoredBook,addToWishStoredDb,getWishStoredBook};
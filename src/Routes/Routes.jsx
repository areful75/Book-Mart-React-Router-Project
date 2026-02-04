import React from 'react';

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import BookDetails from '../Pages/BookDetails/BookDetails';
import ReadList from '../Pages/ReadList/ReadList';

export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
     errorElement:<ErrorPage></ErrorPage>,


      children:[
        {index:true,
         
            
             Component:Home,

              loader:()=>fetch('/BookData.json')
              

            },
             
             {
                path:'/about',
                Component:About
             },
             {
                path:'/bookDetails/:id',
                loader:()=>fetch('/BookData.json'),
                Component:BookDetails,
             },
             {
              path:'/readList',
              loader:()=>fetch('/BookData.json'),
              Component:ReadList
             }
      ]

    },
  ]);
  
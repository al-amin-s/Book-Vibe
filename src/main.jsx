import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Component/Home/Home';
import Nav from './Components/Component/Nav/Nav';
import ListedBooks from './Components/Component/Listed Books/ListedBooks';
import PagesToRead from './Components/Component/Pages to read/PagesToRead';
import ReviewPage from './Components/Component/ReviewPage/ReviewPage';
import ReadBooks from './Components/Component/ReadBooks/ReadBooks';
import OldBooks from './Components/Component/OldBooks/OldBooks';
import GoodSideOfReadingBook from './Components/Component/GoodSideOfReadingBook/GoodSideOfReadingBook';
import Error from './Components/Component/Error/Error';

const router=createBrowserRouter([
  {
    path:'/',
    element:<Nav></Nav>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/home',
        // loader:()=>fetch('https://al-amin-s.github.io/jsonData/public.json'),
        element:<Home></Home>
      },
      {
        path:'/listedBooks',
        element:<ListedBooks></ListedBooks>
        
      },
      {
        path:'/pagesToRead',
        element:<PagesToRead></PagesToRead>
      },
      {
        path:'/reviewPage/:id',
        element:<ReviewPage></ReviewPage>
      },
      {
        path:'/readBooks',
        element:<ReadBooks></ReadBooks>
      },
      {
        path:'/oldBooks',
        loader:()=>fetch('../public/oldBooks.json'),
        element:<OldBooks></OldBooks>
      },
      {
        path:'/goodSideOfReadingBook',
        element:<GoodSideOfReadingBook></GoodSideOfReadingBook>
      }
      
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

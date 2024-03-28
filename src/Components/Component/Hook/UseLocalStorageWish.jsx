import React, { useEffect, useState } from 'react';
import { getFromLocalStorage } from '../Utils/LocalStorage';

const UseLocalStorageWish = () => {
const [localDataWish,setLocalDataWish]=useState([]);
useEffect(()=>{
    setLocalDataWish(getFromLocalStorage());

},[]);

    return {localDataWish};
};

export default UseLocalStorageWish;
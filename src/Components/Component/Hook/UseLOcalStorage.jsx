import React, { useEffect, useState } from 'react';
import { getFromLocalStorage } from '../Utils/LocalStorage';

const UseLOcalStorage = () => {
    const [localData,setLocalData]=useState([]);
    useEffect(()=>{
        setLocalData(getFromLocalStorage());
    },[]);
    return {localData};
};

export default UseLOcalStorage;
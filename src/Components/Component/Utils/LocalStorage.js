// import { toast } from "react-toastify";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Toast } from 'react-toastify/dist/components';

export const saveToLocalStorage=(data)=>{
    const savedData=JSON.parse(localStorage.getItem("read"))||[];
    const existedData=savedData.find((item)=>item.id==data.id);
    const notify=()=>toast("Added to read");
    const notifyed=()=>toast("Alrady added to read");
    if(!existedData){
        savedData.push(data);
        localStorage.setItem("read",JSON.stringify(savedData));
        // alert("added succesfully to local storeg..");
        notify();
    }
    else{
        // alert("already ache")
        notifyed();
    }
    
};
export const getFromLocalStorage=()=>{
    const data=JSON.parse(localStorage.getItem("read"))||[];
    return data;
};





export const saveToLocalStorageRead=(data)=>{
    const savedData=JSON.parse(localStorage.getItem("read"))||[];
    const existedData=savedData.find((item)=>item.id==data.id);
    const notify=()=>toast("Added to wish list");
    const notifyed=()=>toast("Alrady added to wish list");
    if(!existedData){
        savedData.push(data);
        localStorage.setItem("read",JSON.stringify(savedData));
        // alert("added succesfully to local storeg..");
        notify();
    }
    else{
        // alert("already ache")
        notifyed();
    }
    
};
export const getFromLocalStorageRead=()=>{
    const data=JSON.parse(localStorage.getItem("read"))||[];
    return data;
};

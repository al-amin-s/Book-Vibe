import React, { useEffect, useState } from 'react';

const useCactData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState([true]);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await fetch("/public/book.json");
            const data = await res.json();
            setData(data);
            setLoading(false);
        };
        fetchData();
    }, []);
    return {data,loading};
};

export default useCactData;
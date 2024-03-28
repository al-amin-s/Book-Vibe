import React from 'react';
import UseLOcalStorage from '../Hook/UseLOcalStorage';
import Chart from '../Chart/Chart';

const PagesToRead = () => {
    const {localData}=UseLOcalStorage();
    return (
        <div>
            <Chart ></Chart>
        </div>
    );
};

export default PagesToRead;
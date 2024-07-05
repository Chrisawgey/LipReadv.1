import React, { useState, useEffect } from 'react';
import "./ImplementSection.css";

const ImplementSection = () => {
  const [data, setData] = useState({ message: '', error: '', returncode: null });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/'); //port fetched is 5000 since flask displays a json from 5000 usually
        const result = await response.json();
        setData(result);
      } catch (error) {
        setData({ message: '', error: error.message, returncode: null });
      }
    };

    fetchData();
  }, []);


// message contains whatever is spit out in console from helloworld.py (temp)

  return (
    <div>
      <h1 className="dataHeader">Flask App Output</h1>
      <p className="dataParagraph">{data.message}</p>
      {data.error && <p>Error: {data.error}</p>}
    </div>
  );
};

export default ImplementSection;





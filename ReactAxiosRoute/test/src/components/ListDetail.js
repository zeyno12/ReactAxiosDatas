import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export const ListDetail = () => {
  const [detail, setDetail] = useState([]);
  const {id}=useParams()
  console.log(id);


  const GetApi = async () => {
    const api = `https://jsonplaceholder.typicode.com/photos/${id}`;
    await axios
      .get(api)
      .then((res) => res.data)
      .then((res) => setDetail(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    GetApi();
  }, []);
  return (
    <section>
      <div className="container">
        <div className="row">
       <div className="col-lg-12">
        <img src={detail.thumbnailUrl}/>
        <h2>{detail.title}</h2>
        <h5>{detail.albumId}</h5>
       </div>
        </div>
      </div>
    </section>
  );
};

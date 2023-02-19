import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const List = () => {
  const [data, setData] = useState([]);
  const[search,setSearch]=useState(" ")

  const GetApi = async () => {
    const api = "https://jsonplaceholder.typicode.com/photos";
    await axios
      .get(api)
      .then((res) => res.data)
      .then((res) => setData(res))
      .then((res)=>setSearch(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    GetApi();
  }, []);

 

  return (
    <>
      <div className="container">
        <h2 className="text-center mt-5 pt-5">List Page</h2>

        <input  onChange={(e)=>setSearch(e.target.value)} type='text' placeholder="Axtar...." />
        <div className="row">
          {
           data.filter((val) => {
            if (search === " ") {
                return val;
            } else if (
                val.title?.toUpperCase()
                  
                    .includes(search?.toUpperCase())
            ) {
                return val;
            }
        })
          
        
            .slice(0, 28).map((el, id) => (
              <div key={`data-id${id}`} className="col-lg-3 mt-3">
                <div className="card">
                  <img
                    src={el.thumbnailUrl}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      {el.title} {el.id}
                    </p>
                    <Link  className="btn btn-primary box-shadow-none" to={`${el.id}`}>Go Detail</Link>
                  </div>
                </div>
               
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default List;

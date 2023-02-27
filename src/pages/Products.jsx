import React from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";

function Products({ phones, deleteData }) {
  const navigate = useNavigate();
  return (
    <div
      className="products-cards"
      style={{ marginLeft: "100px", marginTop: "30px" }}
    >
      {phones.map((item) => {
        return (
          <div>
            <div
              style={{
                width: "300px",
                border: "1px solid black",
                borderRadius: "8px",
                marginTop: "50px",
                marginLeft: "20px",
                marginRight: "20px",
              }}
            >
              <div key={item.id}>
                <img src={item.image} alt="" style={{ width: "300px" }} />
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <h2>{item.title}</h2>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <h1>{item.price}</h1>
              </div>
              <button onClick={(e) => navigate(`edit/${item.id}`)}>Edit</button>
              <button
                onClick={(e) => {
                  deleteData(item.id);
                }}
              >
                delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;

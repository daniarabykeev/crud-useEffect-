import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const initValue = {
  image: "",
  title: "",
  price: "",
};

function AddProduct({ addData }) {
  const navigate = useNavigate();
  const [phone, setPhone] = useState(initValue);
  function handleInput(e) {
    let obj = {
      ...phone,
      [e.target.name]: e.target.value,
    };
    setPhone(obj);
  }
  return (
    <div style={{ marginLeft: "100px", marginTop: "30px" }}>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          addData(phone);
          console.log(phone);
          setPhone(initValue);
          navigate("/list");
        }}
      >
        <input
          name="image"
          value={phone.image}
          type="text"
          onChange={(e) => {
            handleInput(e);
          }}
        />
        <input
          name="title"
          value={phone.title}
          type="text"
          onChange={(e) => {
            handleInput(e);
          }}
        />
        <input
          name="price"
          value={phone.price}
          type="text"
          onChange={(e) => {
            handleInput(e);
          }}
        />
        <button>Add product</button>
      </form>
    </div>
  );
}

export default AddProduct;

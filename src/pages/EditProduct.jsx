import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const initValue = {
  image: "",
  title: "",
  price: "",
};

function EditProduct({ onePhone, getOnePhone, editPhone }) {
  const params = useParams();
  const navigate = useNavigate();
  const [phone, setPhone] = useState();
  function handleChange(e) {
    const obj = {
      ...phone,
      [e.target.name]: e.target.value,
    };
    setPhone(obj);
  }

  useEffect(() => {
    getOnePhone(params.id);
  }, []);

  useEffect(() => {
    if (onePhone) {
      setPhone(onePhone);
    }
  }, [onePhone]);

  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          console.log(phone);
          editPhone(params.id, phone);
          setPhone(initValue);
          navigate("/");
        }}
      >
        <input
          value={phone.image}
          name="image"
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          value={phone.title}
          name="title"
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          value={phone.price}
          name="price"
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </form>
    </div>
  );
}

export default EditProduct;

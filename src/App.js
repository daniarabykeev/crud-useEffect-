import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import MainRoute from "./routes/MainRoute";

function App() {
  const [phones, setPhones] = useState([]);
  const [onePhone, setOnePhone] = useState(null);
  const API = "http://localhost:8002/phones";

  async function getData() {
    const { data } = await axios(API);
    setPhones(data);
  }
  useEffect(() => {
    getData();
  }, []);

  async function addData(newComp) {
    await axios.post(API, newComp);
    getData();
  }

  async function deleteData(id) {
    await axios.delete(`${API}/${id}`);
    getData();
  }

  async function getOnePhone(id) {
    const { data } = await axios(`${API}/${id}`);
    setOnePhone(data);
  }

  async function editPhone(id, editedPhone) {
    await axios.patch(`${API}/${id}`, editedPhone);
    getData();
  }
  return (
    <div>
      <MainRoute
        phones={phones}
        addData={addData}
        deleteData={deleteData}
        getOnePhone={getOnePhone}
        onePhone={onePhone}
        editPhone={editPhone}
      />
    </div>
  );
}

export default App;

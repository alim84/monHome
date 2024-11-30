import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [email, setEmail] = useState("");
  let [showdata, setShowdata] = useState([]);

  let hangleSubmit = () => {
    axios
      .post("http://localhost:4000/createdata/", {
        name: name,
        age: age,
        email: email,
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function showAlldata() {
    axios
      .get("http://localhost:4000/alldata/")
      .then((data) => {
        setShowdata(data.data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    showAlldata();
  }, []);

  let handleDelete = (id) => {
    axios
      .delete(`http://localhost:4000/deletedata/${id}`)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className=" flex mx-auto w-[600px] h-[600px] bg-gray-400 pl-5 shadow-lg shadow-sky-400">
        <div>
          <h1 className="text-center font-bold text-2xl text-teal-800">
            {" "}
            Enter Data
          </h1>
          Name:
          <input
            onChange={(e) => setName(e.target.value)}
            className="py-3 px-24 ml-4 rounded p m-5"
            type="text"
            placeholder="Enter your Name"
          />
          <br />
          age :
          <input
            onChange={(e) => setAge(e.target.value)}
            className="py-3 px-24 ml-4 rounded mb-5"
            type="text"
            placeholder="Enter your Name"
          />
          <br />
          email:
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="py-3 px-24 ml-4 rounded mb-5"
            type="text"
            placeholder="Enter your Name"
          />
          <br />
          <button
            onClick={() => hangleSubmit()}
            className="px-10 py-3 bg-red-400 rounded-lg "
          >
            Add
          </button>
        </div>
      </div>

      <div className="w-[800px] h-[600px] flex mx-auto mt-12 bg-gray-200 shadow-2xl shadow-white">
        <div className="justify-between font-bold text-xl">
          {showdata.data &&
            showdata.data.map((item) => (
              <div className="flex p-6" key={item.id}>
                {" "}
                <p className="p-2">{item.name}</p>
                <p className="p-2">{item.age}</p>
                <p className="p-2">{item.email}</p>{" "}
                <button
                  onClick={() => handleDelete(item._id)}
                  className="px-10 py-3 bg-red-400 rounded-lg ml-5 "
                >
                  Delete
                </button>
                <button className="px-10 py-3 bg-green-400 rounded-lg ml-6 ">
                  Edit
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default App;

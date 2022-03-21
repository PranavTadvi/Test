import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    getData();
  }, []);
  const [allData, setAllData] = useState([]);
  // const [id, setID] = useState("asd");
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const getData = async () => {
    //--------------------DATA FETCH FROM JSON PUBLIC API-------------------------//
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/comments?postId=1"
    );
    let a = await result.data;

    let finalData = JSON.stringify(result);
    console.log(finalData);
    // console.log(a);
    // console.log(allData.id, allData.name, allData.email, allData.body);
    // var api = `https://api.etherscan.io/api
    // ?module=account
    // &action=balancemulti
    // &address=0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a,0x63a9975ba31b0b9626b34300f7f627147df1f526,0x198ef1ec325a96cc354c7266a038be8b5c558f67
    // &tag=latest
    // &apikey=XNV1YAHXIXGK6I5PRNKK94HASUY6PD71T5`;
    // console.log(api);

    //--------------------DATA FETCH FROM ETHERSCAN API-------------------------//

    // const resultEther =
    //   await axios.get(`https://api.etherscan.io/api?module=account&action=balancemulti&address=0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a,0x63a9975ba31b0b9626b34300f7f627147df1f526,0x198ef1ec325a96cc354c7266a038be8b5c558f6 &tag=latest
    // &apikey=XNV1YAHXIXGK6I5PRNKK94HASUY6PD71T5`);
    // let newEtherResult = await resultEther.data;

    // console.log(newEtherResult);

    // console.log(newEtherResult.account, newEtherResult.balance);

    // a.map((allData, index) => {
    //   console.log(allData.id, allData.name, allData.email, allData.body);
    // });
    // let finalData = JSON.stringify(result);
    //     console.log(finalData);

    setAllData(a);
  };
  // -------------------API DATA INSERT TO DB--------------------//
  const addUser = async (e) => {
    let result = await fetch("http://localhost:5000/newdata", {
      method: "post",
      body: JSON.stringify(allData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(result);
  };
  addUser();
  // const aaa = () => {
  //   setID(allData.id);
  //   setName(allData.name);
  //   setEmail(allData.email);
  //   setBody(allData.body);
  // };
  return (
    <div className="App">
      {/* <div>
        <input
          className="form-control"
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <input
          className="form-control"
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
          className="form-control"
          type="text"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button className="btn btn-success mt-2" onClick={addUser}>
          Save
        </button>
      </div> */}
      <h1>Hello</h1>
      {allData.map((allData, index) => {
        return (
          <div key={allData.id}>
            <h2>{allData.id}</h2>
            <h3>{allData.name}</h3>
            <h4>{allData.email}</h4>
            <h4>{allData.body}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default App;

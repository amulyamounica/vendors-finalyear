import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Mailbox,
  Mailbox2,
  Phone,
  PhoneFill,
  PhoneVibrateFill,
} from "react-bootstrap-icons";

export default function Profile() {
  var bodyss = {
    name: localStorage.getItem("email"),
  };
  console.log(bodyss.name);
  const [value, setValues] = useState("");
  const [data, setData] = useState("");
  useEffect(() => {
    axios.post("http://localhost:8081/vendors", bodyss).then((response) => {
      for (var i in response.data) {
        if (response.data[i].name == localStorage.getItem("session1")) {
          setValues(response.data[i]);
          console.log(response.data[i]);
        }
      }
    });
    var bodys = {
      loc: "personal",
    };
    axios.post("http://localhost:8081/shops", bodys).then((response) => {
      for (var i in response.data) {
        console.log(response.data[i].api);
        if (response.data[i].api == localStorage.getItem("session1")) {
          setData(response.data[i]);
          console.log(response.data[i]);
        }
      }
    });
  }, []);
  return (
    <div>
      <br></br>
      <br></br>
      <table align="center">
        <tr>
          <td>
            <img src={data.img} hieght="500px" width="500px"></img>
          </td>
          <td>
            <span> </span>
          </td>
          <td width="400px">
            <h4 style={{ color: "#9900e6" }}>{data.name}</h4>
            <br></br>
            <h6>
              <PhoneFill />
              <lable style={{ color: "#9900e6" }}>PhoneNumber: </lable>
              {value.phone}
              <br></br>
              <Mailbox2 />
              <lable style={{ color: "#9900e6" }}>Email:</lable> {value.email}
              <br></br>
              <br></br>
              <lable style={{ color: "#9900e6" }}>Description:</lable>{" "}
              {data.desc}
              <br></br>
              <br></br>
              <lable style={{ color: "#9900e6" }}> City: </lable>
              {data.city}
            </h6>
          </td>
        </tr>
      </table>
    </div>
  );
}

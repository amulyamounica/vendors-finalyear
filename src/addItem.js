import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

import "./login.css";

export default function addItem(props) {
  var d1 = JSON.parse(localStorage.getItem("users"));
  var user = [];
  for (var i in d1) {
    user.push(d1[i]);
  }

  var users = [];
  function clickMe1() {
    var a = document.getElementById("exampleInputName1").value;
    var b = document.getElementById("exampleInputEmail1").value;
    var c = document.getElementById("exampleInputPassword1").value;
    var f = document.getElementById("exampleInputPhone").value;
    var g = document.getElementById("pantry").value;
    var ob = {
      name: a,
      img: b,
      desc: c,
      price: f,
      pantryType: g,
    };
    var p = localStorage.getItem("session1");
    axios
      .post("http://localhost:8081/" + p + "Items", ob)
      .then(function (response) {
        document.getElementById("paras").innerHTML =
          "Successfully Added the item";
      }, [])
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="Login forms">
      <br></br>
      <h3>Add Item</h3>
      <br></br>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          id="exampleInputName1"
          placeholder="Enter ItemName"
        />
      </div>
      <p className="para" id="nameFlag"></p>
      <div class="form-group">
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="Image URL"
        />
      </div>
      <p className="para" id="emailFlag"></p>
      <div class="form-group">
        <input
          type="text"
          class="form-control "
          id="exampleInputPassword1"
          placeholder="description"
        />
      </div>

      <div class="form-group">
        <input
          type="text"
          class="form-control"
          id="exampleInputPhone"
          placeholder="price"
        />
      </div>
      <div class="form-group">
        <select id="pantry">
          <option value="1">select pantryType</option>
          <option value="Packaged Foods">Packaged Foods</option>
          <option value="Cooking Essentials">Cooking Essentials</option>
          <option value="Dryfruits">Dryfruits</option>
          <option value="Cleaning and Household">Cleaning and Household</option>
          <option value="Personal Care">Personal Care</option>
          <option value="Beverages">Beverages</option>
          <option value="PetProducts">PetProducts</option>
        </select>
      </div>

      <button type="submit" onClick={clickMe1} class="btn btn-primary">
        Submit
      </button>
      <br></br>
      <span className="paras" id="paras"></span>
    </div>
  );
}

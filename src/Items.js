import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import "./item.css";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Home from "./home";
import { render } from "@testing-library/react";
import "./updateItems.css";
export default function Items() {
  var history = useHistory();
  const [item, setItems] = useState([]);
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);

  const cart = JSON.parse(localStorage.getItem("Cart"));
  var child = [];
  var items = JSON.parse(localStorage.getItem("CartItems"));
  for (var i in items) {
    cart.push(items[i]);
  }
  const [isOpen, setIsOpen] = useState(false);
  const [item_val, setItemVal] = useState("");
  const togglePopup = (k) => {
    var d = isOpen;
    setIsOpen(!isOpen);
    if (d) window.location.reload();
    setItemVal(k);
  };
  const Delete = (k) => {
    var d = localStorage.getItem("session1");
    console.log(k);
    Swal.fire({
      title: "Do you want to Delete the Item?",
      showDenyButton: true,
      confirmButtonText: `delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        var ob = {
          name: k._id,
        };
        axios.post("http://localhost:8081/delete" + d, ob).then((response) => {
          console.log(response);
        });
        window.location.reload();
        Swal.fire("Deleted!", "", "success");
      }
    });
  };
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleChange1 = (event) => {
    setImg(event.target.value);
  };
  const handleChange2 = (event) => {
    setDesc(event.target.value);
  };
  const handleChange3 = (event) => {
    setPrice(event.target.value);
  };
  useEffect(() => {
    var p = {
      loc: localStorage.getItem("location"),
    };
    var d = localStorage.getItem("session1");
    axios.post("http://localhost:8081/" + d, p).then((response) => {
      setItems(response.data);
      console.log(item);
    });
  }, []);
  const clickMe1 = (k) => {
    if (name == "") var a = document.getElementById("exampleInputName1").value;
    else {
      var a = name;
    }
    if (img == "") var b = document.getElementById("exampleInputEmail1").value;
    else {
      var b = img;
    }
    if (desc == "")
      var c = document.getElementById("exampleInputPassword1").value;
    else var c = desc;
    if (price == 0) var f = document.getElementById("exampleInputPhone").value;
    else {
      var f = price;
    }
    var ob = {
      id: item_val._id,
      ItemName: a,
      img: b,
      desc: c,
      price: f,
      pantryType: k.pantryType,
    };
    console.log(ob);
    var p = localStorage.getItem("session1");
    axios
      .post("http://localhost:8081/update" + p, ob)
      .then(function (response) {
        console.log("hi");
        document.getElementById("para").innerHTML =
          "Successfully Updated the item";
      })
      .catch(function (error) {
        console.log(error);
      });
    togglePopup();
  };

  return (
    <div>
      <div className="row">
        {item.map((k) => {
          return (
            <div className="col-md-3">
              <Card
                style={{
                  width: "16rem",
                  height: "450px",
                  borderRadius: "10px",
                  margin: "25px",
                  boxShadow: "rgb(0 0 0 / 35%) 0px 5px 15px",
                }}
              >
                <Card.Img
                  variant="top"
                  src={k.img}
                  style={{
                    height: "150px",
                    width: "170px",
                    alignSelf: "center",
                  }}
                  height="200px"
                />
                <Card.Body>
                  <Card.Title>{k.ItemName}</Card.Title>
                  <Card.Text>
                    {k.desc}
                    <br></br>
                    <h6>Price:{k.price}</h6>
                  </Card.Text>
                  <Button variant="primary" onClick={() => Delete(k)}>
                    Delete
                  </Button>
                  <br></br>
                  <br></br>
                  <Button onClick={() => togglePopup(k)}>updateDetails</Button>
                </Card.Body>
              </Card>
              <div
                className="popup-box"
                style={{ display: isOpen ? "block" : "none" }}
              >
                <div className="box">
                  <span className="close-icon" onClick={togglePopup}>
                    x
                  </span>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputName1"
                      placeholder="Enter ItemName"
                      onChange={handleChange}
                      defaultValue={item_val.ItemName}
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      onChange={handleChange1}
                      placeholder="Image URL"
                      defaultValue={item_val.img}
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control "
                      onChange={handleChange2}
                      id="exampleInputPassword1"
                      placeholder="description"
                      defaultValue={item_val.desc}
                    />
                  </div>

                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      onChange={handleChange3}
                      id="exampleInputPhone"
                      placeholder="price"
                      defaultValue={item_val.price}
                      contentEditable="true"
                    />
                  </div>
                  <button
                    type="submit"
                    style={{ backgroundColor: "white", color: "blue" }}
                    onClick={() => clickMe1(item_val)}
                    class="btn btn-primary"
                  >
                    Submit
                  </button>
                  <br></br>
                  <span style={{ color: "red" }} id="para">
                    *Please do verify before update
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

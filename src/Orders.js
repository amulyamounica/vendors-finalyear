// import React from "react";
// import { Card, Button } from "react-bootstrap";
// import { useHistory } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import "./item.css";
// import PropTypes from "prop-types";
// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
// import hashmap from "hashmap";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";
// export default function Orders() {
//   const [item, setItems] = useState([]);
//   const HashMap = require("hashmap");
//   var maps = new HashMap();
//   const [Completed, setCompleted] = useState([]);
//   const deliveredItems = () => {
//     var bodyss = {
//       name: item[0].name,
//       progress: item[0].progress,
//       shop: item[0].shop,
//     };
//     axios
//       .post("http://localhost:8081/updateOrders", bodyss)
//       .then((response) => {
//         console.log(response.data);
//         window.location.reload();
//       });
//   };
//   var ma = "";
//   var c = 0;
//   var board = [];
//   var count = [];
//   useEffect(() => {
//     var p = {
//       name: localStorage.getItem("session1"),
//     };
//     axios.post("http://localhost:8081/ordersVendor", p).then((response) => {
//       setItems(response.data);
//       var d = [];
//       var k = [];
//       var l = [];
//       for (var i in response.data) {
//         if (response.data[i].shop == localStorage.getItem("session1")) {
//           if (response.data[i].progress == "In progress") {
//             k.push(response.data[i]);
//           } else {
//             l.push(response.data[i]);
//           }
//         }
//       }
//       k.sort(function (a, b) {
//         return parseInt(a.name) - parseInt(b.name);
//       });
//       l.sort(function (a, b) {
//         return parseInt(a.name) - parseInt(b.name);
//       });
//       // Object.values(maps.values()).map((k) => {
//       //   console.log("object", k);
//       // });

//       l.map((a) => {
//         if (a.name != ma) {
//           ma = a.name;
//           board.push(a.name);
//           c++;
//         }
//       });

//       var index = 0;
//       c = 0;
//       l.map((a) => {
//         if (a.name == board[index]) {
//           c++;
//         } else {
//           count.push(c);
//           c = 1;
//           index++;
//         }
//       });
//       setItems(k);
//       setCompleted(l);
//       console.log(maps);
//     });
//   }, []);
//   var s;
//   const [value, setValue] = React.useState(0);
//   TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.any.isRequired,
//     value: PropTypes.any.isRequired,
//   };
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//   function a11yProps(index) {
//     return {
//       id: `simple-tab-${index}`,
//       "aria-controls": `simple-tabpanel-${index}`,
//     };
//   }
//   function TabPanel(props) {
//     const { children, value, index, ...other } = props;

//     return (
//       <div
//         role="tabpanel"
//         hidden={value !== index}
//         id={`simple-tabpanel-${index}`}
//         aria-labelledby={`simple-tab-${index}`}
//         {...other}
//       >
//         {value === index && (
//           <Box p={3}>
//             <Typography>{children}</Typography>
//           </Box>
//         )}
//       </div>
//     );
//   }
//   function groupArrayOfObjects(list, key) {
//     return list.reduce(function (rv, x) {
//       (rv[x[key]] = rv[x[key]] || []).push(x);
//       return rv;
//     }, {});
//   }

//   return (
//     <div className="orders">
//       <AppBar position="static">
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           aria-label="simple tabs example"
//           style={{ backgroundColor: "#b793f7" }}
//         >
//           <Tab label="Orders" {...a11yProps(0)} />
//           <Tab label="Delivered Items" {...a11yProps(1)} />
//         </Tabs>
//       </AppBar>
//       <TabPanel value={value} index={0}>
//         <h2>
//           Order Details{" "}
//           <button class="btn btn-primary" onClick={() => deliveredItems()}>
//             Delivered
//           </button>
//         </h2>
//         <br></br>
//         <table border="1" width="75%" align="center">
//           <tr>
//             <td>
//               <h5>Customer</h5>
//             </td>
//             <td>
//               <h5>Items</h5>
//             </td>
//             <td>
//               <h5>Name</h5>
//             </td>
//             <td>
//               <h5>Price</h5>
//             </td>
//             <td>
//               <h5>Shop</h5>
//             </td>
//           </tr>
//           {item.map((k) => {
//             return (
//               <tr>
//                 <td>{k.name}</td>
//                 <td>
//                   <img src={k.img} height="100px" width="100px"></img>
//                 </td>
//                 <td>{k.ItemName}</td>
//                 <td>{k.price}</td>
//                 <td>{k.shop}</td>
//               </tr>
//             );
//           })}
//         </table>
//         <br></br>
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         <h3>Delivered Items</h3>
//         <br></br>
//         <table border="1" width="75%" align="center">
//           <tr>
//             <td>
//               <h5>Customer</h5>
//             </td>
//             <td>
//               <h5>Items</h5>
//             </td>
//             <td>
//               <h5>Name</h5>
//             </td>
//             <td>
//               <h5>Price</h5>
//             </td>
//             <td>
//               <h5>Shop</h5>
//             </td>
//           </tr>

//           {Completed.map((k) => {
//             var p = "";
//             var i = 0;
//             return (
//               <tr>
//                 <td rowspan={count[i++]}>{k.name}</td>
//                 <td>
//                   <img src={k.img} height="100px" width="100px"></img>
//                 </td>
//                 <td>{k.ItemName}</td>
//                 <td>{k.price}</td>
//                 <td>{k.shop}</td>
//               </tr>
//             );
//             p = k.name;
//           })}
//         </table>
//         <br></br>
//       </TabPanel>
//     </div>
//   );
// }
import React from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./item.css";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import hashmap from "hashmap";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
export default function Orders() {
  const [item, setItems] = useState([]);
  const [board, setBoard] = useState([]);
  const [board1, setBoard1] = useState([]);
  const [user, setUser] = useState([]);
  const HashMap = require("hashmap");
  var maps = new HashMap();
  const [Completed, setCompleted] = useState([]);
  const deliveredItems = () => {
    var bodyss = {
      name: user,
      progress: "In progress",
      shop: localStorage.getItem("session1"),
    };
    axios
      .post("http://localhost:8081/updateOrders", bodyss)
      .then((response) => {
        console.log(response.data);
        window.location.reload();
      });
  };
  var ma = "";
  var c = 0;
  var boar = [];
  var count = [];
  useEffect(() => {
    var p = {
      name: localStorage.getItem("session1"),
    };
    axios.post("http://localhost:8081/ordersVendor", p).then((response) => {
      setItems(response.data);
      var d = [];
      var k = [];
      var l = [];
      setBoard([]);
      setBoard1([]);
      for (var i in response.data) {
        if (response.data[i].shop == localStorage.getItem("session1")) {
          if (response.data[i].progress == "In progress") {
            k.push(response.data[i]);
          } else {
            l.push(response.data[i]);
          }
        }
      }
      k.sort(function (a, b) {
        return parseInt(a.name) - parseInt(b.name);
      });
      l.sort(function (a, b) {
        return parseInt(a.name) - parseInt(b.name);
      });
      l.map((a) => {
        var c = 0;
        for (var i = 0; i < boar.length; i++) {
          if (a.name == boar[i]) {
            c = 1;
          }
        }
        if (c == 0) {
          boar.push(a.name);
        }
      });
      var boar1 = [];
      ma = "";
      k.map((a) => {
        var c = 0;
        for (var i = 0; i < boar1.length; i++) {
          if (a.name == boar1[i]) {
            c = 1;
          }
        }
        if (c == 0) {
          boar1.push(a.name);
        }
      });
      setItems([]);
      setBoard(boar);
      setBoard1(boar1);
      console.log(boar);
      console.log(boar1);
      setCompleted([]);
      console.log(maps);
    });
  }, []);
  var s;
  const [value, setValue] = React.useState(0);
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  function groupArrayOfObjects(list, key) {
    return list.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }
  const handle = () => {
    var d = document.getElementById("select");
    setUser(d.value);
    var p = {
      name: d.value,
    };
    axios.post("http://localhost:8081/sendOrders", p).then((response) => {
      var k = [];
      var l = [];
      for (var i in response.data) {
        if (response.data[i].progress == "In progress") {
          k.push(response.data[i]);
        } else {
          if (response.data[i].shop == localStorage.getItem("session1"))
            l.push(response.data[i]);
        }
      }
      setCompleted(l);
      console.log(l);
    });
  };

  console.log(user);
  const handleOrder = () => {
    var d = document.getElementById("select");
    var p = {
      name: d.value,
    };
    setUser(d.value);
    axios.post("http://localhost:8081/sendOrders", p).then((response) => {
      var k = [];
      var l = [];
      for (var i in response.data) {
        if (
          response.data[i].progress == "In progress" &&
          response.data[i].shop == localStorage.getItem("session1")
        ) {
          k.push(response.data[i]);
        } else {
          l.push(response.data[i]);
        }
      }
      setItems(k);
      console.log(k);
    });
  };
  var p = 2;
  return (
    <div className="orders">
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          style={{ backgroundColor: "#b793f7" }}
        >
          <Tab label="Orders" {...a11yProps(0)} />
          <Tab label="Delivered Items" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <h2>
          Order Details
          <br></br>
          <button class="btn btn-primary" onClick={() => deliveredItems()}>
            Delivered
          </button>
        </h2>
        <label style={{ color: "red" }}>
          please select the user to view orders*{" "}
        </label>
        <br></br>
        <select id="select" onChange={handleOrder}>
          <option>Select a customer</option>
          {board1.map((a) => {
            return <option value={a}>{a}</option>;
          })}
        </select>
        <br></br>
        <br></br>
        <br></br>
        <table border="1" width="100%" align="center">
          <tr>
            <td>
              <h5>Customer</h5>
            </td>
            <td>
              <h5>Items</h5>
            </td>
            <td>
              <h5>Name</h5>
            </td>
            <td>
              <h5>Price</h5>
            </td>
            <td>
              <h5>Quantity</h5>
            </td>
            <td>
              <h5>Address</h5>
            </td>
            <td>
              <h5>Contact no</h5>
            </td>
            <td>
              <h5>Date and Time</h5>
            </td>
          </tr>
          {item.map((k) => {
            return (
              <tr>
                <td>{k.name}</td>
                <td>
                  <img src={k.img} height="100px" width="100px"></img>
                </td>
                <td>{k.ItemName}</td>
                <td>{k.price}</td>
                <td>{k.quantity}</td>
                <td>{k.address}</td>
                <td>{k.phone}</td>
                <td>
                  {k.dates.toString() +
                    "-" +
                    k.months.toString() +
                    "-" +
                    k.years.toString()}
                  <br></br>
                  {k.times}
                </td>
              </tr>
            );
          })}
        </table>
        <br></br>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h3>Delivered Items</h3>
        <br></br>
        <label style={{ color: "red" }}>
          please select the user to view orders*{" "}
        </label>
        <br></br>
        <select id="select" onChange={handle}>
          <option>Select a customer</option>
          {board.map((a) => {
            return <option value={a}>{a}</option>;
          })}
        </select>
        <br></br>
        <br></br>
        <table border="1" width="100%" align="center">
          <tr>
            <td>
              <h5>Customer</h5>
            </td>
            <td>
              <h5>Items</h5>
            </td>
            <td>
              <h5>Name</h5>
            </td>
            <td>
              <h5>Price</h5>
            </td>
            <td>
              <h5>Quantity</h5>
            </td>
            <td>
              <h5>Address</h5>
            </td>
            <td>
              <h5>Contact no</h5>
            </td>
            <td>
              <h5>Date and Time</h5>
            </td>
          </tr>

          {Completed.map((k) => {
            return (
              <tr>
                <td>{k.name}</td>
                <td>
                  <img src={k.img} height="100px" width="100px"></img>
                </td>
                <td>{k.ItemName}</td>
                <td>{k.price}</td>
                <td>{k.quantity}</td>
                <td>{k.address}</td>
                <td>{k.phone}</td>
                <td>
                  {k.dates.toString() +
                    "-" +
                    k.months.toString() +
                    "-" +
                    k.years.toString()}
                  <br></br>
                  {k.times}
                </td>
              </tr>
            );
          })}
        </table>
        <br></br>
      </TabPanel>
    </div>
  );
}

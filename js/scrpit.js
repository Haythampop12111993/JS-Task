// var tracks = ["Wep Design", "Ccna", "Network"]
// if (tracks.includes("Graphice") == true) {
//   console.log("it in")
// }
// else {
//   tracks.push("Graphice");
// }
// console.log(tracks)
// var arr = ["Wep", "Cnna", , true];
// arr.forEach((ele, arr, arry) => {
//   if (arry.includes("JS") == false) {
//     arry.push("JS");
//   }
// });
// console.log(arr);
///////////////////////////////////////////////////////////////////////////////
// var arr = ["Html", "Css", "BR", "JS", 100, 70, 50, 30];
// var retern = arr.findIndex((ele) => ele == "JS");
// console.log(retern);
// retern = arr.findIndex((ele) => ele == "Angolar");
// console.log(arr);
// if (retern == -1) {
//   arr.push("Angolar");
// }
// console.log(arr);
// var ret = arr.find((ele) => ele > 50);
// console.log(ret);
// var ret = arr.filter((ele) => ele > 50);
// console.log(ret);
// ret = arr.find((ele) => ele > 200);
// console.log(ret);
// ret = arr.find((ele) => ele > 200);
// if (ret == undefined) arr.push(200);
// console.log(arr);
///////////////////////////////////////////////////////////////////////////////////////
// var numberOfUsers = +prompt("Enter Number Of Users ");
// var userName = prompt("Enter Yr First Name");
// var userBalance = prompt("Enter Yr Balance");
// var userId = +prompt("Enter Yr ID");

// var crtona = [];

// function getAddUser(a) {
//   for (i = 0; i < a; i++) {
//     var UserInfo = {
//       Name: prompt("Enter Yr First Name"),
//       Balance: prompt("Enter Yr Balance"),
//       ID: +prompt("Enter Yr ID"),
//     };
//     crtona.push(UserInfo);
//   }
// }
// console.log(crtona)
// // getEdituser()
// getAddUser(numberOfUsers);
// console.log(crtona);
// function getEdituser() {
//   var ask = prompt("Y need to update?? y , n");
//   if (ask == "y") {
//     var id = prompt("Enter ID");
//     UserInfo.id = id
//   } else if (ask == "n") {
//     console.log("Y dont Need UPDate");
//   }
// }
///////////////////////////////////////////////////////////////////////
// var user = {
//   name: "Ahmed",
//   age: 29,
//   adress: "Giza",
//   getChangeAdress: () => {
//     var ask = prompt("D Y Need Change Adress");
//     if (ask.toLowerCase() == "yes") {
//       newAdress = prompt("Enter New Adress");
//       user.adress = newAdress;
//       console.log("change Done");
//       console.log(user);
//     } else {
//       console.log("Y Dont Need Change");
//       console.log(user);
//     }
//   },
// };
// user.getChangeAdress();
///////////////////////////////////////////////////
// function getChangeVar() {
//   const ask = prompt("D Y Want T Change Var");
//   if (ask.toLowerCase() === "yes") {
//     const getNewName = prompt("Enter Your New Name")
//     const allV = {
//       name: "HHH",
//       age: 29,
//       adress: "Giza",
//     };
//     const userName = "K"
//     allV.name = userName
//     console.log(userName);
//   } else {
//     console.log(allV);
//   }
// }
// getChangeVar();
// console.log(allV)

///////////////////////////////////////////////
// let allMonths = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// const date = new Date();
// indexforM = date.getMonth()
// // let monthName = allMonths.forEach((ele, indx, ary) )
// for (i = 0; i < indexforM; i++){
//   if (i == indexforM) {
//       console.log(i)
//     }
//   }
//   console.log(allMonths[i])
//////////////////////////////////////////

// function getChangeimg() {
//   changesur = document.getElementsByTagName("img");
//   console.log(changesur[0].src);
//   if (changesur[0].src == "file:///D:/JS%20Test/imgs/bg1-360x260.jpg") {
//     changesur[0].src = "file:///D:/JS%20Test/imgs/bg3-360x260.jpg";
//   } else {
//     changesur[0].src = "file:///D:/JS%20Test/imgs/bg1-360x260.jpg";
//   }
// }
////////////////////////////////////////////////////////////////////////////////////
// var ulId = document.getElementById("Parent");
// var classElm = document.getElementsByClassName("sup")
// pro = classElm[0].children;
// function styleElemt(elem) {
//   console.log(classElm);
//   for (i = 0; i < pro.length;i++){
//    pro[i].style.color = "Black"
//   }
//   elem.style.color = "Red"
// }

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////// CRUD1////////////////////////////////////////

let getAddBtnId = document.getElementById("#btnAdd");
let getInputName = document.getElementById("inPutName");
let getInputBalance = document.getElementById("inPutBalance");
let getInputId = document.getElementById("inPutId");

allUsers = [];
if (localStorage.getItem("AllUsers") != null) {
  
  allUsers = JSON.parse(localStorage.getItem("AllUsers"));
} else {
  allUsers = []
}
getDisplayUser();
function getAddUser() {
  if (getInputName.value == "") {
    alert("Plz Inter A Name ??");
  } else if (getInputBalance.value == "") {
    alert("Plz Inter  Balance Number ??");
  } else if (getInputId.value == "") {
    alert("Plz Inter  ID Number ??");
  } else {
    user = {
      name: getInputName.value,
      balance: getInputBalance.value,
      id: getInputId.value,
    };
    allUsers.push(user);
    localStorage.setItem("AllUsers", JSON.stringify(allUsers));
    getDisplayUser();
    clearForm();
  }
}
function getDisplayUser() {
  cartona = "";
  for (i = 0; i < allUsers.length; i++) {
    cartona += `<tr>
              <td>
                ${i + 1}
              </td>
              <td>
                ${allUsers[i].name}
              </td>
              <td>
                ${allUsers[i].balance}
              </td>
              <td>
                ${allUsers[i].id}
              </td>
              <td class="text-center">
                <button onclick="getUpDate(${i})"   class="btn btn-primary px-3 me-3">Edit</button>
                <button onclick="getDeleteUser(${i})" class="btn btn-warning px-2">Delete</button>
              </td>
            </tr>`;
  }
  document.getElementById("displayUsers").innerHTML = cartona;
}

function getDeleteUser(i) {
  allUsers.splice(i, 1);
    localStorage.setItem("AllUsers", JSON.stringify(allUsers));
  getDisplayUser();
}
function getUpDate(i) {
  let newName = prompt("Enter Ur New Name");
  let newBalance = prompt("Enter Ur New Balance");
  let newId = prompt("Enter Ur New ID");
  allUsers[i].name = newName;
  allUsers[i].balance = newBalance;
  allUsers[i].id = newId;
  localStorage.setItem("AllUsers",JSON.stringify(allUsers));
  getDisplayUser();
}
function clearForm() {
  getInputName.value = "";
  getInputBalance.value = "";
  getInputId.value = "";
}

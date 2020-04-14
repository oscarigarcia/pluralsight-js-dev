import "./index.css";
import { getUser } from "./api/userApi";

getUser().then((result) => {
  let userBody = "";

  result.forEach((data) => {
    userBody += `<tr>
    <td><a href="#" data-id="${data.id}" class="deleteUser">Delete</a></td>
    <td>${data.id}</td>
    <td>${data.firstName}</td>
    <td>${data.lastName}</td>
    </tr>`;
  });

  global.document.getElementById("users").innerHTML = userBody;
});

// const courseValue = numeral(1000).format("$0,0.00");
// debugger;
// console.log(`I would pay ${courseValue} for this awesome course!`);

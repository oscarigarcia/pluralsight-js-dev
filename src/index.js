import "./index.css";
import { getUser, deleteUser } from "./api/userApi";

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

  const deleteLinks = global.document.getElementsByClassName("deleteUser");

  Array.from(deleteLinks, (link) => {
    return (link.onClick = function (event) {
      const element = event.target;
      event.preventDefault();
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    });
  });
});

// const courseValue = numeral(1000).format("$0,0.00");
// debugger;
// console.log(`I would pay ${courseValue} for this awesome course!`);

// document.getElementById("login").addEventListener("click", login());
function login() {
  window.location.href = "login.html";
}

const container = document.getElementById("details");
let weather = [];
try {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=26.2588602&lon=82.0716893&appid=6025a845412af7e1bbdc140449943184"
  )
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      const {
        name,
        main: { temp, temp_max, temp_min, feels_like },
      } = data;
      // weather.push({
      //   name,
      //   temp,
      //   temp_max,
      //   temp_min,
      //   feels_like,
      // });
      weather = [
        ...weather,
        {
          name,
          temp,
          temp_max,
          temp_min,
          feels_like,
        },
      ];
      // console.log(weather);
      // const block = document.createElement("div");
      container.innerHTML = weather.map((ele) => {
        // console.log(ele.name);
        return (document.createElement(
          "div"
        ).innerHTML = `<div><h2 class="text-sm md:text-xl mb-4">City Name:${ele.name}</h2>
               <h3 class="text-sm md:text-xl mb-4">Current Temperature:${ele.temp} Kelvin</h3>
               <h4 class="text-sm md:text-xl mb-4">Maximum Temperature:${ele.temp_max} Kelvin</h4>
               <h5 class="text-sm md:text-xl mb-4">Minimun Temperature: ${ele.temp_min} Kelvin</h5>
               <h6 class="text-sm md:text-xl mb-4">Feels like:${ele.feels_like} Kelvin</h6></div>`);
      });
      // container.innerHTML = display;
    });
} catch (error) {
  console.log(error);
}

function checkWeather() {
  var name = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  // let validateInput=true;
  let html = "";
  if (name.length == 0 || email.length == 0 || password.length == 0) {
    let htmlSegment = `<p class="text-red-500">**All fields are Mandtory**</p>`;
    html += htmlSegment;
    let message = document.querySelector("#message");
    message.innerHTML = html;
  } else if (password.length < 5) {
    let htmlSegment = `<p class="text-red-700 bg-sky-500/75">
            Password must be atleast 5*Character
          </p>`;
    html += htmlSegment;
    let message = document.querySelector(".message1");
    message.innerHTML = html;
  } else {
    localStorage.setItem("user", name);
    window.addEventListener("click", function () {
      document.location.href = "./dashboard.html";
      alert("Your account has been created");
    });}
}
// function checkWeather() {
//   var name = document.getElementById("username").value;
//   var email = document.getElementById("email").value;
//   var password = document.getElementById("password").value;
//   const validateInputs = (name, email, password) => {
//     let inputIsValidated = true; // lets consider that inputs are fine and correct initially.

//     if (!!name.length && !!email.length && !!password.length) {
//       // Assuming that both name and password are required, there will be 2 conditions to check individually:
//       // 1. name should not be empty
//       // 2. password should not be empty OR password length should not be less than 8 characters
//       // If any of the required inputs are not provided, it will result in validation being false.
//       inputIsValidated = false;
//     } else if (password.length < 8) {
//       inputIsValidated = false;
//     }
//     return inputIsValidated;
//   };

//   const validationPassed = validateInputs(name, email, password);

//   if (!validationPassed) {
//     let htmlSegment = `<p class="text-red-500">**All fields are Mandtory**</p>`;
//     html += htmlSegment;
//     let message = document.querySelector("#message");
//     message.innerHTML = html;
//   } else {
//     localStorage.setItem("user", name);
//     window.addEventListener("click", function () {
//       document.location.href = "./dashboard.html";
//       alert("Your account has been created");
//     });
//   }
// }
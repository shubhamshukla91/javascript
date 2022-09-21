function createUser() {
  window.location.href = "./createUser.html";
}
function logout() {
  window.location.href = "./index.html";
  localStorage.clear();
}

const container = document.getElementById("container");
const url = "https://reqres.in/api/users";
let usersloggedin = [];

try {
<<<<<<< HEAD
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let persons = data;
      // console.log(persons.data)
      persons.data.map((values) => {
        usersloggedin.push({
          name: values.first_name,
          email: values.email,
          img: values.avatar,
        
=======
    fetch(url)
      .then((res) => res.json())
      .then(({ data }) => data.map(({ first_name, email, avatar }) => {
          return usersloggedin.push({
            name: first_name,
            email: email,
            img: avatar,
          });
>>>>>>> 4da6ccdd5be281561640c7a5059876c23c3d2581
        });
}
      const block = document.createElement("div");
      let display = usersloggedin.map((ele) => {
        // console.log(ele.name);
        return (block.innerHTML = `<div class="max-w-2xl rounded overflow-hidden shadow-lg mt-20 ml-6">
	        <h2 class="m-auto text-center text-2xl font-bold text-gray-500">${ele.name}</h2>
	        <h3 class="m-auto text-center text-xl font-medium mt-8">${ele.email}</h3>
	        <img class="object-fill h-48 w-68 m-auto mt-6 mb-4" src="${ele.img}" alt="profile photo">
	        </div>`);
      });
      container.innerHTML = display;
    });
} catch (error) {
  console.log(error);
}

//console.log(fetch(url))
// fetch(url)
//   .then((resp) => resp.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))

// async function getDetails() {
//   try {
//     const container = document.getElementById("container");
//     const url = "https://reqres.in/api/users";
//     let usersloggedin = [];
//     const resp = await fetch(url);
//     const data = await resp.json();
//     const users = await data;
//     users.data.map((values) => {
//       usersloggedin.push({
//         name: values.first_name,
//         email: values.email,
//         img: values.avatar,
//       });

//       const block = document.createElement("div");
//       let display = usersloggedin.map((ele) => {
//         // console.log(ele.name);
//         return (block.innerHTML = `<div class="max-w-2xl rounded overflow-hidden shadow-lg mt-20 ml-6">
// 	        <h2 class="m-auto text-center text-2xl font-bold text-gray-500">${ele.name}</h2>
// 	        <h3 class="m-auto text-center text-xl font-medium mt-8">${ele.email}</h3>
// 	        <img class="object-fill h-48 w-68 m-auto mt-6 mb-4" src="${ele.img}" alt="profile photo">
// 	        </div>`);
//       });
//       container.innerHTML = display;
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }
//console.log(getDetails().then())

function saveDetails() {
  var name = document.getElementById("username").value;
  var userJob = document.getElementById("job").value;
  var userId = document.getElementById("email").value;

  if (name.length == 0 || userJob.length == 0 || userId.length == 0) {
    window.location.href = "./createUser.html";
    alert("please mention details properly!");
  } else {
    const url = "https://reqres.in/api/users";
    let usersloggedin = [];
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        job: userJob,
        email: userId,
      }),
      headers: { "Content-type": "application/json;charset=utf-8" },
    })
      .then((res) => res.json())
      .then(({ data }) => data.map(({ name, userJob, userId }) => {
          return usersloggedin.push({
            name: name,
            job: userJob,
            email: userId,
          })
        })
        .catch((err) => console.log(err.message))
        const block = document.createElement("div");
        let display = usersloggedin.map((ele) => {
          console.log(ele.name);
          return (block.innerHTML = `<div class="max-w-2xl rounded overflow-hidden shadow-lg mt-20 ml-6">
                      <h2 class="m-auto text-center text-2xl font-bold text-gray-500">${ele.name}</h2>
                      <h3 class="m-auto text-center text-xl font-medium mt-8">${ele.userJob}</h3>
                      <h3 class="m-auto text-center text-xl font-medium mt-8">${ele.userId}</h3>
                      </div>`);
        });
        container.innerHTML = display;
      })
    window.location.href = "./dashboard.html";
    alert("Yours provided details have been recorded.");
  
}

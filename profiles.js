profiles = [{
    "profile": "Nicole",
    "entries": []
}, {
    "profile": "Andres",
    "entries": []
}];


let currUser = localStorage.getItem("profile");


const nicole_user = {
  name: "Nicole",
  age: "35",
  bio: "mother of two <3 love hiking!! Have two puppers, work in banking! live laugh",
  goals: "reflect twice a week!!"
}

const andres_user = {
  name: "Andres",
  age: "18",
  bio: "hello",
  goals: "reflect every day!!"
}

function changeIndexHTML() {
    if (currUser == "Nicole") {
      console.log("its nicole")
      document.getElementById("name").innerHTML = "Name: " + nicole_user["name"];
      document.getElementById("age").innerHTML = "Age: " + nicole_user["age"];
      document.getElementById("bio").innerHTML = "Who I am: " + nicole_user["bio"];
      document.getElementById("goals").innerHTML = "My reflection goals: "  + nicole_user["goals"];
    }

    else  if (currUser == "Andres") {
        console.log("its andres")
        document.getElementById("name").innerHTML = "Name: " + andres_user["name"];
        document.getElementById("age").innerHTML = "Age: " + andres_user["age"];
        document.getElementById("bio").innerHTML = "Who I am: " + andres_user["bio"];
        document.getElementById("goals").innerHTML = "My reflection goals: "  + andres_user["goals"];
      }
    };

  changeIndexHTML();

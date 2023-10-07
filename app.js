

usersElement = []

fetch('https://randomuser.me/api')           //api for the get request
  .then(response => response.json())
  .then(data => {
    
    firstname = data.results[0].name["first"];
    lastname = data.results[0].name["last"];

    propic = data.results[0].picture["large"]
    
    city = data.results[0].location["city"];
    state = data.results[0].location["state"];
    country = data.results[0].location["country"];
    
    phone = data.results[0].cell
    email = data.results[0].email

    document.getElementById("name").innerHTML = firstname + " " + lastname
    document.getElementById("propic").src = propic ; 
    document.getElementById("location").innerHTML =`${city},${state},${country}`
    document.getElementById("phone-number").innerHTML = phone
    document.getElementById("email").innerHTML = email

    
});
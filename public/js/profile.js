$(document).ready(function(){

  const email = localStorage.email
  
  loadUserData(email)

 
})

function loadUserData(email){
    $.ajax({
        url: "api/users/" + email ,
        method: "GET"
    })
    .then(function (data) {
        console.log(data)

        var firstNameArr = data.first_name.split("")
        firstNameArr[0] = firstNameArr[0].toUpperCase()
        var firstName = firstNameArr.join("")

        var postFirst = $("#firstName").html("Hey there, " + firstName)

        var postLocation = $("#location").html("Location: " + data.zipCode)

        var postAbout = $("#about").html(data.about)


        loadPlants(data)
    })
}

function loadPlants(data){
    console.log(data.id)

    const userId = data.id

    $.ajax({
        method: 'GET',
        url: '/api/plants',
        where:{
            UserId: userId
        }
    }).then(result => {
        if (result === undefined || result.length == 0){
            var postNull = $("#null-plant").html("<a role='button' href='/search' id='btn' class='btn btn-success'> Add Some Plants </a>")  
        }
        console.log(result)

        for (var i = 0; i < result.length; i++) {
            

        const gardenCard = $("<div>");

        gardenCard.append("<h3>" + result[i].plant_name + "</h3>")
        gardenCard.append("<p>" + result[i].description + "</p>")
        gardenCard.append("<p> Stay away from: " + result[i].pests + "</p>")
        gardenCard.append("<span> <button class='add btn btn-success' id='remove' value=" + result[i].id +"> Remove </button>  <button class='swap btn btn-success' id='swap'> Swap </button> </span>")
     
        $("#print-garden").append(gardenCard)
        }
       
        removePlant(data)
    })
}

function removePlant(data) {
    $("#remove").on("click", function(){
    event.preventDefault();

    var id = $(this).attr('value');

    $.ajax({
      method: "DELETE",
      url: "/api/plants/" + id
    }).then(
        location.reload()
    );

    })
  }
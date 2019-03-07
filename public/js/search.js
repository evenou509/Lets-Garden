$(document).ready(function(){

    const email = localStorage.email


    console.log(localStorage)
 
    loadUserData(email)

    searchPlants()

   
 })
 
 function loadUserData(email){
     $.ajax({
         url: "api/users/" + email ,
         method: "GET"
     })
     .then(function (data) {
         console.log(data)

         localStorage.setItem('id', data.id)

     })
 }
 
 function searchPlants(){

    console.log("loading plants")



      $("#search").on("click", function(){
        event.preventDefault();

        const search1 = $("#searchingPlant").val()

        var search1Arr = search1.split("")
        search1Arr[0] = search1Arr[0].toUpperCase()
        var findPlant = search1Arr.join("")
        console.log(findPlant)

        const queryUrl = "http://harvesthelper.herokuapp.com/api/v1/plants?api_key=9bbe0cb9fc09ec115e66e1a2908a4d9e"


        $.ajax({
            url: queryUrl ,
            method: "GET"
        })
        .then((result) => {
 
            result.filter( plants => plants.name === findPlant).map(plants =>
                 
                printCard(plants)

                )
      
          })
          .catch(err => console.log(err));


      })
 }


 function printCard(plants) {

    $("#print").empty()

        console.log(plants)

        const plantCard = $("<div class='card'>");
        plantCard.append("<h3 id='card-title' class='card-title'>" + plants.name + "</h3>")
        plantCard.append("<p class='card-text'>" + plants.description + "</p>")
        plantCard.append("<p class='card-text'> Stay away from: " + plants.pests + "</p>")
        plantCard.append("<span> <button class='add btn btn-outline-dark' id='add'> Add to you Garden </button>  <button class='swap btn btn-outline-dark' id='swap'> Request Swap </button> </span>")

        $("#print").append(plantCard)

        addPlants(plants)
    
 }

function addPlants(plants){


    const userId = localStorage.id
    console.log(userId, " this is the user id")

    $("#add").on("click", function(){
        event.preventDefault();
        console.log(plants)



        var newPlant = {
            plant_id: plants.id,
            plant_name: plants.name,
            UserId: userId,
        }

        console.log(newPlant)


        var currentURL = window.location.origin;

        $.post(currentURL + "/api/plants", newPlant, function (data){
            console.log("this worked")
            
        })
    })



}
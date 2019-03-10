//add zip code to plant model
// enter user zip code to populate in local area


$(document).ready(function(){

    const email = localStorage.email
 
    loadUserData(email)

    searchPlants()

    loadSwaps()
 })
 
 function loadUserData(email){
     $.ajax({
         url: "api/users/" + email ,
         method: "GET"
     })
     .then(function (data) {

         localStorage.setItem('id', data.id)

     })
 }
 
 function searchPlants(){

      $("#search").on("click", function(){
        event.preventDefault();

        const search1 = $("#searchingPlant").val()

        var search1Arr = search1.split("")
        search1Arr[0] = search1Arr[0].toUpperCase()
        var findPlant = search1Arr.join("")

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

        const plantCard = $("<div class='card'>");
        plantCard.append("<h3 id='card-title' class='card-title'>" + plants.name + "</h3>")
        plantCard.append("<p class='card-text'>" + plants.description + "</p>")
        plantCard.append("<p class='card-text'> Stay away from: " + plants.pests + "</p>")
        plantCard.append("<span> <button class='add btn btn-outline-dark' id='add'> Add to you Garden </button>  <button class='swap btn btn-outline-dark' id='swap'> Request Swap </button> </span>")

        $("#print").append(plantCard)

        addPlants(plants)

        swapPlants(plants)
 }

function addPlants(plants){

    const userId = localStorage.id

    $("#add").on("click", function(){
        event.preventDefault();

        var newPlant = {
            plant_name: plants.name,
            description: plants.description,
            optimal_sun: plants.optimal_sun,
            when_to_plant: plants.when_to_plant,
            growing_from_seed: plants.growing_from_seed,
            spacing: plants.spacing,
            transplanting: plants.transplanting,
            watering: plants.watering,
            pests: plants.pests,
            harvesting: plants.harvesting,
            garden: true,
            request: false,
            swap: false,
            UserId: userId,
        }

        var currentURL = window.location.origin;

        $.post(currentURL + "/api/plants", newPlant, function (data){
            alert(plants.name + " has been added to your garden!")
            
        })
    })

}

function swapPlants(plants){
    const userId = localStorage.id

    $("#swap").on("click", function(){
        event.preventDefault();

        var newPlant = {
            plant_name: plants.name,
            description: plants.description,
            optimal_sun: plants.optimal_sun,
            when_to_plant: plants.when_to_plant,
            growing_from_seed: plants.growing_from_seed,
            spacing: plants.spacing,
            transplanting: plants.transplanting,
            watering: plants.watering,
            pests: plants.pests,
            harvesting: plants.harvesting,
            garden: false,
            request: true,
            swap: false,
            UserId: userId,
        }

        var currentURL = window.location.origin;

        $.post(currentURL + "/api/plants", newPlant, function (data){
            alert(plants.name + " has been requested!")
            
        })
    })  
}

function loadSwaps(){

    $.ajax({
        url: "api/plants/",
        method: "GET",

    }).then( data => {
        console.log(data)

        for (var i = 0; i < data.length; i++) {

            if (data[i].swap === true) {
    
                console.log(data[i].plant_name)
    
            }
        }
    
    })
       

}
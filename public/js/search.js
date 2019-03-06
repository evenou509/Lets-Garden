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

     })
 }
 
 function searchPlants(){

    console.log("loading plants")



      $("#search").on("click", function(){
        event.preventDefault();

        const findPlant = $("#searchingPlant").val()
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

        console.log(plants.name)

        const plantCard = $("<div class='card'>");
        plantCard.append("<h3 id='card-title' class='card-title'>" + plants.name + "</h3>")
        plantCard.append("<p class='card-text'>" + plants.description + "</p>")
        plantCard.append("<p class='card-text'> Stay away from: " + plants.pests + "</p>")
        plantCard.append("<span> <button class='add btn btn-outline-dark'> Add to you Garden </button>  <button class='swap btn btn-outline-dark'> Request Swap </button> </span>")

        $("#print").append(plantCard)
//  <div>
//  <div className="card">
//   <div className="card-body">
//   <h3 id="card-title" className="card-title">{props.name}</h3>
//   <br/>
//   <p className="card-text">{props.description}</p> 
//   <p className="card-text">{props.watering}</p> 
//   <p className="card-text">Stay away from {props.pests}</p>
//   <span >
//  <button className="add btn btn-outline-dark" {...props} > Add to your Garden</button>
//  <br/>
//  <br/>
//  <button className="swap btn btn-outline-dark" {...props} > Request Swap</button>
// </span>
//   </div>
// </div>
// </div>

    // var visitDate = result[i].createdAt;
    // var formatDate = moment(visitDate).format('ll')

    // var history = $("<tr>");
    // history.append("<td>" + formatDate + "</td>")
    // history.append("<td>" + result[i].reason_for_visit + "</td>")
    // history.append("<td>" + result[i].body + "</td>")
    // history.append('<td>' + result[i].employee + '</td>')

    // $("#print-history").append(history)
 }


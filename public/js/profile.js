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
        if (result === null){
            var postNull = $("#null-plant").html("<button id='btn' class='btn btn-success'> Add Some Plants </button")  
        }
        console.log(result)

        getPlantData(result)
       
        // for (var i = 0; i < result.length; i++) {


          
        // }
   
    })
}

function getPlantData(result){

    

    const queryUrl = "http://harvesthelper.herokuapp.com/api/v1/plants?api_key=9bbe0cb9fc09ec115e66e1a2908a4d9e"

    $.ajax({
        url: queryUrl ,
        method: "GET"
    })
    .then((plantData) => {
               
    console.log(plantData, "this is the plant data working")
    console.log(result, "this is also working")
     
    // for (var i = 0; i < result.length; i++) {

        
    //     const userPlant = result[i].plant_id 
    //     console.log(userPlant)

        for (var j = 0; j < plantData.length; j++) {
           
            
            for (var i = 0; i < result.length; i++) {

        
                const userPlant = result[i].plant_id 
                console.log(userPlant)
        
                // console.log(plantData[j].id)
            // console.log(result[i])
        if (plantData[j].id === userPlant){
            console.log("hello")
            // console.log(plantData[j])
            // console.log(userPlant)
            
        //   const gardenCard = $("<div>");

        //     gardenCard.append("<h3>" + plantData[j].name + "</h3>")
        //     gardenCard.append("<p>" + result[i].description + "</p>")
        //     gardenCard.append("<p> Stay away from: " + result[i].pests + "</p>")
        //     gardenCard.append("<span> <button class='add btn btn-success' id='add'> Remove </button>  <button class='swap btn btn-success' id='swap'> Swap </button> </span>")
     
        //     $("#print-garden").append(gardenCard)
        }
        }
    }

    // for (var i = 0; i < plantData.length; i++) {


    //     if (plantData[i].id === result.id){
    //         console.log("this is working")
    //         console.log(result[i].id)
    //         console.log(plantData.id)
    //         // const gardenCard = $("<div>");

    //         // gardenCard.append("<h3>" + plantData.name + "</h3>")
    //         // gardenCard.append("<p>" + result[i].description + "</p>")
    //         // gardenCard.append("<p> Stay away from: " + result[i].pests + "</p>")
    //         // gardenCard.append("<span> <button class='add btn btn-success' id='add'> Remove </button>  <button class='swap btn btn-success' id='swap'> Swap </button> </span>")
     
    //         // $("#print-garden").append(gardenCard)
    //     }
       


    // }

})
}

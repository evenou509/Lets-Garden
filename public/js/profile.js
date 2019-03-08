$(document).ready(function () {

    const email = localStorage.email

    loadUserData(email)


})

function loadUserData(email) {
    $.ajax({
            url: "api/users/" + email,
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

function loadPlants(data) {
    console.log(data.id)

    const userId = data.id

    $.ajax({
        method: 'GET',
        url: '/api/plants',
        where: {
            UserId: userId
        }
    }).then(result => {
        if (result === undefined || result.length == 0) {
            var postNull = $("#null-plant").html("<a role='button' href='/search' id='btn' class='btn btn-success'> Add Some Plants </a>")
        }
        console.log(result)

        printGardenData(result)

        printSwapData(result)

        printRequestData(result)

        removePlant(data)
    })
}

function removePlant(data) {
    $("#remove").on("click", function () {
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

function printGardenData(result){

    for (var i = 0; i < result.length; i++) {

        if (result[i].garden === true) {

            const gardenCard = $("<tr>");

            gardenCard.append("<td>" + result[i].plant_name + "</h3>")
            // gardenCard.append("<p>" + result[i].description + "</p>")
            // gardenCard.append("<p> Stay away from: " + result[i].pests + "</p>")
            // gardenCard.append("<span> <button class='add btn btn-success' id='remove' value=" + result[i].id +"> Remove </button>  <button class='swap btn btn-success' id='swap'> Swap </button> </span>")
            gardenCard.append("<td> <button class='add btn btn-success btn-sm' id='remove' value=" + result[i].id + "> Remove </button> </td>")
            gardenCard.append("<td> <button class='swap btn btn-success btn-sm' id='swap' value=" + result[i].id + "> Swap </button> </td>")

            $("#print-garden").append(gardenCard)
   
        }
    }

}

function printSwapData(result){

    for (var i = 0; i < result.length; i++) {

        if (result[i].garden === true) {

            const gardenCard = $("<tr>");

            gardenCard.append("<td>" + result[i].plant_name + "</h3>")
            // gardenCard.append("<p>" + result[i].description + "</p>")
            // gardenCard.append("<p> Stay away from: " + result[i].pests + "</p>")
            // gardenCard.append("<span> <button class='add btn btn-success' id='remove' value=" + result[i].id +"> Remove </button>  <button class='swap btn btn-success' id='swap'> Swap </button> </span>")
            gardenCard.append("<td> <button class='add btn btn-success btn-sm' id='remove-swap' value=" + result[i].id + "> Remove </button> </td>")
            gardenCard.append("<td> <button class='swap btn btn-success btn-sm' id='swap' value=" + result[i].id + "> Swap </button> </td>")

            $("#print-garden").append(gardenCard)

            $("#print-swap").append(gardenCard)
   
        }
    }

    $("#remove-swap").on("click", function () {
        event.preventDefault();

    //  create update api to change swap in database to false
    // reload the page, this should remove plant from swap table to only be visible in garden table

    })

}

function printRequestData(result){

    // if statement for if result[i].request === true print to the requested section
    // then reload the page to remove from request
    // create option to add to garden, or delete request entirely
}

//add button for module with more data on plant

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
        url: '/api/plants/' + userId ,
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

        swapPlant(data)

        removePlant(data)

        requestButtons(data)
    })
}

function removePlant(data) {
    $(".remove-plant").on("click", function () {
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

function swapPlant(data) {
    $(".swap-plant").on("click", function () {
        event.preventDefault();

        var plantId = $(this).attr('value');

        $.ajax({
            method: 'PUT',
            url: '/api/plants/' + plantId,
            data: {
                swap: true,
            },
            where: {
                id: plantId
            }
        }).then(result => {
            location.reload()

        })

    })
}

function printGardenData(result) {

    for (var i = 0; i < result.length; i++) {

        if (result[i].garden === true) {

            const gardenCard = $("<tr>");

            gardenCard.append("<td>" + result[i].plant_name + "</h3>")
            gardenCard.append("<td> <button class='add remove-plant btn btn-success btn-sm' id='remove' value=" + result[i].id + "> Remove </button> </td>")
            gardenCard.append("<td> <button class='swap swap-plant btn btn-success btn-sm' id='swap' value=" + result[i].id + "> Swap </button> </td>")

            $("#print-garden").append(gardenCard)

        }
    }

}

function printSwapData(result) {

    for (var i = 0; i < result.length; i++) {

        if (result[i].garden === true && result[i].swap === true) {

            const gardenCard = $("<tr>");

            gardenCard.append("<td>" + result[i].plant_name + "</h3>")
            gardenCard.append("<td> <button class=' remove-swap add btn btn-success btn-sm' value=" + result[i].id + "> Remove </button> </td>")

            $("#print-swap").append(gardenCard)

        }
    }

    $(".remove-swap").on("click", function () {
        event.preventDefault();

        var plantId = $(this).attr('value');

        // swap in database to false
        $.ajax({
            method: 'PUT',
            url: '/api/plants/' + plantId,
            data: {
                swap: false,
            },
            where:{
                id: plantId
            }
        }).then(result => {
            location.reload()

        })
    })

}

function printRequestData(result) {

    // if statement for if result[i].request === true print to the requested section
    if (result[i].request === true) {

        const requestCard = $("<tr>")
        requestCard.append("<td>" + result[i].plant_name + "</h3>")

        requestCard.append("<td> <button class='add btn btn-success btn-sm' id='remove' value=" + result[i].id + "> Remove </button> </td>")
        requestCard.append("<span> <button class='add btn btn-outline-dark' id='add'> Add to you Garden </button>  <button class='delete btn btn-outline-dark' id='delete'> Delete Request </button> </span>")


        $("print-garden").append(requestCard)
    }
    // then reload the page to remove from request
    // create option to add to garden, or delete request entirely

    for (var i = 0; i < result.length; i++) {

        if (result[i].request === true) {

            const gardenCard = $("<tr>");

            gardenCard.append("<td>" + result[i].plant_name + "</h3>")
            gardenCard.append("<td> <button class='add remove-request btn btn-success btn-sm' value=" + result[i].id + "> Remove </button> </td>")
            gardenCard.append("<td> <button class='swap add-request btn btn-success btn-sm' value=" + result[i].id + "> Add </button> </td>")

            $("#print-request").append(gardenCard)

        }
    }

    
}


function requestButtons(data){
    $(".remove-request").on("click", function () {
        event.preventDefault();

        
        var id = $(this).attr('value');

        $.ajax({
            method: "DELETE",
            url: "/api/plants/" + id
        }).then(
            location.reload()

        );
    })


    $(".add-request").on("click", function () {
        event.preventDefault();

        const plantId = $(this).attr('value');

        console.log(plantId)

        const updateData= {
            request: false,
            garden: true

        }
        // add to garden

        

        $.ajax({
            method: 'PUT',
            url: '/api/plants/' + plantId,
            data: updateData,
            where:{
                id: plantId
            }
        }).then(result => {
            console.log(result)
            
        })
    })
}
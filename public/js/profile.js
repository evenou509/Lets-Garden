$(document).ready(function(){

   console.log(localStorage.email)

   const email = localStorage.email

   console.log(email, "this is the user email")
   console.log(localStorage)

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


  
    })
}

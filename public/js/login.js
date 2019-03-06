$(document).ready(function(){

    logIn()

    
})

function logIn () {
    $("#logIn").on("click", function(){
    event.preventDefault();
    console.log("hello")
    const email = $("#email").val()
    const password = $("#password").val()

    console.log(email)
    console.log(password)

    $.ajax({
        url: "api/users/" + email ,
        method: "GET"
    })
    .then(function (data) {
        console.log(data)

        if (password === data.password){

        
            location.href = "/profile"
            // var postfirst = $("#firstName").html(data.first_name)
        } 
        else {
            alert("The password submitted in incorrect")
        } 
    })
    })
}


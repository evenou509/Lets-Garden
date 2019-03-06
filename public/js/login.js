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
<<<<<<< HEAD

        if (password === data.password){

        
=======
        if (email === data.email && password === data.password){

            localStorage.setItem('email', email);
            // localStorage.email
            console.log(localStorage.email)
>>>>>>> baff775aaf9aabd035ab47c52e27c752ee5eaf58
            location.href = "/profile"
            // var postfirst = $("#firstName").html(data.first_name)
        } 

        else {
            alert("The password submitted in incorrect")
        } 
    })
    })
}

// module.exports = function(email) {

// }


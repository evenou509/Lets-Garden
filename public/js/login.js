$(document).ready(function(){

    logIn()
})

function logIn () {
    $("#logIn").on("click", function(){
    event.preventDefault();
    console.log("hello")
    // const user = $("#email").val()
    // const password = $("#password").val()
    })




    // $.ajax({
    //     url: "api/users/" + user ,
    //     method: "GET"
    // })
    // .then(function (data) {
    //     console.log(data)
    // })
}
$(document).ready(function(){
    $("#signup").on("click", function(){
        event.preventDefault();

        var newUser = {
            first_name: $("#firstName").val().toLowerCase(),
            last_name: $("#lastName").val().toLowerCase(),
            email: $("#email").val(),
            password: $("#password").val(),
            zip: $("#zipCode").val(),
            headline: $("#headline").val().toLowerCase(),
        }

        console.log(newUser)

        var currentURL = window.location.origin;

        $.post(currentURL + "/api/users", newUser, function (data){
            
            console.log(data.first_name)
            location.href = "../profile.html"
        })

    })
})
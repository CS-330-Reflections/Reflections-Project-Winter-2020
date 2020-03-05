$(document).ready(function() {
    const current_user_index = localStorage.getItem("current-user-index");

    const profile = JSON.parse(localStorage.getItem("profile"));

    console.log("Current user is user #");
    console.log(current_user_index);
    console.log(profile);

    $("#name").append(profile["name"]);
    $("#age").append(profile["age"]);
    $("#bio").append(profile["bio"]);
    $("#goals").append(profile["goals"]);

});
$(document).ready(function() {
    const current_user_index = localStorage.getItem("current-user-index");

    const profile = JSON.parse(localStorage.getItem("profile"));

    console.log("Current user is user #");
    console.log(current_user_index);
    console.log(profile);


    $("#pro-photo").attr("src", profile["photo"]);
    $("#name").append(profile["name"]);
    $("#age").append(profile["age"]);
    $("#time").append(getReflectingSinceDate());
    $("#bio").append(profile["bio"]);
    $("#goals").append(profile["goals"]);

    getReflectingSinceDate();

});

function toLogin() {
    window.location.href = "login.html";
}

function getReflectingSinceDate() {
    const entries = JSON.parse(localStorage.getItem("entries"));
    return moment.min(entries.map(entry => moment(entry["date"]))).format("l");
}
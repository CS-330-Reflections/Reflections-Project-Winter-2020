$(document).ready(function() {
    const current_user_index = localStorage.getItem("current-user-index");

    const profile = JSON.parse(localStorage.getItem("profile"));

    console.log("Current user is user #");
    console.log(current_user_index);
    console.log(profile);

    $("#pro-photo").attr("src", profile["photo"]);
    $("#name .content").append(profile["name"]);
    $("#age").append(profile["age"]);
    $("#time").append(getReflectingSinceDate());
    $("#bio .content").append(profile["bio"]);
    $("#goals .content").append(profile["goals"]);

});

function toLogin() {
    window.location.href = "login.html";
}

function getReflectingSinceDate() {
    const entries = JSON.parse(localStorage.getItem("entries"));
    return moment.min(entries.map(entry => moment(entry["date"]))).format("l");
}

var is_editing = false;
const editable_elements = [
    // Array of "input type=text elements"
    ["name"],
    // Array of "textarea" elements
    ["bio", "goals"]
];

function makeEditable(id, type) {
    var element = $(`#${id} .content`);
    const content = element.html();
    element.html(
        type == "text" ?
        `<input id="${id}_input" type="text" name="${id}_input" value="${content}" required>` :
        `<textarea id="${id}_input" rows="${(content.match(/\n/g) || '').length + 1}"
        name="${id}_input" required>${content}</textarea>`
    );
}

function saveEdits(id) {
    var element = $(`#${id} .content`);
    const input = $(`#${id} .content #${id}_input`).val();
    console.log(`The value is ${JSON.stringify(input)}`)
    var profile = getCurrentUserData("profile");
    profile[id] = input;
    persistData("profile", profile);
    element.html(input);
}

function updateProfile() {
    if (is_editing) {
        const all_elements = editable_elements.flat();
        for (element_id of all_elements) {
            saveEdits(element_id);
        }
        is_editing = false;
    } else {
        for (element_id of editable_elements[0]) {
            makeEditable(element_id, "text");
        }
        for (element_id of editable_elements[1]) {
            makeEditable(element_id, "textarea");
        }
        is_editing = true;
    }
}
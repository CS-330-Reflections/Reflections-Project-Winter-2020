$(document).ready(function() {
    var date = Date();
    $("#date-picker").val(moment().format('YYYY-MM-DD'));
    $("#mood-button").click(function() {
        $("#mood-button").hide();
    });
});

function saveForm() {
    var form_object = {
        "date": $("#date-picker").val(),
        "mood": JSON.parse($("#mood").val()).sort(),
        "visual": $("#visual").val(),
        "prompt": $("#prompt").val(),
        "entry": $("#entry").val(),
    };

    var old_entries = JSON.parse(localStorage.getItem("data"));

    if (old_entries) {
        old_entries.push(form_object);
    } else {
        old_entries = [form_object];
    }

    localStorage.setItem("data", JSON.stringify(old_entries));
    window.location.href = "index.html";
}

function moodClick(idc) {
    var mood_icon = document.getElementById(idc);
    var mood_input = $("#mood");
    mood_JSON = mood_input.val();
    mood_val = JSON.parse(mood_JSON);

    if (mood_icon.style.color == "black") {
        mood_icon.style.color = "#BFD7EA";
        mood_val = mood_val.filter(el => (el != idc));
    } else {
        mood_icon.style.color = "black";
        mood_val.push(idc);
    }

    new_mood_JSON = JSON.stringify(mood_val);
    mood_input.val(new_mood_JSON);
}
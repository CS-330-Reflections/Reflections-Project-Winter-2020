var promptPicked = "null";
var moodPicked = "null";
var promptPickedInnerHTML = "null";

function promptSelector() {
    console.log(document.getElementById('prompt-filter').value);
    promptPicked = document.getElementById('prompt-filter').value;
    promptPickedInnerHTML = document.getElementById(promptPicked).innerHTML;
    console.log(promptPickedInnerHTML);
}

function moodSelector() {
    console.log(document.getElementById('mood-filter').value);
    moodPicked = document.getElementById('mood-filter').value;
}

var entryStorage = (JSON.parse(window.localStorage.getItem('data')));

function returnVals() {

    if (promptPicked == "null" && moodPicked == "null") {
        var filtered = entryStorage;
        var i;
        for (i = 0; i < filtered.length; i++) {
            if (filtered[i].prompt == "free_entry") {
                filtered[i].prompt = "Free Entry";
            } else if (filtered[i].prompt == "prompt1") {
                filtered[i].prompt = "What was the best thing about your day?";
            } else if (filtered[i].prompt == "prompt2") {
                filtered[i].prompt = "What was something that inspired you today?";
            } else if (filtered[i].prompt == "prompt3") {
                filtered[i].prompt = "What happened today that was out of the ordinary?";
            } else if (filtered[i].prompt == "prompt4") {
                filtered[i].prompt = "Walk through your whole day.";
            } else if (filtered[i].prompt == "prompt5") {
                filtered[i].prompt = "What did you want to be when you were a child?";
            } else if (filtered[i].prompt == "prompt6") {
                filtered[i].prompt = "hat were the major decisions that led you to this point in life?";
            }
        }
    } else if (promptPicked != "null" && moodPicked == "null") {
        var filtered = entryStorage.filter(a => a.prompt == promptPicked);
        var i;
        for (i = 0; i < filtered.length; i++) {
            if (filtered[i].prompt == "free_entry") {
                filtered[i].prompt = "Free Entry";
            } else if (filtered[i].prompt == "prompt1") {
                filtered[i].prompt = "What was the best thing about your day?";
            } else if (filtered[i].prompt == "prompt2") {
                filtered[i].prompt = "What was something that inspired you today?";
            } else if (filtered[i].prompt == "prompt3") {
                filtered[i].prompt = "What happened today that was out of the ordinary?";
            } else if (filtered[i].prompt == "prompt4") {
                filtered[i].prompt = "Walk through your whole day.";
            } else if (filtered[i].prompt == "prompt5") {
                filtered[i].prompt = "What did you want to be when you were a child?";
            } else if (filtered[i].prompt == "prompt6") {
                filtered[i].prompt = "What were the major decisions that led you to this point in life?";
            }
        }
    } else if (promptPicked == "null" && moodPicked != "null") {
        var filtered = entryStorage.filter(a => a.mood == moodPicked);
        var i;
        for (i = 0; i < filtered.length; i++) {
            if (filtered[i].prompt == "free_entry") {
                filtered[i].prompt = "Free Entry";
            } else if (filtered[i].prompt == "prompt1") {
                filtered[i].prompt = "What was the best thing about your day?";
            } else if (filtered[i].prompt == "prompt2") {
                filtered[i].prompt = "What was something that inspired you today?";
            } else if (filtered[i].prompt == "prompt3") {
                filtered[i].prompt = "What happened today that was out of the ordinary?";
            } else if (filtered[i].prompt == "prompt4") {
                filtered[i].prompt = "Walk through your whole day.";
            } else if (filtered[i].prompt == "prompt5") {
                filtered[i].prompt = "What did you want to be when you were a child?";
            } else if (filtered[i].prompt == "prompt6") {
                filtered[i].prompt = "hat were the major decisions that led you to this point in life?";
            }
        }
    } else {
        console.log("nothing picked");
    }

    document.getElementById('prev-entries').innerHTML = "Past entries:";
    for (elem in filtered) {
        console.log(filtered[elem].prompt);
        document.getElementById('prev-entries').innerHTML += `
                <div class="past-entries">
                  <p id="prev-entries">

                  Date: ${filtered[elem].date} <br>
                  Mood: ${filtered[elem].mood} <br>
                  Visual: ${filtered[elem].visual} <br>
                  Prompt: ${filtered[elem].prompt} <br>
                  Entry: ${filtered[elem].entry} <br>

                  </p> <br> <br>
                </div>
            `;
    }

    JSON.stringify(filtered);

    return filtered;
}

function toMain() {
    window.location.href = "index.html";
}
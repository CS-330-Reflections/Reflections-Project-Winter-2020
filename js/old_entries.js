const prompt_map = {
    "free_entry": "Free Entry",
    "prompt1": "What was the best thing about your day?",
    "prompt2": "What was something that inspired you today?",
    "prompt3": "What happened today that was out of the ordinary?",
    "prompt4": "Walk through your whole day.",
    "prompt5": "What did you want to be when you were a child?",
    "prompt6": "What were the major decisions that led you to this point in life?",
};

function deleteEntry(index) {
    var entries = getStoreItemDe("entries")
    entries.splice(index, 1);
    persistData("entries", entries);
    filter();
}

function filter() {
    const prompt_picked = $("#prompt-filter").val();
    const mood_picked = $("#mood-filter").val();
    var entries_html = $("#prev-entries");

    $("#prev-entries").html("Past entries:");

    const filtered = Array.from(getStoreItemDe("entries").entries())
        .filter(([index, entry]) => prompt_picked == "null" || entry.prompt == prompt_picked)
        .filter(([index, entry]) => mood_picked == "null" || entry.mood.includes(mood_picked));

    if (filtered.length > 0) {
        filtered.map(([index, entry]) => {
                entry.prompt = prompt_map[entry.prompt];
                return [index, entry];
            })
            .forEach(([index, entry]) => {
                $("#prev-entries").append(`
                        <div class="past-entry">
                          <p id="prev-entries">

                          <span class="title">Date:</span> ${moment(entry.date).format("l")}
                          <span class="delete" onClick="deleteEntry(${index});"><i class="fas fa-trash-alt"></i></span>
                          <br>
                          ${
                              entry.mood.toString() == "" ?
                              "" :
                              `<span class="title">Mood:</span> ${entry.mood.toString()} <br>`
                          }
                          <br>
                          ${
                              entry.visual == "" ?
                              "" :
                              `<span class="title">Visual:</span>
                                  <img style="display:block;max-width:100%;height:auto;"
                                        id="base64image"
                                        src="${entry.visual}"/> <br>`
                          }
                          <span class="title">Prompt:</span> ${entry.prompt} <br>
                          <span class="title">Entry:</span> ${entry.entry} <br>

                          </p>
                        </div>
                    `);
            });
    } else {
        $("#prev-entries").html("No past entries match the filters!");
    }
}

function toMain() {
    window.location.href = "index.html";
}
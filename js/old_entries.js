const prompt_map = {
    "free_entry": "Free Entry",
    "prompt1": "What was the best thing about your day?",
    "prompt2": "What was something that inspired you today?",
    "prompt3": "What happened today that was out of the ordinary?",
    "prompt4": "Walk through your whole day.",
    "prompt5": "What did you want to be when you were a child?",
    "prompt6": "What were the major decisions that led you to this point in life?",
};

function filter() {
    const prompt_picked = $("#prompt-filter").val();
    const mood_picked = $("#mood-filter").val();
    var entries_html = $("#prev-entries");

    $("#prev-entries").html("Past entries:");

    const filtered =
        JSON.parse(window.localStorage.getItem('entries'))
        .filter(entry => prompt_picked == "null" || entry.prompt == prompt_picked)
        .filter(entry => mood_picked == "null" || entry.mood.includes(mood_picked));

    if (filtered.length > 0) {
        filtered.map(entry => {
                entry.prompt = prompt_map[entry.prompt];
                return entry;
            })
            .forEach(entry => {
                $("#prev-entries").append(`
                        <div class="past-entries">
                          <p id="prev-entries">

                          Date: ${moment(entry.date).format("l")} <br>
                          Mood: ${entry.mood.toString()} <br>
                          ${
                              entry.visual == "" ?
                              "" :
                              `Visual:
                                  <img style="display:block;max-width:100%;height:auto;"
                                        id="base64image"
                                        src="${entry.visual}"/>
                              <br>`
                          }
                          Prompt: ${entry.prompt} <br>
                          Entry: ${entry.entry} <br>

                          </p> <br> <br>
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
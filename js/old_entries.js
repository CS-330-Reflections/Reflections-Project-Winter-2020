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

    JSON.parse(window.localStorage.getItem('data'))
        .filter(entry => prompt_picked == "null" || entry.prompt == prompt_picked)
        .filter(entry => mood_picked == "null" || entry.mood.includes(mood_picked))
        .map(entry => {
            entry.prompt = prompt_map[entry.prompt];
            return entry;
        })
        .forEach(entry => {
            $("#prev-entries").append(`
                    <div class="past-entries">
                      <p id="prev-entries">

                      Date: ${entry.date} <br>
                      Mood: ${entry.mood.toString()} <br>
                      Visual: ${entry.visual} <br>
                      Prompt: ${entry.prompt} <br>
                      Entry: ${entry.entry} <br>

                      </p> <br> <br>
                    </div>
                `);
        });
}

function toMain() {
    window.location.href = "index.html";
}
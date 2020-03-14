$(document).ready(function() {
    const remember_me = getStoreItemDe("remember-me");
    if (remember_me) {
        console.log("Found remember me!");
        $("#uname").val(remember_me["uname"])
        $("#pwd").val(remember_me["pwd"])
    }
});

function login() {
    startUserCount();
    configure();

    const uname = $("#uname").val();
    const pwd = $("#pwd").val();

    rememberMe(uname, pwd);

    const user_count = userCount();

    for (i = 0; i < user_count; i++) {
        if (uname == users[i]["uname"] && pwd == users[i]["pwd"]) {
            console.log(`Credentials matched user #${i}`);
            populateProfileAndEntries(i);
            window.location.href = "index.html";
            return;
        }
    }
    console.log("Credentials didn't match any user");
    alert("Error: Credentials didn't match any user!");
}

function startUserCount() {
    console.log("Starting user count");
    const user_count = userCount();
    console.log(`User count is ${user_count}`);
    if (!user_count) {
        console.log("Setting user count to 2");
        setStoreItem("current-user-count", 2);
    }
}

function configure() {
    if (!isConfig()) {
        console.log("Configuring");
        for (i = 0; i < 2; i++) {
            writeUserData(i, "profile", profiles[i]["profile"]);
            writeUserData(i, "entries", profiles[i]["entries"]);
        }
        setConfig();
    }
}

function rememberMe(uname, pwd) {
    if ($("#remember").prop("checked")) {
        const remember_me = {
            "uname": uname,
            "pwd": pwd
        }
        setStoreItemSer("remember-me", remember_me);
    } else {
        removeStoreItem("remember-me");
    }
}

function populateProfileAndEntries(index) {
    setStoreItem("current-user-index", index);
    console.log(`Current user index is ${index}`);

    const current_user_profile = getUserData(i, "profile");
    const current_user_entries = getUserData(i, "entries");
    console.log(`Current user profile is ${current_user_profile}`);

    if (current_user_profile) {
        console.log("Setting \"data\" to current user data");
        setStoreItemSer("profile", current_user_profile);
        setStoreItemSer("entries", current_user_entries);
    } else if (index < 2) {
        console.log(`Populating prefilled user data for user #${index}`);
        setStoreItemSer("profile", profiles[index]["profile"]);
        setStoreItemSer("entries", profiles[index]["entries"]);
    } else {
        // Error: This is a new user with no data!
        console.log("Error: This is a new user with no data!");
    }
}

function restore() {
    localStorage.clear();
}
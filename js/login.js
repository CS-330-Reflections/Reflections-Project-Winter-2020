function login() {
    const uname = $("#uname").val();
    const pwd = $("#pwd").val();
    if (uname == users[0]["uname"] && pwd == users[0]["pwd"]) {
        localStorage.setItem("profile", profiles[0]["profile"]);
        localStorage.setItem("entries", profiles[0]["entries"]);
        window.location.href = "/index.html";
    } else if (uname == users[1]["uname"] && pwd == users[1]["pwd"]) {
        localStorage.setItem("profile", profiles[1]["profile"]);
        localStorage.setItem("entries", profiles[1]["entries"]);
        window.location.href = "/index.html";
    } else {
        // Need to error
    }
}
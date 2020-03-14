function getStoreItem(key) {
    return localStorage.getItem(key);
}

function getStoreItemDe(key) {
    return JSON.parse(getStoreItem(key));
}

function setStoreItem(key, data) {
    return localStorage.setItem(key, data);
}

function setStoreItemSer(key, data) {
    return setStoreItem(key, JSON.stringify(data));
}

function removeStoreItem(key) {
    return localStorage.removeItem(key);
}

function userCount() {
    return getStoreItem("current-user-count");
}

function currentUser() {
    return getStoreItem("current-user-index");
}

function getUserData(user_count, datatype) {
    return getStoreItemDe(`user-${user_count}-${datatype}`);
}

function getCurrentUserData(datatype) {
    return getStoreItemDe(`user-${currentUser()}-${datatype}`);
}

function writeUserData(user_count, datatype, data) {
    return setStoreItemSer(`user-${user_count}-${datatype}`, data);
}

function writeCurrentUserData(datatype, data) {
    return setStoreItemSer(`user-${currentUser()}-${datatype}`, data);
}

function persistData(datatype, data) {
    setStoreItemSer(datatype, data);
    writeCurrentUserData(datatype, data);
}

function isConfig() {
    return getStoreItem("configured?");
}

function setConfig() {
    return setStoreItem("configured?", true);
}
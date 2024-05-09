function populateCurrentYear() {
    var currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;
}

function populateLastModified() {
    var lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = `Last modified: ${lastModified}`;
}

populateCurrentYear();
populateLastModified();
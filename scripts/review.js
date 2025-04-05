document.getElementById('lastModified').innerText = new Date(document.lastModified);
document.getElementById('currentyear').innerText = new Date().getFullYear();

// ----------------------------------------------------------
// Local Storage for Form Data
// ----------------------------------------------------------

function getSubmissionCount() {
    return parseInt(localStorage.getItem('submissionCount')) || 0;
}

function incrementSubmissionCount() {
    let count = getSubmissionCount();
    count += 1;
    localStorage.setItem('submissionCount', count);
    console.log("Current submission count: " + count);
}

document.addEventListener('DOMContentLoaded', function (e) {
   incrementSubmissionCount();   
});
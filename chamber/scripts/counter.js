// Page Visit Counter Script

// Days since last visit JavaScript
const millisecs2Days = 86400000;
const todaysDate = Date.now();

const visitFeedback = document.querySelector('#timeBetween');
let visitTime = localStorage.getItem("firstvisit")

if (visitTime == null) {
    visitFeedback.textContent = "Welcome! Let us know if you have any questions."
    localStorage.setItem("firstvisit", todaysDate);
} else {
    let daysBetweenVisits = (todaysDate-visitTime)/millisecs2Days
    if (daysBetweenVisits < 1) {
        visitFeedback.innerHTML = `Back so soon! Awesome!`
    } else {
        visitFeedback.innerHTML = `You last visited ${Math.floor(daysBetweenVisits)} days ago`
    }
}
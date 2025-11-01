// This file contains common utility functions used across presentations.

function getCurrentDate() {
    return new Date().toLocaleDateString();
}

function formatSlideTitle(title) {
    return title.toUpperCase();
}

function logEvent(event) {
    console.log(`Event logged: ${event}`);
}

function showAlert(message) {
    alert(message);
}

function toggleVisibility(element) {
    element.style.display = (element.style.display === 'none') ? 'block' : 'none';
}
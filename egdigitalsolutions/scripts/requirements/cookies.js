"use strict";

const cookieContainer = document.querySelector(".cookiesContainer");
const acceptButton = document.querySelector(".accept");
const declineButton = document.querySelector(".reject");

acceptButton.addEventListener("click", () => {
    cookieContainer.style.display = "none";
});

declineButton.addEventListener("click", () => {
    location.reload(true);
});
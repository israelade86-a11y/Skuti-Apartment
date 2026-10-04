// Mobile menu

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", function () {
    nav.classList.toggle("show");
});


// Property search

const searchForm = document.getElementById("searchForm");
const searchMessage = document.getElementById("searchMessage");

const properties = document.querySelectorAll(".property");


searchForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const location = document.getElementById("location").value;
    const type = document.getElementById("type").value;
    const purpose = document.getElementById("purpose").value;

    let found = 0;


    properties.forEach(function (property) {

        const propertyLocation =
            property.dataset.location;

        const propertyType =
            property.dataset.type;

        const propertyPurpose =
            property.dataset.purpose;


        const locationMatch =
            location === "" ||
            location === propertyLocation;

        const typeMatch =
            type === "" ||
            type === propertyType;

        const purposeMatch =
            purpose === "" ||
            purpose === propertyPurpose;


        if (
            locationMatch &&
            typeMatch &&
            purposeMatch
        ) {

            property.style.display = "block";

            found++;

        } else {

            property.style.display = "none";

        }

    });


  if (found === 0) {

    searchMessage.textContent =
        "No properties match your search.";

} else {

    searchMessage.textContent =
        found +
        (found === 1
            ? " property found."
            : " properties found.");
}

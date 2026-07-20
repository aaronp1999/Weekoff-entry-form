const halfDayCheckbox = document.getElementById("halfDayCheckbox");
const halfDayDropdown = document.getElementById("halfDayDropdown");

halfDayCheckbox.addEventListener("change", function () {
    if (this.checked) {
        halfDayDropdown.classList.remove("hidden");
    } else {
        halfDayDropdown.classList.add("hidden");
    }
});

const allCheckboxes = document.querySelectorAll(".all-checkbox");

allCheckboxes.forEach(function (allCheckbox) {

    allCheckbox.addEventListener("change", function () {

        const currentRow = this.closest("tr");

        const weekCheckboxes =
            currentRow.querySelectorAll(".week-checkbox");

        weekCheckboxes.forEach(function (checkbox) {

            checkbox.checked = allCheckbox.checked;

        });

    });

});

const saveButton = document.getElementById("saveButton");

saveButton.addEventListener("click", function () {

    alert("Work Calendar Saved Successfully");

});

const cancelButton = document.getElementById("cancelButton");

cancelButton.addEventListener("click", function () {

    location.reload();

});
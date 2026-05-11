function toggleQuestion() {
    var box = document.getElementById("questionBox");

    if (box.style.display === "none") {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
}
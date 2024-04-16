// when project button is clicked
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("project-button")) {
        // get the url in data-url
        const projectUrl = event.target.getAttribute("data-url");
        window.location.href = projectUrl;
    }
});

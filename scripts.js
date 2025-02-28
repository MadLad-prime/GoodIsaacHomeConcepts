document.addEventListener("DOMContentLoaded", function () {
    fetch("images.json")
        .then(response => response.json())
        .then(data => {
            // Load Services
            let servicesList = document.getElementById("services-list");
            servicesList.innerHTML = data.services.map(img => `
                <li><img src="${img}" alt="Service Image"></li>
            `).join("");

            // Load Projects
            let projectsList = document.getElementById("projects-list");
            projectsList.innerHTML = data.projects.map(img => `
                <div><img src="${img}" alt="Project Image"></div>
            `).join("");
        });
});

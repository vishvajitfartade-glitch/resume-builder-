/* =========================================
   INTERACTIVE RESUME BUILDER
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    setupInputListeners();

    addEducation();
    addExperience();
    addProject();

    updatePreview();

});


/* =========================================
   INPUT LISTENERS
========================================= */

function setupInputListeners() {

    const inputs = document.querySelectorAll(
        "#fullName, #jobTitle, #email, #phone, #location, #linkedin, #github, #summary, #skills"
    );

    inputs.forEach(function (input) {

        input.addEventListener("input", updatePreview);

    });

}


/* =========================================
   ADD EDUCATION
========================================= */

function addEducation() {

    const container = document.getElementById("educationContainer");

    const item = document.createElement("div");

    item.className = "dynamic-item education-item";

    item.innerHTML = `

        <div class="dynamic-item-header">

            <strong>Education Entry</strong>

            <button
                type="button"
                class="remove-btn"
                onclick="removeItem(this)"
            >
                Remove
            </button>

        </div>

        <div class="dynamic-grid">

            <div class="input-group">

                <label>Degree / Course</label>

                <input
                    type="text"
                    class="education-degree"
                    placeholder="B.Tech Computer Science"
                >

            </div>


            <div class="input-group">

                <label>Institution</label>

                <input
                    type="text"
                    class="education-school"
                    placeholder="ABC College of Engineering"
                >

            </div>


            <div class="input-group">

                <label>Year</label>

                <input
                    type="text"
                    class="education-year"
                    placeholder="2024 - 2028"
                >

            </div>


            <div class="input-group">

                <label>Grade / Percentage</label>

                <input
                    type="text"
                    class="education-grade"
                    placeholder="8.5 CGPA"
                >

            </div>

        </div>
    `;

    container.appendChild(item);

    addDynamicListeners();

    updatePreview();
}


/* =========================================
   ADD EXPERIENCE
========================================= */

function addExperience() {

    const container = document.getElementById("experienceContainer");

    const item = document.createElement("div");

    item.className = "dynamic-item experience-item";

    item.innerHTML = `

        <div class="dynamic-item-header">

            <strong>Experience Entry</strong>

            <button
                type="button"
                class="remove-btn"
                onclick="removeItem(this)"
            >
                Remove
            </button>

        </div>

        <div class="dynamic-grid">

            <div class="input-group">

                <label>Job Title</label>

                <input
                    type="text"
                    class="experience-title"
                    placeholder="Web Developer Intern"
                >

            </div>


            <div class="input-group">

                <label>Company</label>

                <input
                    type="text"
                    class="experience-company"
                    placeholder="ABC Technologies"
                >

            </div>


            <div class="input-group">

                <label>Duration</label>

                <input
                    type="text"
                    class="experience-date"
                    placeholder="June 2026 - August 2026"
                >

            </div>


            <div class="input-group full-width">

                <label>Description</label>

                <textarea
                    class="experience-description"
                    rows="3"
                    placeholder="Describe your responsibilities and achievements..."
                ></textarea>

            </div>

        </div>
    `;

    container.appendChild(item);

    addDynamicListeners();

    updatePreview();
}


/* =========================================
   ADD PROJECT
========================================= */

function addProject() {

    const container = document.getElementById("projectContainer");

    const item = document.createElement("div");

    item.className = "dynamic-item project-item";

    item.innerHTML = `

        <div class="dynamic-item-header">

            <strong>Project Entry</strong>

            <button
                type="button"
                class="remove-btn"
                onclick="removeItem(this)"
            >
                Remove
            </button>

        </div>

        <div class="dynamic-grid">

            <div class="input-group">

                <label>Project Name</label>

                <input
                    type="text"
                    class="project-name"
                    placeholder="Interactive Resume Builder"
                >

            </div>


            <div class="input-group">

                <label>Technologies</label>

                <input
                    type="text"
                    class="project-tech"
                    placeholder="HTML, CSS, JavaScript"
                >

            </div>


            <div class="input-group full-width">

                <label>Project Description</label>

                <textarea
                    class="project-description"
                    rows="3"
                    placeholder="Describe your project..."
                ></textarea>

            </div>

        </div>
    `;

    container.appendChild(item);

    addDynamicListeners();

    updatePreview();
}


/* =========================================
   REMOVE DYNAMIC ITEM
========================================= */

function removeItem(button) {

    const item = button.closest(".dynamic-item");

    if (item) {

        item.remove();

        updatePreview();

    }

}


/* =========================================
   DYNAMIC INPUT LISTENERS
========================================= */

function addDynamicListeners() {

    const dynamicInputs = document.querySelectorAll(
        ".dynamic-item input, .dynamic-item textarea"
    );

    dynamicInputs.forEach(function (input) {

        input.removeEventListener("input", updatePreview);

        input.addEventListener("input", updatePreview);

    });

}


/* =========================================
   UPDATE COMPLETE PREVIEW
========================================= */

function updatePreview() {

    updatePersonalInformation();

    updateSkills();

    updateEducation();

    updateExperience();

    updateProjects();

}


/* =========================================
   PERSONAL INFORMATION
========================================= */

function updatePersonalInformation() {

    const fullName =
        document.getElementById("fullName").value.trim();

    const jobTitle =
        document.getElementById("jobTitle").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const location =
        document.getElementById("location").value.trim();

    const linkedin =
        document.getElementById("linkedin").value.trim();

    const github =
        document.getElementById("github").value.trim();

    const summary =
        document.getElementById("summary").value.trim();


    document.getElementById("previewName").textContent =
        fullName || "Your Name";

    document.getElementById("previewJob").textContent =
        jobTitle || "Your Job Title";

    document.getElementById("previewEmail").textContent =
        email ? "📧 " + email : "📧 email@example.com";

    document.getElementById("previewPhone").textContent =
        phone ? "📱 " + phone : "📱 +91 0000000000";

    document.getElementById("previewLocation").textContent =
        location ? "📍 " + location : "📍 Your Location";

    document.getElementById("previewLinkedin").textContent =
        linkedin || "LinkedIn";

    document.getElementById("previewGithub").textContent =
        github || "GitHub";


    const summarySection =
        document.getElementById("summarySection");

    if (summary) {

        summarySection.style.display = "block";

        document.getElementById("previewSummary").textContent =
            summary;

    } else {

        summarySection.style.display = "none";

    }

}


/* =========================================
   SKILLS
========================================= */

function updateSkills() {

    const skillsInput =
        document.getElementById("skills").value.trim();

    const skillsContainer =
        document.getElementById("previewSkills");

    const skillsSection =
        document.getElementById("skillsSection");


    skillsContainer.innerHTML = "";


    if (!skillsInput) {

        skillsSection.style.display = "none";

        return;

    }


    skillsSection.style.display = "block";


    const skills = skillsInput
        .split(",")
        .map(skill => skill.trim())
        .filter(skill => skill !== "");


    skills.forEach(function (skill) {

        const tag = document.createElement("span");

        tag.className = "skill-tag";

        tag.textContent = skill;

        skillsContainer.appendChild(tag);

    });

}


/* =========================================
   EDUCATION PREVIEW
========================================= */

function updateEducation() {

    const preview =
        document.getElementById("previewEducation");

    const section =
        document.getElementById("previewEducationSection");

    const items =
        document.querySelectorAll(".education-item");


    preview.innerHTML = "";

    let hasData = false;


    items.forEach(function (item) {

        const degree =
            item.querySelector(".education-degree").value.trim();

        const school =
            item.querySelector(".education-school").value.trim();

        const year =
            item.querySelector(".education-year").value.trim();

        const grade =
            item.querySelector(".education-grade").value.trim();


        if (degree || school || year || grade) {

            hasData = true;

            const div =
                document.createElement("div");

            div.className = "preview-item";


            div.innerHTML = `

                <div class="preview-item-title">
                    ${escapeHTML(degree || "Degree / Course")}
                </div>

                <div class="preview-item-subtitle">
                    ${escapeHTML(school || "Institution")}
                </div>

                <div class="preview-date">
                    ${escapeHTML(year)}
                    ${year && grade ? " • " : ""}
                    ${escapeHTML(grade)}
                </div>

            `;

            preview.appendChild(div);

        }

    });


    section.style.display =
        hasData ? "block" : "none";

}


/* =========================================
   EXPERIENCE PREVIEW
========================================= */

function updateExperience() {

    const preview =
        document.getElementById("previewExperience");

    const section =
        document.getElementById("previewExperienceSection");

    const items =
        document.querySelectorAll(".experience-item");


    preview.innerHTML = "";

    let hasData = false;


    items.forEach(function (item) {

        const title =
            item.querySelector(".experience-title").value.trim();

        const company =
            item.querySelector(".experience-company").value.trim();

        const date =
            item.querySelector(".experience-date").value.trim();

        const description =
            item.querySelector(".experience-description").value.trim();


        if (title || company || date || description) {

            hasData = true;

            const div =
                document.createElement("div");

            div.className = "preview-item";


            div.innerHTML = `

                <div class="preview-item-title">
                    ${escapeHTML(title || "Job Title")}
                </div>

                <div class="preview-item-subtitle">
                    ${escapeHTML(company || "Company")}
                </div>

                <div class="preview-date">
                    ${escapeHTML(date)}
                </div>

                <div class="preview-description">
                    ${formatText(description)}
                </div>

            `;

            preview.appendChild(div);

        }

    });


    section.style.display =
        hasData ? "block" : "none";

}


/* =========================================
   PROJECTS PREVIEW
========================================= */

function updateProjects() {

    const preview =
        document.getElementById("previewProjects");

    const section =
        document.getElementById("previewProjectSection");

    const items =
        document.querySelectorAll(".project-item");


    preview.innerHTML = "";

    let hasData = false;


    items.forEach(function (item) {

        const name =
            item.querySelector(".project-name").value.trim();

        const tech =
            item.querySelector(".project-tech").value.trim();

        const description =
            item.querySelector(".project-description").value.trim();


        if (name || tech || description) {

            hasData = true;

            const div =
                document.createElement("div");

            div.className = "preview-item";


            div.innerHTML = `

                <div class="preview-item-title">
                    ${escapeHTML(name || "Project Name")}
                </div>

                <div class="preview-item-subtitle">
                    ${escapeHTML(tech)}
                </div>

                <div class="preview-description">
                    ${formatText(description)}
                </div>

            `;

            preview.appendChild(div);

        }

    });


    section.style.display =
        hasData ? "block" : "none";

}


/* =========================================
   TEXT FORMATTING
========================================= */

function formatText(text) {

    if (!text) {
        return "";
    }

    return escapeHTML(text)
        .replace(/\n/g, "<br>");

}


/* =========================================
   SECURITY
========================================= */

function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}


/* =========================================
   PRINT / PDF
========================================= */

function printResume() {

    window.print();

}


/* =========================================
   CLEAR ALL
========================================= */

function clearResume() {

    const confirmed =
        confirm(
            "Are you sure you want to clear the entire resume?"
        );


    if (!confirmed) {
        return;
    }


    document.getElementById("fullName").value = "";

    document.getElementById("jobTitle").value = "";

    document.getElementById("email").value = "";

    document.getElementById("phone").value = "";

    document.getElementById("location").value = "";

    document.getElementById("linkedin").value = "";

    document.getElementById("github").value = "";

    document.getElementById("summary").value = "";

    document.getElementById("skills").value = "";


    document.getElementById("educationContainer").innerHTML = "";

    document.getElementById("experienceContainer").innerHTML = "";

    document.getElementById("projectContainer").innerHTML = "";


    addEducation();

    addExperience();

    addProject();

    updatePreview();

}
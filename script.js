document.addEventListener('DOMContentLoaded', function () {
    fetch('https://webserver-1-g5ti.onrender.com/')
        .then(response => response.json())
        .then(data => {
            displayPersonalInfo(data.Personal_Information[0]);
            displayAboutMe(data.About_Me[0]);
            displaySkills(data.Skills[0]);
            displayEducation(data.Education[0]);
            displayWorkExperience(data.Work_Experience[0]);
            displayPersonalReferences(data.Personal_References[0]);
        })
        .catch(error => console.error('Error fetching data:', error));

    function displayPersonalInfo(personalInfo) {
        const personalInfoDiv = document.getElementById('personal-info');
        personalInfoDiv.innerHTML = `
            <h2>Personal Information</h2>
            <p>Name: ${personalInfo.Name}</p>
            <p>Birthdate: ${personalInfo.Birthdate}</p>
            <p>Gender: ${personalInfo.Gender}</p>
            <p>Contact No: ${personalInfo.Contact_No}</p>
            <p>Address: ${personalInfo.Address}</p>
        `;
    }

    function displayAboutMe(aboutMe) {
        const aboutMeDiv = document.getElementById('about-me');
        aboutMeDiv.innerHTML = `
            <h2>About Me</h2>
            <p>${aboutMe.Description}</p>
        `;
    }

    function displaySkills(skills) {
        const skillsDiv = document.getElementById('skills');
        const languages = skills.Languages.join(', ');
        skillsDiv.innerHTML = `
            <h2>Skills</h2>
            <p>Languages: ${languages}</p>
        `;
    }

    function displayEducation(education) {
        const educationDiv = document.getElementById('education');
        educationDiv.innerHTML = `
            <h2>Education</h2>
            <p>Degree: ${education.Degree}</p>
            <p>Institution: ${education.Institution}</p>
            <p>Year: ${education.Year}</p>
        `;
    }

    function displayWorkExperience(workExperience) {
        const workExperienceDiv = document.getElementById('work-experience');
        workExperienceDiv.innerHTML = `
            <h2>Work Experience</h2>
            <p>Company: ${workExperience.Company}</p>
            <p>Job Title: ${workExperience.Job_Title}</p>
            <p>Start Date: ${workExperience.Start_Date}</p>
            <p>End Date: ${workExperience.End_Date}</p>
        `;
    }

    function displayPersonalReferences(personalReferences) {
        const personalReferencesDiv = document.getElementById('personal-references');
        personalReferencesDiv.innerHTML = `
            <h2>Personal References</h2>
            <p>Name: ${personalReferences.Name}</p>
            <p>Contact No: ${personalReferences.Contact_No}</p>
            <p>Relationship: ${personalReferences.Relationship}</p>
        `;
    }
});

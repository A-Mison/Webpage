document.addEventListener('DOMContentLoaded', function () {
    // Function to fetch data from web service endpoints
    function fetchData(endpoint, callback) {
        fetch(endpoint)
            .then(response => response.json())
            .then(data => callback(data))
            .catch(error => console.error('Error fetching data:', error));
    }

    // Function to display personal information
    function displayPersonalInfo(data) {
        const personalInfoDiv = document.getElementById('personal-info');
        personalInfoDiv.innerHTML = `
            <h2>Personal Information</h2>
            <p>Name: ${data.name}</p>
            <p>Birth Date: ${data.birthdate}</p>
            <p>Gender: ${data.gender}</p>
            <p>Contact No: ${data.contact_no}</p>
            <p>Address: ${data.address}</p>
        `;
    }

    // Function to display skills
    function displaySkills(data) {
        const skillsDiv = document.getElementById('skills');
        let skillsHtml = '<h2>Skills</h2>';
        data.forEach(skill => {
            skillsHtml += `<p>Description: ${skill.description}, Expertise Level: ${skill.expertise_level}</p>`;
        });
        skillsDiv.innerHTML = skillsHtml;
    }

    // Function to display education
    function displayEducation(data) {
        const educationDiv = document.getElementById('education');
        // Similar logic to display skills
    }

    // Function to display work experience
    function displayWorkExperience(data) {
        const workExperienceDiv = document.getElementById('work-experience');
        // Similar logic to display skills
    }

    // Function to display personal references
    function displayPersonalReferences(data) {
        const personalReferencesDiv = document.getElementById('personal-references');
        // Similar logic to display skills
    }

    // Fetch data from web service endpoints and display on the webpage
    fetchData('/personal_info', displayPersonalInfo);
    fetchData('/skills', displaySkills);
    fetchData('/education', displayEducation);
    fetchData('/work_experience', displayWorkExperience);
    fetchData('/personal_references', displayPersonalReferences);
});

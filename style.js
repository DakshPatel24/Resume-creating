 document.getElementById("resumeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from actually submitting

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      address: document.getElementById("address").value,
      institute: document.getElementById("institute").value,
      degree: document.getElementById("degree").value,
      year: document.getElementById("year").value,
      company: document.getElementById("company").value,
      role: document.getElementById("role").value,
      duration: document.getElementById("duration").value,
      skills: document.getElementById("skills").value,
      projectTitle: document.getElementById("projectTitle").value,
      projectDescription: document.getElementById("projectDescription").value
    };

    console.log("Collected Resume Data as JSON:");
    console.log(JSON.stringify(formData, null, 2)); // Pretty print the JSON
  });
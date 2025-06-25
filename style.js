
document.getElementById('resumeForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const resumeData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    address: document.getElementById('address').value,
    education: {
      institute: document.getElementById('institute').value,
      degree: document.getElementById('degree').value,
      year: document.getElementById('year').value,
    },
    experience: {
      company: document.getElementById('company').value,
      role: document.getElementById('role').value,
      duration: document.getElementById('duration').value,
    },
    skills: document.getElementById('skills').value.split(',').map(s => s.trim()),
    project: {
      title: document.getElementById('projectTitle').value,
      description: document.getElementById('projectDescription').value
    }
  };

  localStorage.setItem("resumeData", JSON.stringify(resumeData));
  window.location.href = "preview.html"; // Open resume preview
});

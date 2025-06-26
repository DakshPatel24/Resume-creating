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
function generateResume() {
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
      description: document.getElementById('projectDescription').value,
    }
  };

  // Populate the preview
  document.getElementById('previewName').textContent = resumeData.name;
  document.getElementById('previewContact').textContent = `Email: ${resumeData.email} | Phone: ${resumeData.phone}`;
  document.getElementById('previewAddress').textContent = `Address: ${resumeData.address}`;

  document.getElementById('previewEducation').textContent =
    `${resumeData.education.degree}, ${resumeData.education.institute} (${resumeData.education.year})`;

  document.getElementById('previewExperience').textContent =
    `${resumeData.experience.role} at ${resumeData.experience.company} (${resumeData.experience.duration})`;

  document.getElementById('previewSkills').textContent = resumeData.skills.join(', ');
  document.getElementById('previewProject').textContent =
    `${resumeData.project.title}: ${resumeData.project.description}`;

  // Show resume and hide form
  document.getElementById('resumeForm').style.display = 'none';
  document.getElementById('resumePreview').style.display = 'block';
}

// Back button logic
function goBackToForm() {
  document.getElementById('resumePreview').style.display = 'none';
  document.getElementById('resumeForm').style.display = 'block';
}


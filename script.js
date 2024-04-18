class Applicant {
  constructor(cnic, firstName, lastName) {
    this.cnic = cnic;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const applicantForm = document.getElementById('applicantForm');
const cnicInput = document.getElementById('cnic');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const saveButton = document.getElementById('save');
const printButton = document.getElementById('print');
const applicantDataDiv = document.getElementById('applicantData');

let applicants = [];

saveButton.addEventListener('click', () => {
  const cnic = cnicInput.value;
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;

  if (!cnic || !firstName || !lastName) {
    alert('Please fill in all fields');
    return;
  }

  applicants.push(new Applicant(cnic, firstName, lastName));

  cnicInput.value = '';
  firstNameInput.value = '';
  lastNameInput.value = '';
});

printButton.addEventListener('click', () => {
  applicantDataDiv.innerHTML = '';

  if (applicants.length === 0) {
    applicantDataDiv.textContent = 'No applicants to display';
    return;
  }

  applicants.sort((a, b) => a.lastName.localeCompare(b.lastName));

  const headerRow = document.createElement('div');
  headerRow.innerHTML = '<strong>CNIC    FirstName LastName</strong>';
  applicantDataDiv.appendChild(headerRow);

  applicants.forEach(applicant => {
    const row = document.createElement('div');
    row.textContent = `${applicant.cnic} ${applicant.firstName} ${applicant.lastName}`;
    applicantDataDiv.appendChild(row);
  });
});
// Select the form and the output paragraph
const form = document.getElementById('contact-form');
const outputParagph = document.getElementById('output');

// Function to handle form submission
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get form field values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validate fields are not empty
  if (name === '' || email === '' || message === '') {
    outputParagph.textContent = 'Please fill all fields';
    outputParagph.classList.remove('bg-green-500');
    outputParagph.classList.add('bg-red-500');
    return;
  }

  // Create the output text
  const template = `
<ul>
    <li>Name: ${name}</li>
    <li>Email: ${email}</li>
    <li>Message: ${message}</li>
</ul>
`;

  // Display the data in the paragraph
  outputParagph.innerHTML = template;
  outputParagph.classList.remove('bg-red-500');
  outputParagph.classList.add('bg-green-500');

  // Clear the form fields
  form.reset();
});

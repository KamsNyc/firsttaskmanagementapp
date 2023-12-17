// Account
function logout() {
  // Perform logout functionality
  // Clear user session or token, redirect to login page, etc.
  console.log("Logged out successfully.");
}

// Settings
function openSettings() {
  // Open settings page
  // Redirect to the settings page or display a modal with settings options
  console.log("Opening settings page...");
}

// Notes
function createNewNote() {
  // Display the new note form
  // Show a modal or toggle visibility of the new note form
  console.log("Creating a new note...");
}

function saveNote() {
  // Get note title and content from the form
  const title = document.getElementById('note-title').value;
  const content = document.getElementById('note-content').value;

  // Create a new note object
  const note = {
    title: title,
    content: content,
  };

  // Create a new note element
  const noteElement = document.createElement('div');
  noteElement.classList.add('note');
  noteElement.innerHTML = `
    <h3>${note.title}</h3>
    <p>${note.content}</p>
    <div class="note-options">
      <button class="button delete-note">Delete</button>
      <button class="button export-note">Export as PNG</button>
      <button class="button send-email">Send to Email</button>
    </div>
  `;

  // Append the new note to the middle section
  const middleSection = document.querySelector('.middle-section');
  middleSection.appendChild(noteElement);

  // Clear the form inputs
  document.getElementById('note-title').value = '';
  document.getElementById('note-content').value = '';

  // Add event listeners to the new note
  noteElement.querySelector('.delete-note').addEventListener('click', () => {
    deleteNote.call(noteElement.querySelector('.delete-note'));
  });
  noteElement.querySelector('.export-note').addEventListener('click', exportNoteAsPNG);
  noteElement.querySelector('.send-email').addEventListener('click', sendNoteToEmail);
  noteElement.addEventListener('mouseover', showNotePreview);
  noteElement.addEventListener('mouseout', hideNotePreview);

  console.log("Note saved successfully.");
}

function deleteNote() {
  const note = this.parentNode.parentNode;
  const middleSection = document.querySelector('.middle-section');
  middleSection.removeChild(note);

  console.log("Note deleted successfully.");
}

function exportNoteAsPNG() {
  const note = this.parentNode.parentNode;
  const title = note.querySelector('h3').textContent;
  const content = note.querySelector('p').textContent;

  // Combine title and content into a single text to copy
  const textToCopy = `${title}\n${content}`;

  // Copy the text to the clipboard
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      // Display a message indicating that the note has been copied
      console.log("Note copied to clipboard!");
    })
    .catch((error) => {
      console.error("Failed to copy note to clipboard:", error);
    });
}

function sendNoteToEmail() {
  // Perform send to email functionality
  // Prompt the user to enter an email address and send the note as an attachment
  console.log("Sending note to email...");
}

function inviteFriend() {
  // Perform invite friend functionality
  // Allow the user to invite friends by sending them a referral link or email invitation
  console.log("Inviting a friend...");
}

function showNotePreview() {
  const title = this.querySelector('h3').textContent;
  const content = this.querySelector('p').textContent;

  const notePreview = document.createElement('div');
  notePreview.classList.add('note-preview');
  notePreview.innerHTML = `
    <h3>${title}</h3>
    <p>${content}</p>
    <div class="note-options">
      <button class="button export-button">Export as PNG</button>
      <button class="button send-email">Send to Email</button>
    </div>
  `;

  const middleSection = document.querySelector('.middle-section');
  middleSection.appendChild(notePreview);

  // Hide export and send buttons if needed
  notePreview.querySelector('.export-button').style.display = 'none';

  // Position the note preview
  const rect = this.getBoundingClientRect();
  notePreview.style.top = `${rect.top}px`;
  notePreview.style.left = `${rect.left + rect.width + 20}px`;

  // Hide note preview on mouseout
  this.addEventListener('mouseout', hideNotePreview);
}

function hideNotePreview() {
  const notePreview = document.querySelector('.note-preview');
  notePreview.parentNode.removeChild(notePreview);
}

// Event Listeners
document.querySelector('.left-sidebar li:nth-child(4) a').addEventListener('click', logout);
document.querySelector('.left-sidebar li:nth-child(3) a').addEventListener('click', openSettings);
document.querySelector('.left-sidebar li:nth-child(2) a').addEventListener('click', createNewNote);
document.querySelector('.left-sidebar li:nth-child(1) a').addEventListener('click', inviteFriend);
document.getElementById('note-form').addEventListener('submit', function (e) {
  e.preventDefault();
  saveNote();
});
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete-note')) {
    deleteNote.call(e.target);
  } else if (e.target.classList.contains('send-email')) {
    sendNoteToEmail.call(e.target);
  } else if (e.target.classList.contains('export-note')) {
    exportNoteAsPNG.call(e.target);
  }
});

// Initialize
logout();

// Hide login/signup form initially
const loginForm = document.getElementById('loginForm');
const signupBtn = document.getElementById('signupBtn');

loginForm.style.display = 'none';

// Show login form
function showLoginForm() {
  loginForm.style.display = 'block';
}

// Event listener for opening login form
document.getElementById('profile').addEventListener('click', showLoginForm);

// Event listener for opening signup form
document.getElementById('signupBtn').addEventListener('click', () => {
  // Redirect to signup.html or display a signup modal
});

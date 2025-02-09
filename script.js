// Select elements
const newEntryBtn = document.getElementById('newEntryBtn');
const saveEntryBtn = document.getElementById('saveEntryBtn');
const journalInput = document.getElementById('journalInput');
const entryForm = document.getElementById('entryForm');
const entriesContainer = document.getElementById('entries');

// Event listener for adding a new entry
newEntryBtn.addEventListener('click', function() {
    entryForm.style.display = 'flex'; // Show the journal entry form
});

// Event listener for saving a new entry
saveEntryBtn.addEventListener('click', function() {
    const entryText = journalInput.value.trim();
    
    if (entryText === "") {
        alert("Please write something before saving!");
        return;
    }
    
    // Create the new entry
    const entry = document.createElement('div');
    entry.classList.add('entry');
    
    const entryTextElement = document.createElement('p');
    entryTextElement.textContent = entryText;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        entriesContainer.removeChild(entry); // Remove the entry
    });
    
    // Append the new elements to the entry
    entry.appendChild(entryTextElement);
    entry.appendChild(deleteButton);
    
    // Append the entry to the entries container
    entriesContainer.appendChild(entry);
    
    // Clear the form and hide it again
    journalInput.value = "";
    entryForm.style.display = 'none';
});
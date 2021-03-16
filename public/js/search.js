document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }

const searchButton = document.querySelectorAll('.searchMovie');

      fetch(`/api/cats/${id}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },

        // make sure to serialize the JSON body
        body: JSON.stringify(newSleepState),
      }).then((response) => {
        if (response.ok) {
          console.log(`changed sleep to: ${newSleep}`);
          location.reload('/');
        } else {
          alert('something went wrong!');
        }
      });
    });

// CREATE
const createCatBtn = document.getElementById('create-form');

if (createCatBtn) {
  createCatBtn.addEventListener('submit', (e) => {
    e.preventDefault();

    // Grabs the value of the textarea that goes by the name, "quote"
    const newCat = {
      name: document.getElementById('ca').value.trim(),
      sleepy: document.getElementById('sleepy').checked,
    };

    // Send POST request to create a new quote
    fetch('/api/cats', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      // make sure to serialize the JSON body
      body: JSON.stringify(newCat),
    }).then(() => {
      // Empty the form
      document.getElementById('ca').value = '';

      // Reload the page so the user can see the new quote
      console.log('Created a new cat!');
      location.reload();
    });
  });
}



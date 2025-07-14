document.addEventListener('DOMContentLoaded', function() {
  // Get the tags button and container
  const tagsButton = document.getElementById('tags');
  const tagsContainer = document.querySelector('.tags-container');
  
  // Counter to keep track of added buttons (optional)
  let buttonCount = 1;
  
  // Add click event listener to the tags button
  tagsButton.addEventListener('click', function() {
    // Create a new button element
    const newButton = document.createElement('button');
    
    // Set button text (you can customize this)
    newButton.textContent = `new tag ${buttonCount}`;
    
    // Add a class to the new button (optional)
    newButton.classList.add('tag-button');
    
    // Append the new button to the container
    tagsContainer.appendChild(newButton);
    
    // Increment the counter (optional)
    buttonCount++;
  });
});
// An array of data we want to search through.
// You can replace this with your own data (e.g., product names, article titles, etc.).
const items = [
    "Features",
    "Options",
    "Prices",
  ];
  
  // Grab references to DOM elements
  const searchInput = document.getElementById("searchInput");
  const resultsList = document.getElementById("resultsList");
  
  // At the start, display all items
  displayResults(items);
  
  // Listen for typing in the search box
  searchInput.addEventListener("input", handleSearch);
  
  // Handle the search logic
  function handleSearch() {
    const query = searchInput.value.toLowerCase(); // user-typed text, lowercased
    // Filter the items array for matches
    const filtered = items.filter(item =>
      item.toLowerCase().includes(query)
    );
    // Display the filtered results
    displayResults(filtered);
  }
  
  // Update the list on the page
  function displayResults(results) {
    // Clear any old results
    resultsList.innerHTML = "";
  
    // Create a <li> for each matching item
    results.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      resultsList.appendChild(li);
    });
  }
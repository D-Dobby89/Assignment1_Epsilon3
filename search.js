
const items = [
    "Features",
    "Options",
    "Prices",
  ];
  
  
  const searchInput = document.getElementById("searchInput");
  const resultsList = document.getElementById("resultsList");
  
  
  displayResults(items);
  
  
  searchInput.addEventListener("input", handleSearch);
  
  
  function handleSearch() {
    const query = searchInput.value.toLowerCase(); 
    
    const filtered = items.filter(item =>
      item.toLowerCase().includes(query)
    );
    
    displayResults(filtered);
  }
  
  
  function displayResults(results) {
    
    resultsList.innerHTML = "";
  
    
    results.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      resultsList.appendChild(li);
    });
  }
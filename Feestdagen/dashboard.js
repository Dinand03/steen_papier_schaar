// Feestdagen API
const year = new Date().getFullYear();
const url = `https://date.nager.at/api/v3/PublicHolidays/${year}/NL`;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error("Netwerkfout");
    }
    return response.json();
  })
  .then(data => {
    const today = new Date();

    // Filter: alleen feestdagen die nog moeten komen
    const upcoming = data.filter(day => {
      return new Date(day.date) >= today;
    });

    // HTML lijst vullen
    const list = document.querySelector("#feestdagenLijst");
    list.innerHTML = ""; // leegmaken

    upcoming.forEach(day => {
      const li = document.createElement("li");
      li.textContent = `${day.localName} — ${day.date}`;
      list.appendChild(li);
    });
  })
  .catch(error => {
    console.error("Er ging iets mis:", error);
  });

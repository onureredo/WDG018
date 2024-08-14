document.querySelector('h1').textContent = 'This is bundled by Parcel!';

// Dank Parcel können wir Umgebungsvariablen in JS nutzen.
// ! Vorsicht ! Alle Umgebungsvariablen in Frontend-Code landen letztenendes im Browser
// Später lernt ihr, wie ihr euer eigenes Backend baut, wo ihr sicher Api Keys verwenden könnt.
console.log(process.env.SECRET);
const apiKey = process.env.API_KEY;

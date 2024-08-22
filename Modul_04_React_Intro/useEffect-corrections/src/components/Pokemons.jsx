import { useEffect, useState } from 'react';

const Pokemons = ({ numPokes }) => {
  const [cards, setCards] = useState(null);

  useEffect(() => {
    // Um fetch calls abzubrechen. Nötig bei schneller Veränderung von State.
    const controller = new AbortController();

    // Variante 1 .then()
    // fetch('https://pokeapi.co/api/v2/pokemon?limit=12', {signal: controller.signal})
    //   .then((response) => response.json())
    //   .then((data) => setCards(data.results)).catch((err) => console.err(err));

    // async/await
    const fetchPokes = async () => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${numPokes}`, { signal: controller.signal });
        if (!res.ok) throw Error('Fetching failed');
        const data = await res.json();
        // console.log(data);
        setCards(data.results);
      } catch (error) {
        console.error(error);
        // Etwas mit dem Fehler tun.
      }
    };
    // Die Effektfunktion selbst darf nicht async sein, deshalb haben wir hier eine gesonderte Funktion fetchPokes und rufen sie auf.
    fetchPokes();

    // Wenn die Komponente neu rendert (z.B. numPokes hat sich verändert), brechen wir den alten Fetchaufruf ab. Ansonsten kommt es zu sog. 'race conditions' - ein älterer Fetch Call kann später beantwortet werden als unser letzter. Das würde dann veraltete oder unerwartete Daten anzeigen.
    // Indem wir alte Fetches abbrechen, haben wir eine bessere User Experience. (Alternative oder Ergänzung: Throttling und Debouncing)
    return () => controller.abort();

    // Dieser useEffect hier läuft immer, wenn sich numPokes verändert.
  }, [numPokes]);

  return (
    <div>
      <h2>Fetching Pokemons</h2>
      {/* Bevor wir über Daten mappen, müssen wir überprüfen, ob wir Daten haben. */}
      {/* {cards.length > 0 && */}
      {cards &&
        cards.map((card, index) => (
          <p key={card.name} style={{ textTransform: 'capitalize' }}>
            {index + 1}: {card.name}
          </p>
        ))}
    </div>
  );
};

export default Pokemons;

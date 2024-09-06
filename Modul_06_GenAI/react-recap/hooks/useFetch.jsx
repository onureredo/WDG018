// Für wiederkehrende Aufgaben können wir eigene Hooks bauen.
// Sie müssen den "RReact Rules of Hooks" entsprechen (https://react.dev/warnings/invalid-hook-call-warning)
// siehe auch: https://react.dev/learn/reusing-logic-with-custom-hooks

// typische Anwendungbeispiel sind:
// - Fetching - entweder generalisierte (useFetch) oder auf eine bestimmte API geschneiderte (usePokemons, useMovies...)
// - Interaktion mit localStorage - useLocalStorage
// - Geolocation - Position den Nutzers vom Browser abfragen - useLocation
// - mit der Browser URL interagieren (History API) - useNavigate
// - useDebounce, useThrottle - um z.B 'search on type'-Anfragen zu drosseln

import { useState, useEffect } from 'react';

const useFetch = (url) => {
  // Wir können hier alle eingebauten React Hooks verwenden, typischerweise state und effect
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    let options = { signal: controller.signal };

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, options);
        if (!res.ok) throw new Error('Fetching failed');

        const data = await res.json();

        setData(data);
      } catch (error) {
        if (error.name === 'AbortError') return;
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    return () => controller.abort();
    // Wann immer unser useFetch Hook von irgendwo mit einer anderen URL aufgerufen wird, wollen wir das fetching neu durchlaufen lassen
  }, [url]);

  // Wir geben die states zurück, die wir in der Komponente brauchen
  // URL rein - data, error und loading raus.
  return { data, error, loading };
};

export default useFetch;

import { useEffect, useState } from 'react';
import './candle.css';

const Candle = () => {
  // Ein State, um die Höhe dynamisch zu kontrollieren.
  const [height, setHeight] = useState(80);

  // Im Intervall setzen wir immer wieder den State neu. Um einen Infinite Loop zu vermeinden, müssen wir ihn in useEffekt packen.
  useEffect(() => {
    // Die innere Funktion wird alle 2000ms -> 2s ausgeführt
    const interval = setInterval(() => {
      // Hier brauchen wir die Updatefunktion im Setter. Ansonsten würden wir den Ausgangszustand in dieser Funktion einfrieren (-> closure)
      setHeight((vorherig) => {
        // In der Updatefunktion können wir auch checks durchführen.
        if (vorherig <= 10) return 80;
        return vorherig - 2;
      });
    }, 2000);

    // Intervalle, Timer und EventListener müssen immer aufgeräumt werden, ansonsten kommt es zu Bugs.
    // Im return eines useEffects schreibt ihr eine Funktion, die diese Aufräumarbeiten durchführt.
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='exercise'>
      {/* Der State wird direkt in das inline-styling eingefügt. Hier mit '%' als CSS-Unit */}
      <div className='candleContainer' style={{ height: `${height}%`, transition: 'height 2000ms linear' }}>
        <div className='candle'>
          <div className='flame'>
            <div className='shadows' />
            <div className='top' />
            <div className='middle' />
            <div className='bottom' />
          </div>
          <div className='wick' />
          <div className='wax' />
        </div>
      </div>
    </div>
  );
};

export default Candle;

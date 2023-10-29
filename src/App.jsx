import { useState } from 'react';
import './App.css';

const syllabes = ["ak", "bru", "co", "du", "fi", "at","tu", "mer","kwa", "kou", "beh"];

function generateRandomName() {
  const name = [];

  // Ajoutez une syllabe de consonne au début
  name.push(syllabes.filter(s => /^[^aeiouy]/.test(s))[Math.floor(Math.random() * syllabes.length)]);

  // Ajoutez une ou plusieurs syllabes au milieu
  for (let i = 0; i < 2; i++) {
    name.push(syllabes[Math.floor(Math.random() * syllabes.length)]);
  }

  // Ajoutez une syllabe de voyelle à la fin
  name.push(syllabes.filter(s => /^[aeiouy]/.test(s))[Math.floor(Math.random() * syllabes.length)]);

  return name.join('');
}

function App() {
  const [randomNames, setRandomNames] = useState([]);

  const generateNames = () => {
    const names = Array.from({ length: 5 }, () => generateRandomName());
    setRandomNames(names);
  };

  return (
    <div className="App">
      <h1>Générateur de Noms Aléatoires</h1>
      <button onClick={generateNames}>Générer des Noms</button>
      <ul>
        {randomNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;



import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Sample data
const episodeData = [
  { id: 1, number: "S1E1", name: "The Awakening", description: "A haunting presence looms over the small town." },
  { id: 2, number: "S1E2", name: "Echoes", description: "Strange whispers lead to buried memories." },
  { id: 3, number: "S1E3", name: "The Hollow", description: "An old legend resurfaces with deadly consequences." }
];

// Episode List Component
function EpisodeList({ episodes, onSelect, selectedId }) {
  return (
    <ul>
      {episodes.map((ep) => (
        <li
          key={ep.id}
          onClick={() => onSelect(ep)}
          className={selectedId === ep.id ? 'selected' : ''}
        >
          {ep.name}
        </li>
      ))}
    </ul>
  );
}

// Episode Details Component
function EpisodeDetails({ episode }) {
  if (!episode) {
    return <p>Please select an episode to see the details.</p>;
  }

  return (
    <div className="details">
      <h2>{episode.number}: {episode.name}</h2>
      <p>{episode.description}</p>
    </div>
  );
}

// Main App
function App() {
  const [episodes] = useState(episodeData);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <div>
      <h1>Dark Echoes</h1>
      <EpisodeList
        episodes={episodes}
        onSelect={setSelectedEpisode}
        selectedId={selectedEpisode?.id}
      />
      <EpisodeDetails episode={selectedEpisode} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
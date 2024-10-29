import React, { useState } from 'react';
import OptionList from './components/OptionList';
import VoteHistory from './components/VoteHistory';


function App() {
  const [candidates, setCandidates] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [voteHistory, setVoteHistory] = useState([]);

  // Legg til kandidat
  const addCandidate = (name) => {
    const newCandidate = { id: Date.now(), name, votes: 0 };
    setCandidates([...candidates, newCandidate]);
  };

  // Fjern kandidat
  const removeCandidate = (id) => {
    setCandidates(candidates.filter(candidate => candidate.id !== id));
    setVoteHistory(voteHistory.filter(vote => vote.id !== id));
  };

  // Øk/reduser stemmer
  const handleVote = (id, increment) => {
    setCandidates(candidates.map(candidate =>
      candidate.id === id ? { ...candidate, votes: candidate.votes + increment } : candidate
    ));
    setVoteHistory([...voteHistory, { id, increment }]);
  };

  // Rediger kandidatens navn
  const handleEditName = (id, newName) => {
    setCandidates(candidates.map(candidate =>
      candidate.id === id ? { ...candidate, name: newName } : candidate
    ));
  };

  // Beregn totale stemmer
  const totalVotes = candidates.reduce((acc, candidate) => acc + candidate.votes, 0);

  return (
    <div>
      <h1>Stemmegivningsapp</h1>
      <input
        type="text"
        placeholder="Søk kandidat..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => addCandidate("Ny Kandidat")}>Legg til kandidat</button>
      <OptionList
        candidates={candidates}
        searchTerm={searchTerm}
        onVote={handleVote}
        onEditName={handleEditName}
        onRemove={removeCandidate}
      />
      <p>Totale stemmer: {totalVotes}</p>
      <VoteHistory voteHistory={voteHistory} />
    </div>
  );
}

export default App;

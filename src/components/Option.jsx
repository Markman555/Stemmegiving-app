import React, { useState } from 'react';

const Option = ({ candidate, onVote, onEditName, onRemove }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(candidate.name);

  const handleSave = () => {
    onEditName(candidate.id, newName);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          onBlur={handleSave}
        />
      ) : (
        <h3 onClick={() => setIsEditing(true)}>{candidate.name}</h3>
      )}
      <button onClick={() => onVote(candidate.id, 1)}>Øk</button>
      <button onClick={() => onVote(candidate.id, -1)}>Reduser</button>
      <button onClick={() => onRemove(candidate.id)}>Fjern</button>
      <p>Stemmer: {candidate.votes}</p>
    </div>
  );
};

export default Option;

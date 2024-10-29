import React from 'react';
import Option from './Option';

const OptionList = ({ candidates, searchTerm, onVote, onEditName, onRemove }) => {
  const filteredCandidates = candidates.filter(candidate =>
    candidate.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {filteredCandidates.map(candidate => (
        <Option
          key={candidate.id}
          candidate={candidate}
          onVote={onVote}
          onEditName={onEditName}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default OptionList;

import React from 'react';

const VoteHistory = ({ voteHistory }) => (
  <div>
    <h4>Stemmehistorikk</h4>
    <ul>
      {voteHistory.map((vote, index) => (
        <li key={index}>
          {vote.increment > 0 ? `+${vote.increment}` : vote.increment} stemmer for kandidat ID: {vote.id}
        </li>
      ))}
    </ul>
  </div>
);

export default VoteHistory;

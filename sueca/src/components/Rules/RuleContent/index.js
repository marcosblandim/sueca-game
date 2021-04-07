import React from 'react';

import getSuits from '../../utils/getSuits';

export default function RuleContent({ content }) {
  return (
    <div>
      {getSuits().map(cardSuit => (
        <div key={cardSuit}>
          {cardSuit == 0 && 1}
          {cardSuit} -{'> '}
          {content[cardSuit].name}
        </div>
      ))}
    </div>
  );
}

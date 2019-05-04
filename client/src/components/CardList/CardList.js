import React from 'react';
import Card from '../Card/Card';

const CardList = ({ books }) => {
  return (
    <div class="dib">
      {
        books.map((file, i) => {
          return (
            <Card
              key={i}
              id={books[i]._id}
              name={books[i].filename}              
              />
          );
        })
      }
    </div>
  );
}

export default CardList;
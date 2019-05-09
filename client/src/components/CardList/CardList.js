import React from 'react';
import Card from '../Card/Card';

const CardList = ({ books,img,onImageClick }) => {
  return (
    <div class="dib al">
      {
        books.map((file, i) => {
          return (
            <Card
              key={i}
              id={books[i]._id}
              name={books[i].filename}
              imagesource={img[i]}                       
              />             
          );
        })
      }
    </div>
  );
}

export default CardList;
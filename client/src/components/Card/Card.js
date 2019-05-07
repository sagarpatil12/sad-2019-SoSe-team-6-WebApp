import React from 'react';
import Tilt from 'react-tilt';

const Card = ({id, name,imagesource}) => {
    return (
        <div className='pl5 pt4 mt2 dib' >
            <Tilt className="Tilt br2 " options={{ max : 25 }} style={{ height: 300, width: 225 }} >       
            <img alt='books' src={imagesource} classname="Tilt-inner pa3" class ="center"style={{ height: 300, width: 225 }}  />      
            </Tilt>        
            <text class="black times">{name}</text>        
            <text class="black times">{id}</text>
        </div>
    );
}

export default Card;
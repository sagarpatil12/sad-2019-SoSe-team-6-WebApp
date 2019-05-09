import React from 'react';
import Tilt from 'react-tilt';

const Card = ({id, name,imagesource,onImageClick}) => {
    return (
        <div className='pl5 pt4 mt2 dib ' >
            <Tilt className="Tilt br2 ba bw2 b--black " options={{ max : 25 }} style={{ height: 300, width: 225 }} >       
            {/* <a href="http://localhost:9000/book/To%20Kill%20a%20Mockingbird%20-%20Lee%2C%20Nelle%20Harper?page=hsn#toolbar=0" > */}
            <img alt='books' src={imagesource} classname="Tilt-inner pa3 " class ="center" style={{ height: 293, width: 225 }} onClick={onImageClick(name)} />          
            </Tilt>        
            <text class="black times">{name}</text>        
            {/* <text class="black times">{id}</text> */}
        </div>
    );
}

export default Card;
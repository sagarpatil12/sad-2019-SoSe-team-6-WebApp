import React from 'react';
import Tilt from 'react-tilt';

const Card = ({id, name,imagesource,price}) => {
    return (
        <div className='pl5 pt6 mt2 dib ' >
            <Tilt className="Tilt br2 ba bw2 b--black " options={{ max : 25 }} style={{ height: 300, width: 225 }} >       
            <img alt='books' src={imagesource} classname="Tilt-inner pa3 " class ="center"style={{ height: 293, width: 225 }} />      
            </Tilt>        
            <text class="black times">{name}</text> <br></br>  
            <text class="black timees"><b>{price}</b></text>    
            {/* <text class="black times">{id}</text> */}
        </div>
    );
}

export default Card;
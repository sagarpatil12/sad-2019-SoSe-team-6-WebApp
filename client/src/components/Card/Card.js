import React from 'react';
import Tilt from 'react-tilt';


const Card = ({id, name,imagesource,price,onImageClick}) => {
    return (
        <div className='pl5 pt4 mt2 dib w-25 h4' >
            <Tilt className="Tilt br2 ba bw2 b--white " options={{ max : 25 }} style={{ height: 300, width: 225 }} >      
            
            <img alt='books' src={imagesource}  classname="Tilt-inner pa3" class ="center pointer"style={{ height: 293, width: 225 }} onClick={()=>onImageClick(name)}/>      
            

            </Tilt><br></br>     
            <text class="white times f3 ">{name}</text> <br></br>  
            <text class="white timees"><b>{price}</b></text>    
            {/* <text class="black times">{id}</text> */}
        </div>
    );
}

export default Card;
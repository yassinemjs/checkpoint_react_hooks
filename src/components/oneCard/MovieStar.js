import React,{useState} from 'react';
import {FaStar} from 'react-icons/fa'
import '../../App.css'

function MovieStar({rating ,add}) {
  
   const [valueRating,setValueRating]=useState(null)

      return(
            
        <div>
        
          {[...Array(5)].map((star,i)=>{
           const count=i+1 ;
          return(
            <label>
                <input type='radio' name='rating' value={rating} onClick = {add} />
                <FaStar color={count<=rating||count<=valueRating?"#F1C40F ":"#BDC3C7" }/>
            </label>
           
          )

          })}  
            
          </div>
    )
    
}

export default MovieStar
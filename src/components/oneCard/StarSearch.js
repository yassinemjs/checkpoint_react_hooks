import React,{useState} from 'react';
import {FaStar} from 'react-icons/fa'
import '../../App.css'

function StarSearch({searchRate}){
   
   const[ratingValue,setRatingValue]=useState(0)

    return(
        <div>
          {[1,2,3,4,5].map((star,i)=>{
          return(
            <label  key={i}  onClick={()=>setRatingValue(star)} >
                <input type='radio'    onClick={()=>searchRate(ratingValue)} />
                <FaStar size={50} color={star<=ratingValue?"#F1C40F ":"#BDC3C7" }/>
            </label>
          )
          })}  
      </div>
    )
}

export default StarSearch
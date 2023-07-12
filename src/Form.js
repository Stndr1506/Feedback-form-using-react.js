import React, { useState } from 'react'
import './Form.css';


export default function Form() {
    const [data, setData] = useState({});

    const handleChange = (e) =>{
        const {name, value} = e.target;
        console.log(value)
        setData({...data, [name]: value});
    }
    
    const HandleSubmit = (e) =>{
        e.preventDefault()
        console.log(data)
    }
  return (
    <div>
    <div className='form' >
        <h1 className='h1'>Feedback Form</h1>
        <form className='feedback' onSubmit={HandleSubmit}>
            <div className='content'>
            <h4>Look and Feel: </h4>
                <label>Excellent</label>
                <input type='radio' name='Look and Feel' value="Excellent" onChange={(e) => handleChange(e)}/>

                <label>Good</label>
                <input type='radio' name='Look and Feel' value="Good" onChange={(e) => handleChange(e)}/>

                <label>Average</label>
                <input type='radio' name='Look and Feel' value="Average" onChange={(e) => handleChange(e)}/>


                <h4>Cleanliness of shop: </h4>
                <label>Excellent</label>
                <input type='radio' name='Cleanliness of shop' value="Excellent" onChange={(e) => handleChange(e)}/>

                <label>Good</label>
                <input type='radio' name='Cleanliness of shop' value="Good" onChange={(e) => handleChange(e)}/>

                <label>Average</label>
                <input type='radio' name='Cleanliness of shop' value="Average" onChange={(e) => handleChange(e)}/>


                <h4>Value for money: </h4>
                <label>Excellent</label>
                <input type='radio' name='Value for money' value="Excellent" onChange={(e) => handleChange(e)}/>

                <label>Good</label>
                <input type='radio' name='Value for money' value="Good" onChange={(e) => handleChange(e)}/>

                <label>Average</label>
                <input type='radio' name='Value for money' value="Average" onChange={(e) => handleChange(e)}/>


                <h4>Staff friendliness & Professionalism: </h4>
                <label>Excellent</label>
                <input type='radio' name='Staff friendliness & Professionalism' value="Excellent" onChange={(e) => handleChange(e)}/>

                <label>Good</label>
                <input type='radio' name='Staff friendliness & Professionalism' value="Good" onChange={(e) => handleChange(e)}/>

                <label>Average</label>
                <input type='radio' name='Staff friendliness & Professionalism' value="Average" onChange={(e) => handleChange(e)}/>


                <h4>Your Visit: </h4>
                <label>Excellent</label>
                <input type='radio' name='Your Visit' value="Excellent" onChange={(e) => handleChange(e)}/>

                <label>Good</label>
                <input type='radio' name='Your Visit' value="Good" onChange={(e) => handleChange(e)}/>

                <label>Average</label>
                <input type='radio' name='Your Visit' value="Average" onChange={(e) => handleChange(e)}/>

            
            </div><br/>
            
            <button onClick={HandleSubmit}>Submit</button>
        </form>
    </div>
      
    </div>
  )
}

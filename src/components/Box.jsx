import { useState } from 'react';
import '../styles/Box.css';

function Box(){
    const [colorbg, setColorbg] = useState("");

    const cambiarColor = (e) => {
        setColorbg(e.target.value);
    }

    return(
        <div>
            <div className="box" style={{backgroundColor: colorbg}}>
                <h1>{colorbg}</h1>
            </div>
            
            <input type="text" className='input-text' name='color-bg' onChange={cambiarColor}/>
        </div>
    )
}

export default Box;

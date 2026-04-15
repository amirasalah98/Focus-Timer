import {Link} from 'react-router-dom'
import { useState } from 'react';
function CreateBlock (){
 const [duration, setDuration] = useState(5);
 const [name, setName] = useState('');
const [focus, setFocus] = useState('');
const [unit, setUnit] = useState('seconds');
const now = new Date();
const handleCreate = () => {
  const blockData = {
    name,
    focus,
    duration,
    unit,
    createdAt: now.toISOString(),
    createdAtDisplay: now.toLocaleTimeString()
  };

  localStorage.setItem('focusBlock', JSON.stringify(blockData));
};
    return(
        <>
        <div className='createBlock'>
            <h2>Create Focus Block</h2>
            <div className='w-100'>
                <label className='d-block text-start px-0' htmlFor="yourName">What is your name? </label>
                <input className='w-100' type="text" name="yourName" id="yourName"
                value={name}
  onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='w-100'>
                <label className='d-block text-start px-0' htmlFor="focus">What will you focus on?</label>
                <input className='w-100' type="text"  name="focus" id="focus"
                value={focus}
  onChange={(e) => setFocus(e.target.value)} />
            </div>
            <div className="form-check radio-group my-4">
                <input className="form-check-input " type="radio"
                 name="duration" id="radio1"
                  checked={duration===5} onChange={()=> {setDuration(5); setUnit("seconds");}} />
                <label className="form-check-label my-2" htmlFor="radio1">
                    5 seconds
                </label>
            
                <input className="form-check-input " type="radio"
                 name="duration" id="radio2"
                  checked={duration===15} onChange={()=> {setDuration(15); setUnit("mins");}}  />
                <label className="form-check-label my-2" htmlFor="radio2">
                    15 mins
                </label>
            
                <input className="form-check-input" type="radio"
                 name="duration" id="radio3" 
                  checked={duration===30} onChange={()=> {setDuration(30); setUnit("mins"); }} />
                <label className="form-check-label my-2" htmlFor="radio3">
                    30 mins
                </label>
            </div>
            <div className="d-flex justify-content-around">
                <Link className='w-25'>Cancel</Link>
                <Link className='w-25' to='/timerblock' onClick={handleCreate}>Create</Link>
            </div>
        </div>
        </>
    )
}
export default CreateBlock;
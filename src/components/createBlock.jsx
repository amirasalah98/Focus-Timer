import {Link} from 'react-router-dom'
import { useState } from 'react';
function CreateBlock (){
 const [duration, setDuration] = useState(30);
 const [name, setName] = useState('');
const [focus, setFocus] = useState('');
const now = new Date();
const handleCreate = () => {
  const blockData = {
    name,
    focus,
    duration,
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
                <input className="form-check-input" type="radio"
                 name="duration" id="radio30"
                  checked={duration===30} onChange={()=> setDuration(30)} />
                <label className="form-check-label" htmlFor="radio30">
                    30 min
                </label>
            
                <input className="form-check-input" type="radio"
                 name="duration" id="radio60"
                  checked={duration===60} onChange={()=> setDuration(60)}  />
                <label className="form-check-label" htmlFor="radio60">
                    60 min
                </label>
            
                <input className="form-check-input" type="radio"
                 name="duration" id="radio90" 
                  checked={duration===90} onChange={()=> setDuration(90)} />
                <label className="form-check-label" htmlFor="radio90">
                    90 min
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
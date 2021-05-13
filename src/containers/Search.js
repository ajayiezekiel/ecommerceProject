import React, { useState } from 'react';


const Search = ({searchPatients, setAlert, clearSearch}) => {
    const [text, setText] = useState('');
    const [show, setShow] = useState(false); 


    const onChange = (e) => setText(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            setAlert('Please enter something', 'light');
        } else {
            searchPatients(text);
            setText('');
            setShow(true);
        }
    }
    const onClick = () => {
        clearSearch();
        setShow(false);
    }
    

    return (
        <div>
            <form onSubmit={onSubmit} className='form'>
                <input type="text" name="text" 
                placeholder="Search profiles ...." 
                value={text} 
                onChange={onChange}
                 />
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
            </form>

            {(show && <button className='btn btn-light btn-block'
                onClick={onClick}>Clear</button>)}                 
        </div>
    );
}

Search.propTypes = {
    searchPatients: PropTypes.func.isRequired,
    clearSearch: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
}
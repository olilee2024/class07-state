import {useState} from 'react';

const Alert = ({message}) => {
    const [isDismissed, setIsDismissed] = useState(false)

    return ( !isDismissed &&
        <div className="alert">
            <h3>{message}</h3>
            <button onClick={() => setIsDismissed(true)} className="dismiss-button">
                x
            </button>
            {/* this is just the one with a function within a function
            <button onClick={() => setIsDismissed(prevVal => true)} className="dismiss-button">
                x
            </button> */}

        </div>
    )
};

export default Alert;

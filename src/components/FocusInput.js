import React, { useRef } from 'react';

const FocusInput = () => {
    const inputRef = useRef();

    const handleFocus = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <input ref={inputRef} type="text" className="form-control mb-2" placeholder="Click button to focus me" />
            <button className="btn btn-success" onClick={handleFocus}>
                Focus Input
            </button>
        </div>
    );
};

export default FocusInput;

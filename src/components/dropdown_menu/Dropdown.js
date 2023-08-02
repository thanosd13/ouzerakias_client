import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import './Dropdown.css';

const Dropdown = ({ options, prompt, label }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);

    return (
        <div className="dropdown">
            <div className="dropdown-prompt" onClick={() => setOpen(!open)}>
                {value ? value[label] : prompt}
                <FontAwesomeIcon className="icon_drop" icon={faCaretDown} />
            </div>
            {open && (
                <div className="dropdown-options">
                    {options.map((option) => (
                        <div
                            className="dropdown-option"
                            onClick={() => {
                                setValue(option);
                                setOpen(false);
                            }}
                            key={option.id}
                        >
                            {option[label]}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;

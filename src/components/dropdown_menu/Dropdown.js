import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = ({ options, prompt, label }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);

    return (
        <div className="dropdown">
            <div className="dropdown-prompt" onClick={() => setOpen(!open)}>
                {value ? value[label] : prompt}
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

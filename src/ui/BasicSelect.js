"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
export default function useBasicSelect({ options, maintext }) {
    // const [selectedOption, setSelectedOption] = useState(options[0]);
    const [selectedOption, setSelectedOption] = useState('options[0]');
    const [displayedText, setDisplayedText] = useState(maintext);
    function handleChange(evt) {
        setSelectedOption(evt.target.value);
        setDisplayedText(evt.target.value);
        console.log(selectedOption);
    }
    function BasicSelect() {
        return (_jsx("div", { className: 'flex items-center justify-center', children: _jsxs("select", { className: "select select-bordered w-full max-w-xs", value: displayedText, onChange: (evt) => handleChange(evt), children: [_jsx("option", { disabled: true, children: maintext }), options.map((option) => _jsx("option", { value: option, children: option }, option))] }) }));
    }
    return [selectedOption, BasicSelect];
}

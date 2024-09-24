import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
export default function useBasicToggle({ leftText, RightText }) {
    const [toggled, setToggled] = useState(false);
    function BasicToggle() {
        return (_jsxs("div", { className: 'flex items-center justify-center whitespace-pre ', children: [_jsxs("p", { children: [leftText, "  "] }), _jsx("input", { checked: !toggled, type: "checkbox", onClick: () => toggled ? setToggled(false) : setToggled(true), className: "toggle", defaultChecked: true }), _jsxs("p", { children: ["  ", RightText] })] }));
    }
    return [toggled, BasicToggle];
}

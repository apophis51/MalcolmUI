import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
/**
 * @param leftText - The text on the left side of the toggle
 * @param RightText - The text on the right side of the toggle
 *
 * This Function must take the form:
 *
 *const [toggled, BasicToggle] = useBasicToggle({ leftText: 'Your Text', RightText: 'Your Right Item' })
 *
 *And Insert it Into Your JSX using the Form:
 *  \<BasicToggle />
 *
 * When the UI is toggled to the Right - The toggled button will be "True"
 *
 * When it is toggled to the left - the toggled button will be "False"
 */
export default function useBasicToggle({ leftText, RightText }) {
    const [toggled, setToggled] = useState(true);
    function BasicToggle() {
        return (_jsxs("div", { className: 'flex items-center justify-center whitespace-pre ', children: [_jsxs("p", { children: [leftText, "  "] }), _jsx("input", { checked: toggled, type: "checkbox", onClick: () => toggled ? setToggled(false) : setToggled(true), className: "toggle", defaultChecked: true }), _jsxs("p", { children: ["  ", RightText] })] }));
    }
    return [toggled, BasicToggle];
}

import { useState } from 'react'


/*************  ✨ Codeium Command ⭐  *************/
    /**
     * 
     * @param {Object} props
     * @prop {string} props.leftText Text to the left of the toggle button
     * @prop {string} props.RightText Text to the right of the toggle button
     * @returns an array of a boolean and a React component. The boolean is a state variable that tracks the state of the toggle button. The React component is the toggle button itself.
     */
/******  ac98486a-82cf-486a-a5e6-72266fa08c28  *******/
export default function useBasicToggle({ leftText, RightText }: { leftText: string, RightText: string }): [ boolean, React.FC ] {
    const [toggled, setToggled] = useState(false);

    function BasicToggle() {

        return (
            <div className='flex items-center justify-center whitespace-pre '>
                <p>{leftText}  </p>
                <input 
                checked={!toggled}
                type="checkbox" 
                onClick={() => toggled ? setToggled(false) : setToggled(true)} className="toggle" defaultChecked />
                
                <p>  {RightText}</p>
            </div>
        )
    }




    return [toggled, BasicToggle]
}

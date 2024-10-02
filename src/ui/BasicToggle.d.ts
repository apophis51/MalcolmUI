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
export default function useBasicToggle({ leftText, RightText }: {
    leftText: string;
    RightText: string;
}): [boolean, React.FC];

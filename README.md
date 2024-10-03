# This is The Malcolm React UI app

This is the `malcolm_ui_react` library made by https://malcmind.com




Unlike other UI libraries... this library is reactive out the box.


## Instalation 

1) Simply NPM install `malcolm_ui_react` into your react project

2) This Repo relies on TailwindCSS and DaisyUI for styling so also Install those into your project

3) import one of our components such as `import {useBasicToggle} from malcolm_ui_react`

4) In your React function instantiate the import such as follows `    const [toggled, BasicToggle] = useBasicToggle({ leftText: 'Multiple Articles', RightText: 'One Article' })`

The left text will appear to the right of the toggle menu, and the Right Text to the left of your toggle menu

5) Display it in your JSX using `<BasicToggle />`

6) Whenever the user toggles the button the `toggled` variable will change from true to false

7) You can use a click handler function to trigger server actions based on whether its set to true or false


This is just the Basics but much more documentation comming soon!

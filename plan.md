# The plan

- Import images onto figma board ✅

# Mobile

- Analyse mobile design and break down into html elements ✅
- Create html file ✅
  - Add skeleton html ✅
  - Start populating html ✅
- Create CSS file
  - Position elements ✅
  - Style
    - Header ✅
    - Main
      - Hero ✅
      - 'How it works' section ✅
    - Footer ✅

# Convert to React App using Vite

-
-
-
-
-
-

## Convert to Next.js

-
-
-
-

## Hackathon

- Plan out on Figma ✅
- Transfer over plan to Github projects
- Create Components
  - Trusted Section ✅
    - JSX ✅
    - CSS✅
  - Button
    - JSX 🟠
    - CSS 🟠
  - Review
    - JSX 🟠
    - CSS 🟠
- Add functionality to pull data from Country reviews GET - https://seal-app-336e8.ondigitalocean.app/reviews?country=scotland
  - Create State ✅
  - Add event listener ✅
  - Create useEffect ✅
  - Button click should show a single review from the country specified ✅

# Presentation

-
-
-
-
-

## Contact Us form

- Create contact us folder ✅
- Create page.js in the folder ✅
- Create page.css in the folder ✅
- Create folder Form in components folder ✅
  - create files - form.jsx and form.module.css ✅
- Import Form component to page.js inside Form folder ✅
- Replace phone number with a Button link to contact us page
- Create contact us form
  - Personal info fieldset ✅
  - Contact info fieldset ✅
- Create state to track the first input field ✅
- Create onChange handler for the first input field ✅
  - console log the field value ✅
- Create state for the rest of the fields ✅
- Create handler for the rest the field ✅
- Check that no form fields are empty on submit
  - Create handler to deal with form submission
  - Create state that shows error for empty fields
  - Show error if empty field
- Console.log all the form data

## Reduce Refactor

- Copy existing Form files as a backup ✅
- Delete all fields but one ✅
  > Test ✅
- Move the one field over to use useReducer ✅
  > Test ✅
- Move rest of first fieldset over to useReducer ✅
  > Test ✅
- Move second fieldset over to useReducer ✅
  > Test ✅
- Update error functionality to use useReducer ✅
  > Test ✅
- Clean up code ✅



As a user when I submit the form it should  show me that it is submitting.
- Create status inside of state ✅
- Create a case scenario in reducer function for when the status is 'submitting' ✅
- When a user clicks on the submit button:
  - There should be a slight delay (3s)
  - On the submit button it should say 'Requesting...'
- Create a ternery that will only display submission indicator if state's status is on 'submitting'




# Desktop

- Adjust the styling for desktop (media query)

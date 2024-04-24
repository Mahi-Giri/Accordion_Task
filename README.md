### Project Requirement

```
Create 4 accordions with dummy questions as content having 3 radio buttons as Yes, No, and NA

Each accordion must have at least 5 to 6 questions

All questions will have No answer radio button selected as the initial state

At the start, questions in the first accordion are only editable for answering

On choosing any radio button, save and cancel should appear at the bottom of the accordion

After choosing Yes or NA for all questions in the first accordion the second accordion will be editable

If the radio button in the first accordion changes to No after choosing all options as Yes or NA, the second accordion will again be non-editable.
```

### For Running this Project

```javascript
npm install
npm run dev
```

### Description:

```text
The React Accordion with Local Storage project is a web application that allows users to view and interact with accordion-style panels containing questions and answers about various web development topics such as HTML, CSS, JavaScript, and React. Users can expand/collapse each accordion panel to reveal/hide the corresponding content.
```

### Key Features:

```text
Accordion Panels: The application presents accordion-style panels for each topic, allowing users to easily navigate through different sections of content.

Local Storage: The project leverages browser local storage to store user interactions. When a user selects their answers to the questions within an accordion panel, the choices are stored locally, ensuring that their progress is saved even if they refresh the page or revisit later.

Editable State: Users can only edit the answers within an accordion panel if all previous panels have been completed. This ensures a structured progression through the topics and prevents users from skipping ahead without engaging with the content.

Responsive Design: The application is designed to be responsive, providing an optimal viewing and interaction experience across a wide range of devices and screen sizes.
```

### Technologies Used:

```text

React: The project is built using the React library, allowing for efficient component-based development and state management.

React Collapse: The React Collapse library is utilized to create the collapsible accordion panels, enabling smooth transitions between open and closed states.

React Icons: Icons from the React Icons library, specifically the FaChevronDown and FaChevronRight icons, are used to indicate the open/close state of accordion panels.

Local Storage API: The browser's Local Storage API is employed to store user responses locally, ensuring persistent data across page reloads and browser sessions.
```

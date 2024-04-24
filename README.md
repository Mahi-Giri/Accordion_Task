# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



1. Create 4 accordions with dummy questions as content having 3 radio buttons as Yes, No, and NA
2. Each accordion must have at least 5 to 6 questions
3. All questions will have No answer radio button selected as the initial state
4. At the start, questions in the first accordion are only editable for answering
5. On choosing any radio button, save and cancel should appear at the bottom of the accordion
6. After choosing Yes or NA for all questions in the first accordion the second accordion will be editable
7. If the radio button in the first accordion changes to No after choosing all options as Yes or NA, the second accordion will again be non-editable.
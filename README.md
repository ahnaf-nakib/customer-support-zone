 1. What is JSX, and why is it used?

JSX (JavaScript XML)** is a syntax extension for JavaScript that lets you write HTML-like code directly within your JavaScript files. It's essentially a shorthand that gets automatically translated into standard JavaScript function calls (like `React.createElement()`). JSX is used because it makes the user interface (UI) code **much easier to read and write**, allowing the structure of the UI to live right next to the logic that handles it, which improves both readability and maintainability.

2. What is the difference between State and Props?

The difference between State and Props defines how data flows in a React application.
 * **State** is data that is managed, controlled, and can be changed **within** a component itself (it is mutable). You must use a dedicated setter function (like `setTickets`) to update it.
* **Props** (properties) are data passed **from a parent component** down to a child component. They are considered **immutable** (read-only); a child component cannot directly change the props it receives.

3. What is the `useState` hook, and how does it work?


The **`useState` hook** is a special function provided by React that allows **functional components to manage State**. It is used for handling data that changes over time, like user input or the number of solved tickets. When you call `useState(initialValue)`, it returns an array containing two items: the **current state value** (the data itself) and a **setter function** (the function used to update the state, like `setResolvedCount`). When you call the setter function, React automatically re-renders the component with the new data.

4. How can you share state between components in React?

State is shared between components by a technique called **"lifting state up"**. If two or more components (like siblings) need access to the same data, the state must be moved to their closest common parent component. The parent component holds the state and then passes that data down to the child components as **Props**. If a child component needs to change the state, the parent passes the state's **setter function** down to the child via props as well.

5. How is event handling done in React?


Event handling in React is similar to standard HTML but uses a few conventions.

1.  **CamelCase:** Event names are written in **camelCase** (e.g., `onClick`, `onChange`), unlike the lowercase names in HTML (`onclick`).
2.  **Function Reference:** Instead of passing a string of code, you pass a **JavaScript function** directly as the handler (e.g., `<button onClick={myFunction}>`).

This makes event handling simpler and more integrated into the JavaScript environment.

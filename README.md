# Net Ninja React Course

## Module: Introduction

### What is React?

A JS library used to create **single page apps** (SPAs). With SPAs a server only ever needs to send a _single_ HTML page to the browser and then React manages the whole website in the browser (i.e. website data, routing, user activity, etc.).

With routing (page to page navigation) the new page is not sent from the server, but rather React changes the content in the browser. This all makes the website work quickly.

### React Fundamentals

- Using **state**
- **React Router**
- How and when to **fetch** data
- **React Hooks** (i.e. `useState`, `useEffect`)
- Create custom **hooks**

## Module: Create React App

Navigate to project directory and run `npx create-react-app my-app-name`.

### React App Structure

In the _public_ folder you will find an `index.html`. This is the one HTML file that is served to the browser and where all of the React code is injected into this file within the `div` with the `id` of `root`.

The _working_ or _development_ code you create when building React app will go in the `src` folder. These will include the React **components**. The initial component created for us is the `App.js` file.

Within the src folder you will also see some **CSS** files, **test** files, `reportWebVitals.js`, and the `index.js` file. The `index.js` file kick starts the app. It is responsible for taking all of the React components and **mounting** them to the _DOM_. It does this by rendering the `App.js` component to the _DOM_ at the `div` `id` of `root` in the HTML file. This makes the `App.js` file the `root` component.

```jsx
// file: ./src/index.js

// You see below that root div of App.js is being rendered to the ReactDOM.
// React.StrictMode provides console warnings.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## Module: Components and Templates

**Components** are self contained section of content (i.e. navbar, button, form, etc.).

Each component contains all of its own **template** and **logic** for that piece of content. The component will contain all of its **template** (The HTML to make up said component) as well as all of its own JS **logic** (i.e. A function that runs when a logout button is clicked).

Starting out we only have the one component, `App.js` (root component). It is a function named `App` which returns **JSX**. The **JSX** is converted into HTML templates via React dependencies when we save the file then renders the HTML to the DOM.

> [!NOTE]
> At the bottom of React components you will export the component so that it can be used in other files (i.e. The `App` component is imported and used within the `index.js` file).

## Module: Dynamic Values/Variables in Templates

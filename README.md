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

We can add dynamic data and variables to the component and add them to the DOM within the `return` statement inside curly braces.

React will convert the values to **string** before outputting it to the browser. The only things that React _cannot_ output are booleans and objects. If you try to output an object you will get a runtime error stating it is an invalid React child.

You can also write dynamic values directly in the JSX via curly braces.

You can also store _URLs_ in a variable and call them as dynamic values in the JSX.

## Module: Multiple Components

The _root_ component, `App.js`, sits at the top of the **component tree**. When making new components they get nested inside the root component on the tree. You can even nest more inside those components. This all makes up the component tree.

### Creating New Component

Within the `src` dir create a `Navbar.js`. Within this component use the React Snippets vscode extension to output a boiler pate stateless component or arrow function.

After component content created you _import_ said component into the `App.js`.

## Module: Styling React App

You can have separate _localized_ CSS files to a component as either a CSS module, CSS file, or styled components. For smaller apps you can simply have one global stylesheet (i.e. `index.css`).

Another method is _inline_ styles. The difference between inline in JSX is that they are within **curly braces** instead of quotes.

If we were to add inline styles to the `/create` anchor element and add an object to it:

```jsx
<a
  href="/create"
  style={{
    color: "white",
    backgroundColor: "#f1356d",
    borderRadius: "0.5rem",
  }}
>
  New Blog
</a>
```

## Module: Click Events

You can add a function (i.e. `handleClick()`) within the component and _bind_ it to an element by adding the event as an attribute to said element and making it equal to the dynamic value which will be the function reference (i.e. `onClick={handleClick}`).

For example:

```jsx
const Home = () => {
  // Function called on click event.
  const handleClick = () => {
    console.log("Heyoo!");
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Home;
```

> [!TIP]
> We only **reference** the function because if we invoked it then it will get called on page load and not on click. The click event will invoke it.

If we want to pass in an _argument_ to the function then we have to do it differently because we do not want to invoke the function on load.

We have to _wrap_ the event handler inside an **anonymous function** in order to accomplish this. The **handler function** will take a parameter (i.e. `name`) and we call the handler function with the argument for name:

```jsx
// OTHER CODE...

const handleClickAgain = (name) => {
  console.log(`Hello ${name}`);
};

// OTHER CODE...

<button
  onClick={() => {
    handleClickAgain("Mario");
  }}
>
  Click Me Instead
</button>;

// REST OF CODE...
```

> [!TIP]
> Since the above anonymous and handler call are a single expression then we can have it all on one line and remove the curly braces surrounding the handler function call (i.e. `handleClickAgain()`).

Since we are handling events we will have access to the **event object**. We can log it to the console when we add it as a param to the handler function.

For the second click event we do not have access to the **event object** right away with the handler function, but rather the anonymous function gains access to the **event object** right away and then it can be passed in as an _argument_ to the handler function call. Once this is done the event can then be passed into the handler function as an _argument_.

For example:

```jsx
// OTHER CODE...

const handleClickAgain = (name, event) => {
  console.log(`Hello ${name}`, event.target);
};

// OTHER CODE...

<button onClick={(event) => handleClickAgain("Mario", event)}>
  Click Me Instead
</button>;

// REST OF CODE...
```

## Module: State (`useState` hook)

When we talk of the state of a component we mean the **data** being used by said component at that point in time.

In our `Home.js` component we will test changing a name variable on button click. If we update value of `name` in the `handleClick` function it will update the value of `name`, but it will not be rendered to the DOM.

It does not update in the DOM or template because the `name` variable created is _not reactive_ (React does not watch it for changes). Nothing triggers React to re-render the template with the new value for `name`.

To trigger the change we use a **hook** called `useState`.

1. We need to _import_ the useState hook via _destructuring_ from React into the component.
2. Call the function `useState` inside the component and give it an _initial_ value (i.e. `useState("Mario")`).
3. We need to store the useState function instead of just invoking it. We assign it to a const and use _array destructuring_ to grab two values the `useState` hook provides us. The _first_ value is the initial function (i.e. `name`) and the second is a function we can use to change that initial value (i.e. `setName`).

If we use `name` within the template it will grab whatever the value of that `name` is. If we want to change that value we would use the `setName` function to do it. The _state_ value is reactive so if it changes it will change in the template too.

The `useState` hook can be used as many times as we want within a component to change values. The value within useState can be **any** data type.

For example:

```jsx
// OTHER CODE...

const [name, setName] = useState("Mario");
const [age, setAge] = useState(25);

const handleClick = () => {
  setName("Luigi");
  setAge(34);
};

return (
  // OTHER CODE...

  <p>{name} is {age} years old.</p>
  <button onClick={handleClick}>Change Name/Age</button>

  // OTHER CODE...
)

// REST OF CODE...
```

> [!NOTE]
> The `useState` hook outputs an array of objects to the console. Each object represents the _state_ that we have.

## Module: React Dev Tools

Provides us more functionality in the browser dev tools. In particular the _components_ section provides us with a component tree.

If you click on a component you will see info such as **props**, **hooks**, **rendered by**, and **source**.

You will also see options for _inspect DOM element_, _log data to console_, and _view the source file_.

## Module: Outputting Lists

We will be setting state for the blogs because they may change in the future. We do this with an initial value of state set to an array of blog objects.

To add the blogs to the template we could simply hardcode 3 divs, but that would be redundant and if new blogs are created then it will not react to hardcoded containers.

A better strategy is to cycle through the blogs array using the **map** method.

1. We take the `blogs` property (state variable) and add it to the return statement within curly braces.
2. Use the `map` method on the `blogs` prop. Map fires a cb function for each item where we want to output some JSX template (For each iteration).
3. Assign the iteration to `blog` within the cb function as an argument representing the current item we are iterating over.
4. For each iteration we want to output a `div` with a blog preview on the homepage which will display the title and author.
5. Each root element in the template we return (blog-preview div) needs to have a `key` attribute (The `key` allows React to keep track of each item in the DOM as it outputs it or data is added/removed). Assigned to `blog.id` to be unique.

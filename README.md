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
// file: ./src/Home.js

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
// file: ./src/Home.js

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
// file: ./src/Home.js

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
// file: ./src/Home.js

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

## Module: Props

Using the blog mapping output as an example, we might have the same section on several different pages and we do not want _repetitive_ code.

We resolve this by making that chunk of template its own _reusable component_. With it set as it's own component we can simply import it into the components we want to use it in (i.e. `BlogList.js`).

Sometimes we might want to use different data in the above component and we do this by passing in **props**. They allow us to pass data from a parent component into a child component (i.e. parent = `Home.js`, child = `BlogList.js`).

1. Cut the `blogs.map` section from `Home.js` and add it to the new `BlogList` component.
2. Import and add `<BlogList />` to the Home.js component.
3. Pass in a **prop** to the `BlogList` component inside `Home.js` called `blogs`. This will allow us to use the blogs data from `Home.js` in the `BlogList` component.
4. Pass in blogs state variable (blogs data) into the above **prop**.
5. We now have access to an argument inside the `BlogList` component defined in `BlogList.js`. The argument is `props`. The property of `blogs` from `Home.js` will now will be available on the `props` object.
6. Now having access to the **blogs prop** we can create a variable within `BlogList.js` to access the `blogs` (`const blogs = props.blogs;`).

Looking at the props object in the console you will see it has the blogs property on it which is an array. Also you have the array of blogs (Get this due to the `console.log(props, blogs)`).

> [!NOTE]
> Any blogs that we send through to a component are attached to the `props` object that allows us to access them.

You can pass in multiple props. For example back in Home.js we could pass in a title prop to the BlogList component (i.e. `<BlogList blogs={blogs} title="All Blogs" />`).

Now we can access that `title` prop in the BlogList.js component. We then can add that above the blogs within an h2 (i.e. `<h2>{title}</h2>`).

> [!TIP]
> Where we call properties with the props object (`const blogs = props.blogs;`) we could instead **destructure**. This is done in the parenthesis instead of using `(props)` we would **destructure** from the props directly by telling it which properties you want `({blogs, title})`. We can now remove the constants for `blogs` and `title` and the component will still work.

We can pass in different data to the `BlogList` component. Let's pass in `title="Mario's Blogs"` and set the blogs prop to filter for author of Mario.

> [!NOTE]
> The `filter` method takes a callback function that returns a boolean true or false. If true then a new array is created with the truthy item(s).

## Module: Functions as Props

If we wanted to be able to **delete** a blog we would add a button to the `BlogList.js` so that it shows up for each blog snippet.

We would add `onClick` to button and remember to wrap in an _anonymous function_ so we can receive **arguments**. We need to pass in an ID to the function which is why we need it to be an **argument**. The ID will allow us to find the blog post and delete it.

1. We create the `handleDelete` function and pass it in as a prop to the `BlogList` component (`<BlogList blogs={blogs} title="Mario's Blogs" handleDelete={handleDelete} />`).
2. Then back in `BlogList.js` we accept the `handleDelete` function as a prop (Pass in function as a prop). We are invoking the function found in the parent home component.
3. Inside `handleDelete` we use the `setBlogs` setter function to update the state to remove blog with corresponding ID.
4. Within the `handleDelete` function we will create a constant called `newBlogs` and assign it a **filter** on the blogs array. The **filter** will return a new array with only _truthy_ values from the original array in it. Each iteration of the blogs array will take blog as an _argument_. _True_ is if the `id` does not match the `id` in `handleDelete` argument and _false_ if it does. The `id` of the blog we want to remove is coming from `blog.id` in `BlogList.js`.
5. Then the new value of `blogs` will be `setBlogs(newBlogs)`, which will also re-render UI.

> [!TIP]
> We should not alter the BlogList's prop. Instead we make modifications where the **data** and **state** is held using `setBlogs` setter function.

For example:

```jsx
// file: ./src/Home.js

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    // OTHER CODE...
  ]);

  const handleDelete = (id) => {
    // Set new filtered array to newBlogs.
    // Assign iteration to blog and filter out blog.id if it is equal to current id to delete it. If not equal to current id we add it to the newBlogs array.
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    // Use the setter function from useState and assign it to the newBlogs array to re-render UI.
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      {/* This is where we add handleDelete as a prop for BlogList.js to use. */}
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
    </div>
  );
};

// REST OF CODE...

// file: ./src/BlogList.js

// We grab handleDelete function as a prop from Home.js.
const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      {/* OTHER CODE... */}
      <button
        {/* Wrap handleDelete() in anonymous function to only call handleDelete() function when clicked and not page load. */}
        onClick={() => {
          {/* Pass in blog.id as argument to handleDelete() function. We will be deleting based on the unique ID of the blog. */}
          handleDelete(blog.id);
        }}
      >
        Delete Blog
      </button>
    </div>
  );
};

// REST OF CODE...
```

## Module: `useEffect` Hook

This hook runs a function every render of the component. It renders on _load_ and when _state changes_ so `useEffect` runs code on every render mentioned above.

1. Import the hook from React.
2. Above return statement add `useEffect()`. It does not need to be assigned to a variable and does not return anything.
3. Add anonymous function inside `useEffect()` as an **argument**. This is the function that runs on each render.

> [!NOTE]
> Usually inside the `useEffect` hook function we perform authentication or fetch data (side effects).

We can also access state inside `useEffect` (i.e. blogs).

> [!WARNING]
> Be careful not to update state inside the `useEffect` hook because you could end up in a continuous loop. There are ways around this.

### `useEffect` Dependencies

Sometimes you do not want to run the `useEffect` hook every render so we would use a **dependency array**. This is passed into the hook as a _second_ argument. An _empty_ dependency array means that the function will only run _once_ on the first render.

You can also add any state values that trigger a render to the dependency array.

For the following example we will create a new state for `name`, add a button that will change the `name` on click by using `setName`, and add the `name` state variable as the dependency to `useEffect`.

If we delete a blog or any other state change it will not work because it depends on `name`:

```jsx
// file: ./src/Home.js

// OTHER CODE...

const Home = () => {
  // OTHER CODE...

  const [name, setName] = useState("Mario");

  // OTHER CODE...

  useEffect(() => {
    console.log("Use Effect Ran");
    console.log(name);
  }, [name]);

  return (
    <div className="home">
      {/* OTHER CODE... */}
      <button onClick={() => setName("Luigi")}>Change Name</button>
      <p>{name}</p>
      {/* OTHER CODE... */}
    </div>
  );
};

export default Home;
```

## Module: JSON Server

Allows us to utilize a fake **REST API**.

When using JSON Server each top level property is considered a **resource** (i.e. `blogs`). **Endpoints** are created to interact with the **resource** so we can do things like delete items, edit items, add items, get items, etc.

We use the JSON Server package to watch the file (`db.json`) and wrap it in some endpoints. We can either install the package locally or with npx to watch the `db.json` file.

After running: `npx json-server --watch data/db.json --port 8000` to run JSON Server, watch db.json file, and run on port 8000 we will see an endpoint created at `http://localhost:8000/blogs`. If we are to perform a `GET` request now we would use the above endpoint. We will perform a `fetch` request within our component to get the data.

> [!TIP]
> You can demo the `GET` request by pasting the endpoint in the browser to view the `db.json` data.

The endpoints we will be using are as follows:

| Endpoint    | Method | Description         |
| ----------- | ------ | ------------------- |
| /blogs      | GET    | Fetch all blogs     |
| /blogs/{id} | GET    | Fetch a single blog |
| /blogs      | POST   | A a new blog        |
| /blogs/{id} | DELETE | Delete a blog       |

### Data Fetch

Now that we will be fetching data from the `db.json` file we can clear out the manual data within the `blogs` `useState`, set it to `null` for the initial state, and we will be utilizing the `useEffect` hook to **fetch**.

Once we successfully fetch the data we will update the state using the `setBlogs` setter function.

1. Add `fetch()` to `useEffect()`.
2. Add the endpoint inside a string within the fetch parenthesis.
3. The fetch returns a `promise` so we can use a `.then()` which will run a function once the promise is resolved.
4. We get a response (`res`) object (**not** the data) and to get the data we need to return `res.json()` into res anonymous function. The `res.json` passes the data into the res object for us. This also returns a `promise` because it is **asynchronous**.
5. Add another `.then()` which runs a function once the `res.json` completes.
6. Pass in the **parameter** of `data` into the second `.then()`. Logging the data to the console will show an array of two objects which are the blogs in `db.json`.
7. Update the `blogs` state using `setBlogs` setter function. We pass in **data** into `setBlogs()` which is within the second `.then()` block. No _infinite loop_ because of the empty dependency array.
8. Fix _error_ of mapping over blogs at value of `null` in `BlogList.js`. This happens because it takes a bit of time to fetch the data. We _wrap_ the `BlogList` component in a dynamic block and add `blogs &&` before `<BlogList />`. This creates a logical **AND** logic and since `blogs` is **falsy** then we do not output the `<BlogList />`. The right side of `&&` will only output when the left side is true (We will do this a lot with templating).

## Module: Conditional Loading Message

Create an additional piece of state inside `Home.js`.

`const [isLoading, setIsLoading] = useState(true);`.

Now to do another conditional template like we did with `{blogs && <BlogList />}`. This time it will be `{isLoading && <div>Loading...</div>}`.

We only want it to show the loading message when the data is loading. When we receive the data we want to switch `isLoading` to false. This is done inside the `useEffect` hook after `setBlogs(data)`.

`{isLoading && <div>Loading...</div>}`.

> [!TIP]
> You can emulate the loading message either by wrapping the `useEffect` fetch in a `setTimeout` or using the network throttling in Chrome Dev Tools.

## Module: Fetch Errors

Common errors with fetch are **connection** errors or errors fetching **data** from server.

1. Add a `catch()` block to the `useEffect` hook after the last `.then()`. The `catch()` block catches any **network** error (Cannot connect to server) and fires a function.
2. If request is denied or endpoint does not exist then we would check the `ok` property of the `res` object in an if statement in the first `.then()`. If it is **not** `ok` then we `throw` and `Error` with a message for the error.
3. Store the **error** in some kind of state by setting `error` and `setError` for `useState`. Initial value for state is `null`.
4. Add `setError(err.message)` to the catch block instead of console.
5. We can now do _conditional rendering_ in the template to output the error message. Now only if we have a value for state variable `error` will we output it.
6. Also add `isLoading(false)` in the catch block since it is not actually loading when there is an error.
7. If we end up successfully fetching data in the future we want to _remove_ the error message so we will add `setError(null)` to the second `.then()` block.

When we `throw` an error then it is caught by the `catch()` block and the `.message` is logged to the console.

## Module: Create a Custom Hook

With the `useEffect` hook in `Home.js` we are updating _state_ for blogs, _loading_ message, and _error_. You can prevent having to write all of this code over again by creating a **custom hook**. This is done by externalizing the login into its own JS file to be imported into other components if needed.

1. Create a new file in the `src` dir called `useFetch.js`.
2. Create a function to put all of the `useEffect` and `useState` code in from `Home.js`. This is the **hook**. Custom hooks need to start with the word **use**. In this case, `useFetch`.
3. Copy `useEffect` code and `useState` code from `Home.js` and paste inside `useFetch`. Make sure to _import_ `useEffect` and `useState` from React as well as _export_ default `useFetch`.
4. Change `[blogs, setBlogs]` to `[data, setData]` in `useFetch.js` because in another component it might not be blogs as the data we are fetching. Don't forget to change it inside the `useEffect` hook as well.
5. _Return_ some values as the bottom of the `useEffect` hook. We will return an _object_ (i.e. It can be an array or boolean). Inside the object we will add three props (_data_, _isLoading_, and _error_). We do this because we want to grab those _three_ properties from the hook.
6. Next, we will pass the **endpoint** into the `useFetch` function as an _argument_ (`url`) versus hardcoding it as part of the _fetch block_. This is because it might not always be the same endpoint in another component we are using the `useFetch` in. Make sure to add url to the fetch parenthesis as well.
7. Pass in the url as the **dependency array** for `useEffect` (`useEffect(() => {...}), [url]`) so that whenever the URL changes it will re-run the function to get the data for the new endpoint.
8. Import the `useFetch` function inside the `Home.js` component. We do this by **destructuring** the three props from the `useFetch` function (_data_, _isLoading_, and _error_). If we used an **array** for the returned props in `useFetch.js` then the order would be required when importing into `Home.js` (Therefore an object is more ideal). `const {data, isLoading, error} = useFetch("http://localhost:8000/blogs");`.

> [!TIP]
> Now that the prop for blogs has been changed to data you can either change the blogs value in the conditional statement in `Home.js` to `{blogs && <BlogList blogs={data} />}` or change the value of data to blogs in the destructuring of the `useFetch` using a colon `const {data: blogs} = useFetch("http://localhost:8000/blogs");`.

## Module: The React Router

### Regular Multi-page Website

- A regular multi page website sends a request to the server when you type in its URL.
- Server sends back an HTML page which we view.
- When a user clicks a link to another page on the site it sends a new request to the server.
- Server responds again by sending back the HTML page.
- Repeat each time a page is clicked on. **Constant** requests for pages from the server.

### React Multi-page Website

- React delegates all page changes and routing to the browser only.
- Starts the same way with initial request to the server.
- Server responds and renders HTML page to browser, _BUT_ it also sends back the compiled/bundled React JS files which control the application.
- Now React takes full control of the app. Initially the page is empty and then React **injects** content dynamically using the created components.
- If a user then clicks on a page in the navigation **React Router** intercepts this, prevents new server request, and then looks at the request and inject the required content/component(s) on screen.

### Create Routes in React

1. Install React Router `pnpm install react-router-dom`.
2. Import `BrowserRouter as Router`, `Route`, and `Switch` components from **React Router** in the `App.js` file.
3. Surround entire app with the Router component. This gives the entire app access to the router as well as all child components.
4. We want the page content to go inside `<div className="content">...</div>` when we go to different pages. So we will replace the `Home` component in `App.js` with the `Switch` component. The switch component makes it so that only **one** route shows at a time.
5. We place each route inside the switch statement. Currently only have one route (Homepage). We add the `Route` component and the `path` attribute to this component (i.e. For the homepage the path would be `/`).
6. Nest the component inside the route that we want to be injected when a user visits the route (i.e. `Home` component).

> [!NOTE]
> When user visits `/` we want to render the `Home` component. Also, the `Navbar` component is always going to show because it is **outside** the `Switch` statement. It will show on every route.

## Module: `useEffect` Cleanup

If there were two routes and one was fetching data while we switch to a new one we would get an error in the console: '_Warning: Can't perform a React state update on an unmounted component_'. This is because the data fetching did not complete and now the component that was performing the fetch is no longer displayed in the browser (The unmounted component is the one trying to fetch the data).

We want to stop the fetch once we navigate to a new route/component. This is done with both the **cleanup** function in `useEffect` hook and the **abort controller**.

1. Go to the `useFetch.js` and add a `return` function at the bottom of the `useEffect` hook.
2. At the top of the `useEffect` hook we will add the abort controller. `const abortCont = new AbortController();`. We will associate the abort controller with a fetch request so that we can use it to stop the fetch.
3. Add a second argument to fetch as signal and set signal to the abort controller. `fetch(url, { signal: abortCont.signal })`.
4. Now we remove the console log from the cleanup function and add the `constant.abort()` method.

When we abort a fetch it still throws an error which is caught in the catch block and we update the state. We are not updating the data anymore because the fetch has been stopped, but we are still updating the state. This means we are still trying to update the home component with that state.

1. Update the catch block to recognize the abort and not update the state. `if (err.name === "AbortError") {console.log("Fetch Aborted");}`.
2. Add the `setIsLoading` and `setError` to an else statement in the same if statement.

## Module: Route Parameters

Sometimes we use _dynamic_ values as part of a route. The dynamic part of a route is the **route parameter** (Like a variable inside a route).

We can _access_ route parameters inside our React app and components.

1. Create a `BlogDetails.js` inside the `src` dir.
2. Add a new `Route` on `App.js` and the syntax for a route param is **:param-name** (i.e. `<Route path="/blogs/:id" element={<BlogDetails />} />`). Make sure you add the `BlogDetails` component to the `Route`.

Now if you navigate to `/blogs/anything-here(id)` you will see the blog details component no matter what you put in after `/blogs/`.

We want to be able to fetch the `id` inside the blog details component. We will use a hook (`useParams`) from react router to do this.

1. Import `useParams` from `react-router-dom` inside the blog details component.
2. Add a new constant to the top of the component and set it equal to `useParams()`.
3. **Destructure** whatever params you want (We names our param `id` in the `Route` in the `App.js` file).
4. Now you can add the dynamic `id` to the template by adding `id` inside curly braces.

Now that we have access to the param `id` we can fetch data from that blog using said `id`.

1. Now we will add links to the blog details component from the blogs listed on the Homepage.
2. We have access to each blog inside the `map` function in the `BlogList.js`. Also, each blog in `/data/db.json` has a corresponding `id` property. So we can wrap the `h2` and `p` elements in `BlogList.js` inside a **link** using the `id` prop.
3. To the `Link` to value we will set it equal to curly braces and template literals because some of the value will be dynamic. Set it equal to `/blogs/` and variable containing blog from `map` and `.id` for each blog's `id` prop. ` <Link to={``/blogs/${blog.id``}></Link> `.

## Module: Reuse Custom Hook

We will reuse the custom hook `useFetch` in the `BlogDetails` component to **fetch** data based on the id of the blog.

Take note that the `useFetch` component returns _data_, _isLoading_, and _error_.

We will use the hook (`useFetch`) in the blog details component and pass in the URL of the endpoint we want to fetch data from.

1. Import `useFetch` into `BlogDetails.js`.
2. Add constant, destructure the three returned data from `useFetch` (_data_, _isLoading_, etc.), and set it equal to `useFetch('https://localhost:8000/blogs/' + id);`.
3. Add a **loading** `div` to the template using a conditional and `isLoading`.
4. Do the same as above for an **error** `div`.
5. We want to have some template for the blog itself once we have blog details or a value for the blog (This starts as `null` in `useFetch`).
6. Build up the blog template using a conditional like loading and error and add elements inside parenthesis (i.e. article, with blog title, author and body).

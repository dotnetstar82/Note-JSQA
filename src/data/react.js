export const react = [
    {
        title: "How does React work?",
        type: 1,
        content: `React creates a virtual DOM.\nWhen state changes in a component it firstly runs a "diffing" algorithm, which identifies what has changed in the virtual DOM.
            The second step is reconciliation, where it updates the DOM with the results of diff.`
    },
    {
        title: "What is React?",
        type: 1,
        content: `React is an open-source JavaScript library created by Facebook for building complex, interactive UIs in web and mobile applications. React’s core purpose is to build UI components; it is often referred to as just the “V” (View) in an “MVC” architecture.`
    },
    {
        title: "Difference between class components and functional components?",
        type: 1,
        content: `<Class Components>:
        Class-based Components uses ES6 class syntax. It can make use of the lifecycle methods.
        Class components extend from React.Component.
        In here I have to use this keyword to access the props and functions that I declare inside the class components.
        <Functional Components>: 
        Functional Components are simpler comparing to class-based functions.
        Functional Components mainly focuses on the UI of the application, not on the behavior.
        To be more precise these are basically render function in the class component.
        Functional Components can have state and mimic lifecycle events using Reach Hooks`
    },
    {
        title: "What is Context API in ReactJS?",
        type: 1,
        content: `Context provides a way to pass data through the component tree without having to pass props down manually at every level. Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language. Using context, I can avoid passing props through intermediate elements.`
    },
    {
        title: "What are props in React?",
        type: 1,
        content: `Props are inputs to a React component. They are single values or objects containing a set of values that are passed to React Components on creation using a naming convention similar to HTML-tag attributes. i.e, They are data passed down from a parent component to a child component.

        The primary purpose of props in React is to provide following component functionality:
        Pass custom data to my React component.
        Trigger state changes.
        Use via this.props.reactProp inside component's render() method.
        This reactProp (or whatever I came up with) name then becomes a property attached to React's native props object which originally already exists on all components created using React library.`
    },
    {
        title: "What is the use of refs?  ",
        type: 1,
        content: `Refs provide a way to access DOM nodes or React elements created in the render method. They should be avoided in most cases, however, they can be useful when I need direct access to DOM element or an instance of a component.
        There are a few good use cases for refs:
        -Managing focus, text selection, or media playback.
        -Triggering imperative animations.
        -Integrating with third-party DOM libraries.
        Refs are created using React.createRef() and attached to React elements via the ref attribute. Refs are commonly assigned to an instance property when a component is constructed so they can be referenced throughout the component.`
    },
    {
        title: "What are the advantages of ReactJS?",
        type: 1,
        content: `
        1. Increases the application’s performance with Virtual DOM
        2. JSX makes code is easy to read and write
        3. It renders both on client and server side
        4. Easy to integrate with other frameworks (Angular, BackboneJS) since it is only a view library
        5. Easy to write UI Test cases and integration with tools such as JEST.`
    },
    {
        title: "What are React Hooks?",
        type: 1,
        content: `Hooks are a new addition in React 16.8. They let I use state and other React features without writing a class. With Hooks, I can extract stateful logic from a component so it can be tested independently and reused. Hooks allow I to reuse stateful logic without changing my component hierarchy. This makes it easy to share Hooks among many components or with the community.`
    },
    {
        title: "How would you write an inline style in React?",
        type: 1,
        content: `<div style={{ height: 10 }}>`
    },
    {
        title: "What are the major features of ReactJS?",
        type: 1,
        content: `The major features of ReactJS are as follows,
        -It uses VirtualDOM instead RealDOM considering that RealDOM manipulations are expensive.
        -Supports server-side rendering
        -Follows Unidirectional data flow or data binding
        -Uses reusable/composable UI components to develop the view`
    },
    {
        title: "What are the advantages of using React?",
        type: 1,
        content: `-It is easy to know how a component is rendered, I just need to look at the render function.
        -JSX makes it easy to read the code of my components. It is also really easy to see the layout, or how -components are plugged/combined with each other.
        -I can render React on the server-side. This enables improves SEO and performance.
        -It is easy to test.
        -I can use React with any framework (Backbone.js, Angular.js) as it is only a view layer.`
    },
    {
        title: "What is the difference between state and props?",
        type: 1,
        content: `-The state is a data structure that starts with a default value when a Component mounts. It may be mutated across time, mostly as a result of user events.
        -Props (short for properties) are a Component's configuration. They are received from above and immutable as far as the Component receiving them is concerned. A Component cannot change its props, but it is responsible for putting together the props of its child Components. Props do not have to just be data - callback functions may be passed in as props.`
    },
    {
        title: "What is the difference between a Presentational component and a Container component?",
        type: 1,
        content: `-Presentational components are concerned with how things look. They generally receive data and callbacks exclusively via props. These components rarely have their own state, but when they do it generally concerns UI state, as opposed to data state.
        -Container components are more concerned with how things work. These components provide the data and behavior to presentational or other container components. They call Flux actions and provide these as callbacks to the presentational components. They are also often stateful as they serve as data sources.`
    },
    {
        title: "What are refs used for in React?",
        type: 1,
        content: `Refs are an escape hatch which allow I to get direct access to a DOM element or an instance of a component. In order to use them I add a ref attribute to my component whose value is a callback function which will receive the underlying DOM element or the mounted instance of the component as its first argument.
        It’s often misconstrued that I need to use a class component in order to use refs, but refs can also be used with functional components by leveraging closures in JavaScript.`
    },
    {
        title: "What's the difference between a Controlled component and an Uncontrolled one in React?",
        type: 1,
        content: `-A Controlled Component is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component. I could also call this a "dumb component".
        -A Uncontrolled Component is one that stores its own state internally, and I query the DOM using a ref to find its current value when I need it. This is a bit more like traditional HTML.
        Most native React form components support both controlled and uncontrolled usage.
        In most (or all) cases I should use controlled components.`
    },
    {
        title: "What are Controlled components in ReactJS?",
        type: 1,
        content: `A Controlled Component is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component. I could also call this a "dumb component".`
    },
    {
        title: "What is state in React?",
        type: 1,
        content: `State of a component is an object that holds some information that may change over the lifetime of the component. I should always try to make our state as simple as possible and minimize the number of stateful components.`
    },
    {
        title: "What does it mean for a component to be mounted in React?",
        type: 1,
        content: `It has a corresponding element created in the DOM and is connected to that.`
    },
    {
        title: "What are Fragments in React?",
        type: 1,
        content: `It's common pattern in React which is used for a component to return multiple elements. Fragments let I group a list of children without adding extra nodes to the DOM. shorter syntax: <></>`
    },
    {
        title: "When rendering a list what is a key and what is it's purpose?",
        type: 1,
        content: `Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity. The best way to pick a key is to use a string that uniquely identifies a list item among its siblings.
        Most often I would use IDs from my data as keys. When I don't have stable IDs for rendered items, I may use the item index as a key as a last resort. It is not recommend to use indexes for keys if the items can reorder, as that would be slow.`
    },
    {
        title: "How to create refs in React?",
        type: 1,
        content: `Refs are created using React.createRef() method and attached to React elements via the ref attribute. In order to use refs throughout the component, just assign the ref to the instance property with in constructor.I can also use it in functional components with the help of closures. And can use useRef from the hook functions.`
    },
    {
        title: "What is useState() in React?",
        type: 1,
        content: `useState is one of build-in react hooks. useState(0) returns a tuple where the first parameter count is the current state of the counter and setCounter is the method that will allow us to update the counter's state.
        I can use the setCounter method to update the state of count anywhere - In this case I are using it inside of the setCount function where I can do more things; the idea with hooks is that I are able to keep our code more functional and avoid class based components if not desired/needed.`
    },
    {
        title: "What are Stateful components in React?",
        type: 1,
        content: `If the behaviour of a component is dependent on the state of the component then it can be termed as stateful component. These Stateful components are always class components and have a state that gets initialized in the constructor.`
    },
    {
        title: "What is JSX?",
        type: 1,
        content: `JSX is a syntax notation for JavaScript XML (XML-like syntax extension to ECMAScript). It stands for JavaScript XML. It provides expressiveness of JavaScript along with HTML like template syntax. For example, in React, I can write html like code and it returns as javascript function to the render function.`
    },
    {
        title: "What are the limitations of React?",
        type: 1,
        content: `1.React is just a view library, not a full-blown framework
        2.There is a learning curve for beginners who are new to web development.
        3.Integrating React.js into a traditional MVC framework requires some additional configuration
        4.The code complexity increases with inline templating and JSX.
        5.Too many smaller components leading to over-engineering or boilerplate`
    },
    {
        title: "What are Stateless components in React?",
        type: 1,
        content: `If the behaviour is independent of its state then it can be a stateless component. I can use either a function or a class for creating stateless components. But unless I need to use a lifecycle hook in my components, I should go for stateless functional components.
        There are a lot of benefits if I decide to use stateless functional components here; they are easy to write, understand, and test, and I can avoid the THIS keyword altogether.`
    },
    {
        title: "How is React different from AngularJS (1.x)?",
        type: 1,
        content: `For example, AngularJS (1.x) approaches building an application by extending HTML markup and injecting various constructs (e.g. Directives, Controllers, Services) at runtime. As a result, AngularJS is very opinionated about the greater architecture of my application — these abstractions are certainly useful in some cases, but they come at the cost of flexibility.
        By contrast, React focuses exclusively on the creation of components, and has few (if any) opinions about an application’s architecture. This allows a developer an incredible amount of flexibility in choosing the architecture they deem “best” — though it also places the responsibility of choosing (or building) those parts on the developer.`
    },
    {
        title: "What is the difference between state and props?",
        type: 1,
        content: `Both props and state are plain JavaScript objects. While both of them hold information that influences the output of render, they are different in their functionality with respect to component. i.e,
        - Props get passed to the component similar to function parameters
        - State is managed within the component similar to variables declared within a function.`
    },
    {
        title: "What are two types of components in ReactJS?",
        type: 1,
        content: `There are two possible ways to create ReactJS Components.
        1. Functional components: This is the simplest way to create ReactJS components. It accepts props as an Object and returns ReactJS elements. I call it as “functional” because those are pure JavaScript functions.
        2. Class components: I can also use Es6 class to define component. It extends from React.Component`
    },
    {
        title: "What is the purpose of callback function as an argument of setState?",
        type: 1,
        content: `The callback function is invoked when setState finished and the component gets rendered. Since setState is asynchronous, the callback function is used for any post action. But it'd better use lifecycle method rather this callback function.`
    },
    {
        title: "What are portals in React and when do I need them?",
        type: 1,
        content: `Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
        Sometimes it’s useful to insert a child into a different location in the DOM:
        A typical use case for portals is when a parent component has an overflow: hidden or z-index style, but I need the child to visually “break out” of its container.`
    },
    {
        title: "What are advantages of using React Hooks?",
        type: 1,
        content: `Primarily, hooks in general enable the extraction and reuse of stateful logic that is common across multiple components without the burden of higher order components or render props. Hooks allow to easily manipulate the state of our functional component without needing to convert them into class components.
        Hooks don’t work inside classes (because they let I use React without classes). By using them, I can totally avoid using lifecycle methods, such as componentDidMount, componentDidUpdate, componentWillUnmount. Instead, I will use built-in hooks like useEffect .
        `
    },
    {
        title: "What happens during the lifecycle of a React component?",
        type: 1,
        content: `At the highest level, React components have lifecycle events that fall into three general categories:
        1. Initialization
        2. State/Property Updates
        3. Destruction`
    },
    {
        title: "What is the difference between Component and Container in Redux?",
        type: 1,
        content: `- Component is part of the React API. A Component is a class or function that describes part of a React UI.
        - Container is an informal term for a React component that is connected to a redux store. Containers receive Redux state updates and dispatch actions, and they usually don't render DOM elements; they delegate rendering to presentational child components.`
    },
    {
        title: "What are inline conditional expressions in ReactJS?",
        type: 1,
        content: `I can use either if statements or ternary expressions which are available from JS to conditionally render expressions. Apart from these approaches, I can also embed any expressions in JSX by wrapping them in curly braces and then followed by JS logical operator(&&).`
    },
    {
        title: "What is Reconciliation in ReactJS?",
        type: 1,
        content: `When a component’s props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM. This process is called reconciliation.`
    },
    {
        title: "What is the purpose of using super constructor with props argument in React?",
        type: 1,
        content: `A child class constructor cannot make use of this reference until super() method has been called. The same applies for ES6 sub-classes as well. The main reason of passing props parameter to super() call is to access this.props in my child constructors.`
    },
    {
        title: "What happens when you call setState?",
        type: 1,
        content: `The first thing React will do when setState is called is merge the object I passed into setState into the current state of the component. This will kick off a process called reconciliation. The end goal of reconciliation is to, in the most efficient way possible, update the UI based on this new state.
        To do this, React will construct a new tree of React elements (which I can think of as an object representation of my UI). Once it has this tree, in order to figure out how the UI should change in response to the new state, React will diff this new tree against the previous element tree.
        By doing this, React will then know the exact changes which occurred, and by knowing exactly what changes occurred, will able to minimize its footprint on the UI by only making updates where absolutely necessary.`
    },
    {
        title: "What is the difference between Element and Component in ReactJS?",
        type: 1,
        content: `An element is a plain object describing what I want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other elements in their props. Creating a React element is cheap. Once an element is created, it is never mutated.
        Whereas a component can be declared in several different ways. It can be a class with a render() method. Alternatively, in simple cases, it can be defined as a function. In either case, it takes props as an input, and returns an element tree as the output. JSX transpiled as createElement at the end.`
    },
    {
        title: "What are Higher-Order Components (HOC) in React?",
        type: 1,
        content: `A higher-order component (HOC) is a function that takes a component and returns a new component. Basically, it’s a pattern that is derived from React’s compositional nature I call them as “pure’ components” because they can accept any dynamically provided child component but they won’t modify or copy any behavior from their input components.
        1. Code reuse, logic and bootstrap abstraction
        2. Render High jacking
        3. State abstraction and manipulation
        4. Props manipulation`
    },
    {
        title: "How to call loading function with React useEffect only once?",
        type: 1,
        content: `If I only want to run the function given to useEffect after the initial render, I can give it an empty array [] as the second argument.`
    },
    {
        title: "How to access DOM elements in React?",
        type: 1,
        content: `One of the useful application of the useRef() hook is to access DOM elements. This is performed in 3 steps:
        1. Define the reference to access the element const elementRef = useRef();
        2. Assign the reference to ref attribute of the element: <div ref={elementRef}></div>;
        3. After mounting, elementRef.current points to the DOM element.`
    },
    {
        title: "Name the different lifecycle methods for a class components",
        type: 1,
        content: `- componentWillMount- this is most commonly used for App configuration in my root component.
        - componentDidMount - here I want to do all the setup I couldn’t do without a DOM, and start getting all the data I need. Also if I want to set up eventListeners etc. this lifecycle hook is a good place to do that.
        - componentWillReceiveProps - this lifecyclye acts on particular prop changes to trigger state transitions.
        shouldComponentUpdate - if you’re worried about wasted renders shouldComponentUpdate is a great place to improve performance as it allows I to prevent a rerender if component receives new prop.
        - shouldComponentUpdate should always return a boolean and based on what this is will determine if the component is rerendered or not.
        - componentWillUpdate - rarely used. It can be used instead of componentWillReceiveProps on a component that also has shouldComponentUpdate (but no access to previous props).
        - componentDidUpdate - also commonly used to update the DOM in response to prop or state changes.
        - componentWillUnmount - here I can cancel any outgoing network requests, or remove all event listeners associated with the component.`
    },
    {
        title: "What is {this.props.children} and when you should use it?",
        type: 1,
        content: `I can use props.children on components that represent 'generic boxes' and that don’t know their children ahead of time. It is used to display whatever I include between the opening and closing tags when invoking a component.`
    },
    {
        title: "How would you prevent a component from rendering in React?",
        type: 1,
        content: `Returning null from a component's render method does not affect the firing of the component's lifecycle methods.`
    },
    {
        title: "What's the typical pattern for rendering a list of components from an array in React?",
        type: 1,
        content: `Call map on an array with an arrow function that executes for each array element, possibly outputting a React component for each.`
    },
    {
        title: "What are Pure Components?",
        type: 1,
        content: `PureComponent is exactly the same as Component except that it handles the shouldComponentUpdate method for you.
        When props or state changes, PureComponent will do a shallow comparison on both props and state. Component, on the other hand, won’t compare current props and state to next out of the box. Thus, the component will re-render by default whenever shouldComponentUpdate is called.`
    },
    {
        title: "What's the typical flow of data like in a React + Redux app?",
        type: 1,
        content: `Callback from UI component dispatches an action with a payload, which then is intercepted in a reducer, possibly producing a new application state, which is then propagated down through the tree of components in the application from the Redux store.`
    },
    {
        title: "What are some limitations of things you shouldn't do in the component's render method in React?",
        type: 1,
        content: `I cannot modify the component's state (with setState), nor interact with the browser (do that in componentDidMount). Render should be a pure function.`
    },
    {
        title: "How to bind methods or event handlers in JSX callbacks?",
        type: 1,
        content: `There are 3 possible ways to achieve,
        1. Binding in Constructor: In JavaScript classes, the methods are not bound by default. The same thing applies for ReactJS event handlers defined as class methods. Normally I bind them in constructor as follows,
        2. Public class fields syntax: If I don’t like to use bind approach then public class fields syntax can be used to correctly bind callbacks,
        3. Arrow functions in callbacks: I can use arrow functions directly in the callbacks as below`
    },
    {
        title: "What is prop drilling and how can you avoid it?",
        type: 1,
        content: `When building a React application, there is often the need for a deeply nested component to use data provided by another component that is much higher in the hierarchy. The simplest approach is to simply pass a prop from each component to the next in the hierarchy from the source component to the deeply nested component. This is called prop drilling.
        The primary disadvantage of prop drilling is that components that should not otherwise be aware of the data become unnecessarily complicated and are harder to maintain.
        To avoid prop drilling, a common approach is to use React context. This allows a Provider component that supplies data to be defined, and allows nested components to consume context data via either a Consumer component or a useContext hook.`
    },
    {
        title: "What is the point of shouldComponentUpdate() method?",
        type: 1,
        content: `It's used for performance reasons, for example if the implementor of a component knows for sure that a particular property change does not necessitate a re-render, they could return false from this method and skip the re-render.`
    },
    {
        title: "What are forward refs?",
        type: 1,
        content: `Ref forwarding is a feature that lets some components take a ref they receive, and pass it further down to a child.`
    },
    {
        title: "What do these three dots (...) in React do? Spread notation",
        type: 1,
        content: `It was added in ES2018 (spread for arrays/iterables was earlier, ES2015). Spread notation is handy not only for that use case, but for creating a new object with most (or all) of the properties of an existing object — which comes up a lot when you're updating state, since I can't modify state directly:`
    },
    {
        title: "What are the different phases of ReactJS component lifecycle?",
        type: 1,
        content: `There are four different phases of React component’s lifecycle:
        1. : In this phase react component prepares setting up the initial state and default props.
        2. Mounting: The react component is ready to mount in the browser DOM. This phase covers componentWillMount and componentDidMount lifecycle methods.
        3. Updating: In this phase, the component get updated in two ways, sending the new props and updating the state. This phase covers shouldComponentUpdate, componentWillUpdate and componentDidUpdate lifecycle methods.
        4. Unmounting: In this last phase, the component is not needed and get unmounted from the browser DOM. This phase include componentWillUnmount lifecycle method.`
    },
    {
        title: "What is Key and benefit of using it in lists?",
        type: 1,
        content: `A key is a special string attribute I need to include when creating lists of elements. Keys help React identify which items have changed, are added, or are removed. When I don’t have stable IDs for rendered items, I may use the item index as a key as a last resort:
        I don’t recommend using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state
        If I extract list item as separate component then apply keys on list component instead li tag.
        There will be a warning in the console if the key is not present on list items.`
    },
    {
        title: "What's the difference between an Element and a Component in React?",
        type: 1,
        content: `- Elements are the fundamental building blocks of React, and describe what I want to see on the screen. They are just simple JS objects with props, key, ref, and type properties, whereas
        - Components have a render method and optionally accept inputs.`
    },
    {
        title: "What is the difference between ShadowDOM and VirtualDOM?",
        type: 1,
        content: `- Virtual DOM,

        Virtual DOM is about avoiding unnecessary changes to the DOM, which are expensive performance-wise, because changes to the DOM usually cause re-rendering of the page. Virtual DOM also allows to collect several changes to be applied at once, so not every single change causes a re-render, but instead re-rendering only happens once after a set of changes was applied to the DOM.
        - Shadow DOM,
        
        Shadow dom is mostly about encapsulation of the implementation. A single custom element can implement more-or-less complex logic combined with more-or-less complex DOM. An entire web application of arbitrary complexity can be added to a page by an import and <body><my-app></my-app> but also simpler reusable and composable components can be implemented as custom elements where the internal representation is hidden in the shadow DOM like <date-picker></date-picker>.`
    },
    {
        title: "Why do class methods need to be bound to a class instance?",
        type: 1,
        content: `In JavaScript, the value of this changes depending on the current context. Within React class component methods, developers normally expect this to refer to the current instance of a component, so it is necessary to bind these methods to the instance. Normally this is done in the constructor.`
    },
    {
        title: "What are Stateless components in React?",
        type: 1,
        content: `Stateless components (a flavor of “reusable” components) are nothing more than pure functions that render DOM based solely on the properties provided to them.
        This component has no need for any internal state — let alone a constructor or lifecycle handlers. The output of the component is purely a function of the properties provided to it.`
    },
    {
        title: "What is children prop?",
        type: 1,
        content: `Children is a prop (this.prop.children) that allow I to pass components as data to other components, just like any other prop I use.
        There are a number of methods available in the React API to work with this prop. These include:
        - React.Children.map,
        - React.Children.forEach,
        - React.Children.count,
        - React.Children.only,
        - React.Children.toArray.`
    },
    {
        title: "Why React uses className over class attribute?",
        type: 1,
        content: `class is a keyword in javascript and JSX is an extension of javascript. That's the principal reason why React uses className instead of class.`
    },
    {
        title: "What does shouldComponentUpdate do and why is it important?",
        type: 1,
        content: `What shouldComponentUpdate does is it’s a lifecycle method that allows us to opt out of setState reconciliation process for certain components (and their child components). If we know that a certain section of our UI isn’t going to change, there’s no reason to have React go through the trouble of trying to figure out if it should. By returning false from shouldComponentUpdate, React will assume that the current component, and all its child components, will stay the same as they currently are.`
    },
    {
        title: "What is Lifting State Up in ReactJS?",
        type: 1,
        content: `When several components need to share the same changing data then it is recommended to lifting the shared state up to their closest common ancestor. For example, if two child components sharing the same data from its parent then move the state to parent instead of maintaining the local state inn both child components.`
    },
    {
        title: "Why we should not update state directly?",
        type: 1,
        content: `If I try to update state directly then it won’t re-render the component. Instead use setState() method. It schedules an update to a component’s state object. When state changes, the component responds by re-rendering. The only place I can assign the state is constructor.`
    },
    {
        title: "What's the difference between useRef and createRef?",
        type: 1,
        content: `The difference is:
        - createRef will always create a new ref. In a class-based component, I would typically put the ref in an instance property during construction (e.g. this.input = createRef()). I don't have this option in a function component.
        - useRef takes care of returning the same ref each time as on the initial rendering.
        `
    },
    {
        title: "What is StrictMode in React?",
        type: 1,
        content: `React's StrictMode is sort of a helper component that will help I write better react components, I can wrap a set of components with <StrictMode /> and it'll basically:
        - Verify that the components inside are following some of the recommended practices and warn I if not in the console.
        - Verify the deprecated methods are not being used, and if they're used strict mode will warn I in the console.
        - Help I prevent some side effects by identifying potential risks.`
    },
    {
        title: "What is the difference between createElement and cloneElement?",
        type: 1,
        content: `- createElement is what JSX gets transpiled to and is what React uses to create React Elements (object representations of some UI).
        - cloneElement is used in order to clone an element and pass it new props. They nailed the naming on these two.`
    },
    {
        title: "What is the significance of keys in ReactJS?",
        type: 1,
        content: `Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity. When React reconciles the keyed children, it will ensure that any child with key will be reordered (instead of clobbered) or destroyed (instead of reused).`
    },
    {
        title: "What would be the common mistake of function being called every time the component renders?",
        type: 1,
        content: `I need to make sure that function is not being called while passing the function as a parameter. Instead, pass the function itself without parenthesis:`
    },
    {
        title: "Are you familiar with Flux in the context of React?",
        type: 1,
        content: `Flux is an architectural pattern that enforces unidirectional data flow — its core purpose is to control derived data so that multiple components can interact with that data without risking pollution.
        The Flux pattern is generic; it’s not specific to React applications, nor is it required to build a React app. However, Flux is commonly used by React developers because React components are declarative — the rendered UI (View) is simply a function of state (Store data).
        In the Flux pattern, the Store is the central authority for all data; any mutations to the data must occur within the store. Changes to the Store data are subsequently broadcast to subscribing Views via events. Views then update themselves based on the new state of received data.
        To request changes to any Store data, Actions may be fired. These Actions are controlled by a central Dispatcher; Actions may not occur simultaneously, ensuring that a Store only mutates data once per Action.
        The strict unidirectional flow of this Flux pattern enforces data stability, reducing data-related runtime errors throughout an application.`
    },
    {
        title: "What is the difference between HTML and React event handling?",
        type: 1,
        content: `1. In HTML, the event name should be in lowercase. Whereas in ReactJS it follows camelCase convention,
        2. In HTML, I can return false to prevent default behavior,
        3. Whereas in ReactJS I must call preventDefault explicitly,`
    },
    {
        title: "What are Error Boundaries in ReactJS?",
        type: 1,
        content: `Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. A class component becomes an error boundary if it defines a new lifecycle method called componentDidCatch(error, info). After that use it as a regular component.`
    },
    {
        title: "What are Uncontrolled components?",
        type: 1,
        content: `The Uncontrolled Component are the one that stores its own state internally, and I query the DOM using a ref to find its current value when I need it. This is a bit more like traditional HTML For example, in the below UserProfile component, the name input accessed using ref as below, In most cases, it is recommend using controlled components to implement forms.`
    },
    {
        title: "What's wrong with using Context in React?",
        type: 1,
        content: `- Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.
        - If I only want to avoid passing some props through many levels, component composition is often a simpler solution than context.
        It might feel redundant to pass down the user and avatarSize props through many levels if in the end only the Avatar component really needs it. It’s also annoying that whenever the Avatar component needs more props from the top, I have to add them at all the intermediate levels too.`
    },
    {
        title: "What is Components Composition in React?",
        type: 1,
        content: `Sometimes we think about components as being “special cases” of other components. For example, we might say that a WelcomeDialog is a special case of Dialog.
        In React, this is also achieved by components composition, where a more “specific” component renders a more “generic” one and configures it with props:`
    },
    {
        title: "What does Batching mean in ReactJS?",
        type: 1,
        content: `Batching is nothing but grouping React multiple state updates together into a single render state to achieve better computational performance. Until React 18, we only batched updates during the React event handlers. Updates inside of promises, setTimeout, native event handlers, or any other event were not batched in React by default.`
    },
    {
        title: "What are the advantages of Batching in ReactJS?",
        type: 1,
        content: `- Batching is great for performance because it avoids unnecessary re-renders.
        - Batching also prevents my component from rendering half-finished states where only one state variable was updated, which may cause bugs.
        - Another reason to use batching is when the web application grows, the number of nested components will increase. Therefore, if a parent component executes an unbatched state updated, the entire component tree will be re-rendered per state update that is expensive.`
    },
    {
        title: "Which lifecycle methods of class component is replaced by useEffect in functional component?",
        type: 1,
        content: `The lifecyce methods replaced by useEffect Hooks of functional component are componentDidMount(), componentDidUpdate(), and componentWillUnmount().

        - componentDidMount: is equivalent for running an effect once.
        - componentDidUpdate: is equivalent for running effects when things change.
        - componentWillUnmount: To run a hook as the component is about to unmount, we just have to return a function from the useEffect Hook`
    },
    {
        title: "Compare useState and useReducer implementations",
        type: 1,
        content: `- useState updates state with setState, while useReducer with dispatch function.
        - useState passes down all the setState custom helper functions, while useReducer passes down just the dispatch - function.
        - useState needs to wrap functions in useCallback(if we want to memorize them), while dispatch function is - already memorized.
        - useState easier to write, useReducer is harder to implement and needs more logic to be coded.`
    },
    {
        title: "Do React Hooks cover all use cases for class components?",
        type: 1,
        content: `No, The following methods have not been introduced in Hooks yet:
        - getSnapshotBeforeUpdate
        - getDerivedStateFromError
        - componentDidCatch`
    },
    {
        title: "How can I make use of Error Boundaries in functional React components?",
        type: 1,
        content: `As of v16.2.0, there's no way to turn a functional component into an error boundary. The componentDidCatch() method works like a JavaScript catch {} block, but for components. Only class components can be error boundaries. In practice, most of the time you’ll want to declare an error boundary component once and use it throughout my application.

        Also bear in mind that try/catch blocks won't work on all cases. If a component deep in the hierarchy tries to update and fails, the try/catch block in one of the parents won't work -- because it isn't necessarily updating together with the child.
        A few third party packages on npm implement error boundary hooks.`
    },
    {
        title: "When would you use useRef?",
        type: 1,
        content: `- To store a ref to DOM elements so I can later do something with them: useRef(null)
        - To store values without triggering re-renders: useRef()`
    },
    {
        title: "How would you pass data from child to parent component in React?",
        type: 1,
        content: `Often, several components need to reflect the same changing data. In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called lifting state up.
        A common technique for these situations is to lift the state up to the first common ancestor of all the components that need to use the state (i.e. the PageComponent in this case) and pass down the state and state-altering functions to the child components as props.`
    },
    {
        title: "What is the purpose of super(props)?",
        type: 1,
        content: `When I pass props to super, the props get assigned to this. Passing or not passing props to super has no effect on later uses of this.props outside constructor. That is render, shouldComponentUpdate, or event handlers always have access to it.`
    },
    {
        title: "Explain the Virtual DOM concept in React",
        type: 1,
        content: `In React, each of my components have a state. This state is like an observable I might find in knockout or other MVVM style libraries. Essentially, React knows when to re-render the scene because it is able to observe when this data changes.
        Dirty checking is slower than observables because I must poll the data at a regular interval and check all of the values in the data structure recursively. By comparison, setting a value on the state will signal to a listener that some state has changed, so React can simply listen for change events on the state and queue up re-rendering.
        The virtual DOM is used for efficient re-rendering of the DOM. This isn't really related to dirty checking my data. I could re-render using a virtual DOM with or without dirty checking. With ReactJS, each time a change is triggered (by a query or a user’s action, for instance), the entire virtual DOM is updated.
        ReactJS keeps two versions of the virtual DOM in memory — an updated virtual DOM and a copy made before the update. After the update, ReactJS compares these two versions to find the elements that have changed.
        Then it updates only the part of the real DOM that has changed.
        There is some overhead in computing the diff between two virtual trees, but the virtual DOM diff is about understanding what needs updating in the DOM and not whether or not my data has changed.`
    },
    {
        title: "Describe Flux vs MVC?",
        type: 1,
        content: `Traditional MVC patterns have worked well for separating the concerns of data (Model), UI (View) and logic (Controller) — but MVC architectures frequently encounter two main problems:
        - Poorly defined data flow: The cascading updates which occur across views often lead to a tangled web of events which is difficult to debug.
        - Lack of data integrity: Model data can be mutated from anywhere, yielding unpredictable results across the UI.
        With the Flux pattern complex UIs no longer suffer from cascading updates; any given React component will be able to reconstruct its state based on the data provided by the store. The Flux pattern also enforces data integrity by restricting direct access to the shared data.
        `
    },
    {
        title: "Can you force a React component to rerender without calling setState?",
        type: 1,
        content: `In my component, I can call this.forceUpdate() to force a rerender. Another way is this.setState(this.state);
        forceUpdate should be avoided because it deviates from a React mindset. The React docs cite an example of when forceUpdate might be used:
        By default, when my component's state or props change, my component will re-render. However, if these change implicitly (eg: data deep within an object changes without changing the object itself) or if my render() method depends on some other data, I can tell React that it needs to re-run render() by calling forceUpdate().`
    },
    {
        title: "Why does React use SyntheticEvents?",
        type: 1,
        content: `React implements a synthetic events system that brings consistency and high performance to React apps and interfaces. It achieves consistency by normalizing events so that they have the same properties across different browsers and platforms.
        A synthetic event is a cross-browser wrapper around the browser’s native event. It has the same interface as the browser’s native event, including stopPropagation() and preventDefault(), except the events work identically across all browsers.
        It achieves high performance by automatically using event delegation. In actuality, React doesn’t attach event handlers to the nodes themselves. Instead, a single event listener is attached to the root of the document. When an event is fired, React maps it to the appropriate component element.`
    },
    {
        title: "How would you go about investigating slow React application rendering?",
        type: 1,
        content: `One of the most common issues in React applications is when components re-render unnecessarily. There are two tools provided by React that are helpful in these situations:
        - React.memo(): This prevents unnecessary re-rendering of function components
        - PureComponent: This prevents unnecessary re-rendering of class components
        Both of these tools rely on a shallow comparison of the props passed into the component—if the props have not changed, then the component will not re-render. While both tools are very useful, the shallow comparison brings with it an additional performance penalty, so both can have a negative performance impact if used incorrectly. By using the React Profiler, performance can be measured before and after using these tools to ensure that performance is actually improved by making a given change.
        `
    },
    {
        title: "What's a Pure Functional Component in React?",
        type: 1,
        content: `A function is said to be pure if:
        - Its return value is only determined by its input values
        - Its return value is always the same for the same input values
        A React component is considered pure if it renders the same output for the same state and props.
        With React.memo(), I can create memoized functional components that bail out of rendering on unnecessary updates using shallow comparison of props.`
    },
    {
        title: "What is the second argument that can optionally be passed to setState and what is its purpose?",
        type: 1,
        content: `A callback function which will be invoked when setState has finished and the component is re-rendered.
        Something that’s not spoken of a lot is that setState is asynchronous, which is why it takes in a second callback function. Typically it’s best to use another lifecycle method rather than relying on this callback function, but it’s good to know it exists.`
    },
    {
        title: "When is it important to pass props to super(), and why?",
        type: 1,
        content: `The only one reason when one needs to pass props to super() is when I want to access this.props in constructor. passing or not passing props to super has no effect on later uses of this.props outside constructor.`
    },
    {
        title: "Why would you need to bind event handlers to this?",
        type: 1,
        content: `Binding is not something that is specifc to React, but rather how this works in Javascript. When I define a component using an ES6 class, a common pattern is for an event handler to be a method on the class. In JavaScript, class methods are not bound by default. If I forget to bind this.someEventHandler and pass it to onChange, this will be undefined when the function is actually called.
        Generally, if I refer to a method without () after it, such as onChange={this.someEventHandler}, I should bind that method.`
    },
    {
        title: "What is the difference between using constructor vs getInitialState in React?",
        type: 1,
        content: `The difference between constructor and getInitialState is the difference between ES6 and ES5 itself. I should initialize state in the constructor when using ES6 classes, and define the getInitialState method when using React.createClass.`
    },
    {
        title: "Why doesn't this.props.children.map work?",
        type: 1,
        content: `this.props.children is an opaque data structure. It can be either an array or a single element. In my case, this.props.children is probably a single element, which is why the .map() method is undefined.
        I should use the React.Children API when manipulating the children prop.`
    },
    {
        title: "How to create Props Proxy for HOC component?",
        type: 1,
        content: `I can add/edit props passed to the Component as a props proxy`
    },
    {
        title: "How to conditionally add attributes to React components?",
        type: 1,
        content: `For certain attributes, React is intelligent enough to omit the attribute if the value I pass to it is not truthy. I can also use && operator.`
    },
    {
        title: "Does React re-render all components and sub components every time setState is called?",
        type: 1,
        content: `yes.
        There is a method boolean shouldComponentUpdate(object nextProps, object nextState), each component has this method and it's responsible to determine "should component update (run render function)?" every time I change state or pass new props from parent component.
        I can write my own implementation of shouldComponentUpdate method for my component, but default implementation always returns true - meaning always re-run render function.`
    },
    {
        title: "Describe how events are handled in React",
        type: 1,
        content: `In order to solve cross browser compatibility issues, my event handlers in React will be passed instances of SyntheticEvent, which is React’s cross-browser wrapper around the browser’s native event. These synthetic events have the same interface as native events you’re used to, except they work identically across all browsers.
        What’s mildly interesting is that React doesn’t actually attach events to the child nodes themselves. React will listen to all events at the top level using a single event listener. This is good for performance and it also means that React doesn’t need to worry about keeping track of event listeners when updating the DOM.
        `
    },
    {
        title: "How to apply validation on props in ReactJS?",
        type: 1,
        content: `When the application is running in development mode, React will automatically check for all props that we set on components to make sure they must right correct and right data type. For incorrect type, it will generate warning messages in the console for development mode whereas it is disabled in production mode due performance impact. The mandatory prop is defined with isRequired.
        The set of predefined prop types are below
        - React.PropTypes.string
        - React.PropTypes.number
        - React.PropTypes.func
        - React.PropTypes.node
        - React.PropTypes.bool
        For example, we define propTypes for user component as below,`
    },
    {
        title: "When would I use StrictMode component in React?",
        type: 1,
        content: `I've found it especially useful to implement strict mode when I'm working on new code bases and I want to see what kind of code/components I'm facing. Also if you're on bug hunting mode, sometimes it's a good idea to wrap with <StrictMode /> the components/blocks of code I think might be the source of the problem.`
    },
    {
        title: "What's the difference between useCallback and useMemo in practice?",
        type: 1,
        content: `With useCallback I memoize functions, useMemo memoizes any computed value.
        (1) will return a memoized version of fn - same reference across multiple renders, as long as dep is the same. But every time I invoke memoFn, that complex computation starts again.
        (2) will invoke fn every time dep changes and remember its returned value (42 here), which is then stored in memoFnReturn.`
    },
    {
        title: "Explain why and when would I use useMemo()?",
        type: 1,
        content: `Why:

        In the lifecycle of a component, React re-renders the component when an update is made. When React checks for any changes in a component, it may detect an unintended or unexpected change due to how JavaScript handles equality and shallow comparisons. This change in the React application will cause it to re-render unnecessarily.
        Additionally, if that re-rendering is an expensive operation, like a long for loop, it can hurt performance. Expensive operations can be costly in either time, memory, or processing.
        When:
        
        Optimal if the wrapped function is large and expensive.
        How:
        
        Memoization is an optimization technique which passes a complex function to be memoized. In memoization, the result is “remembered” when the same parameters are passed-in subsequently.
        useMemo takes in a function and an array of dependencies. The dependency’s list are the elements useMemo watches: if there are no changes, the function result will stay the same. Otherwise, it will re-run the function. If they don’t change, it doesn’t matter if our entire component re-renders, the function won’t re-run but instead return the stored result.`
    },
    {
        title: "When to use useCallback, useMemo and useEffect?",
        type: 1,
        content: `- useEffect - It's the alternative for the class component lifecycle methods componentDidMount, componentWillUnmount, componentDidUpdate, etc. I can also use it to create a side effect when dependencies change, i.e. "If some variable changes, do this".
        - useCallback - On every render, everything that's inside a functional component will run again. If a child component has a dependency on a function from the parent component, the child will re-render every time the parent re-renders even if that function "doesn't change" (the reference changes, but what the function does won't).
        It's used for optimization by avoiding unnecessary renders from the child, making the function change the reference only when dependencies change. I should use it when a function is a dependency of a side effect e.g. useEffect.
        - useMemo - It will run on every render, but with cached values. It will only use new values when certain dependencies change. It's used for optimization when I have expensive computations.`
    },
    {
        title: "Can you do Components Inheritance in React?",
        type: 1,
        content: `The React Team has’t found any use cases where we would recommend creating component inheritance hierarchies.
        Props and composition give I all the flexibility I need to customize a component’s look and behavior in an explicit and safe way. Remember that components may accept arbitrary props, including primitive values, React elements, or functions.
        If I want to reuse non-UI functionality between components, we suggest extracting it into a separate JavaScript module. The components may import it and use that function, object, or a class, without extending it.`
    },
    {
        title: "What is difference between Incremental DOM and Virtual DOM?",
        type: 1,
        content: `- Incremental DOM is a library for building up DOM trees and updating them in-place when data changes. It differs from the established virtual DOM approach in that no intermediate tree is created (the existing tree is mutated in-place).
        This approach significantly reduces memory allocation and GC thrashing for incremental updates to the DOM tree therefore increasing performance significantly in some cases.
        - Virtual DOM compares (diff) a new entire virtual DOM with the previous virtual DOM for changes then applies those changes to the actual DOM. - This approach creates a new virtual DOM to determine the changes (memory heavy). Has a big memory footprint because it needs headroom for changes that "might" happen to the virtual DOM.`
    },
    {
        title: "When would you use flushSync in ReactJS?",
        type: 1,
        content: `React 18 adds out-of-the-box performance improvements by doing more batching (automated) by default. Batching is when React groups multiple state updates into a single re-render for better performance.
        To opt-out of automatic batching, I can use flushSync so my component will be re-rendered after each state update. I might need it when for example some code may depend on reading something from the DOM immediately after a state change.`
    },
    {
        title: "When shall we use useReducer hook in ReactJS?",
        type: 1,
        content: `useReducer is an alternative to useState. useReducer is usually preferable to useState when I have complex state logic that involves multiple sub-values or when the next state depends on the previous one.
        An example will be a list of items, where I need to add, update and remove items in the state, Here I might have noticed that the state management logic takes a good part of the component body. useReducer helps to separate the concerns of rendering vs a concern of state management.
        useReducer also lets I optimize performance for components that trigger deep updates because I can pass dispatch down instead of callbacks. React guarantees that dispatch function identity is stable and won’t change on re-renders. This is why it’s safe to omit from the useEffect or useCallback dependency list.`
    },
    {
        title: "When to use useState vs useReducer?",
        type: 1,
        content: `The decision of whether to use useState or useReducer isn't always black and white; there are many shades of grey. But,
        use useState if I have:
        - JavaScript primitives as state
        - Simple state transitions
        - Business logic within my component
        - Different properties that don't change in any correlated way and can be managed by multiple useState hooks.
        use useReducer if I have:
        - JavaScript objects or arrays as state
        - Complex state transitions
        - Complicated business logic more suitable for a reducer function (to separate concern of it)
        - Different properties tied together that should be managed in one state object (when state depends on state)
        `
    },
    {
        title: "How would you store non-state/instance variables in functional React components?",
        type: 1,
        content: `I can use useRef hook (it's the recommended way stated in docs). useRef returns an object whose reference would not change across re-renders, the actual value for foo is then kept in the current property of that object.
        - Declaring variable: const a = useRef(5) // 5 is initial value
        - getting the value: a.current
        - setting the value: a.current = my_value`
    },
    {
        title: "What is a Pure Function?",
        type: 1,
        content: `A Pure function is a function that doesn't depend on and doesn't modify the states of variables out of its scope. Essentially, this means that a pure function will always return the same result given same parameters.`
    },
    {
        title: "Explain some difference between Flux and AngularJS (1.x) approach",
        type: 1,
        content: `UI components in AngularJS typically rely on some internal $scope to store their data. This data can be directly mutated from within the UI component or anything given access to $scope — a risky situation for any part of the component or greater application which relies on that data.
        By contrast, the Flux pattern encourages the use of immutable data. Because the store is the central authority on all data, any mutations to that data must occur within the store. The risk of data pollution is greatly reduced.`
    },
    {
        title: "What is the key architectural difference between a JavaScript library such as React and a JavaScript framework such as Angular?",
        type: 1,
        content: `React enables developers to render a user interface. To create a full front-end application, developers need other pieces, such as state management tools like Redux.
        Like React, Angular enables developers to render a user interface, but it is a “batteries included” framework that includes prescriptive, opinionated solutions to common requirements like state management.
        While there are many other considerations when comparing React and Angular specifically, this key architectural difference means that:
        - Using a library such as React can give a project a greater ability to evolve parts of the system—again for example, state management—over time, when new solutions are created by the open source community.
        - Using a framework such as Angular can make it easier for developers to get started and can also simplify maintenance.`
    },
    {
        title: "What is React Fiber?",
        type: 1,
        content: `React Fiber is an ongoing reimplementation of React's core algorithm. The main difference between react and react fiber are these new features :-
        1. Incremental Rendering :- React v16.0 includes a completely rewritten server renderer. It’s really fast. It supports streaming, so I can start sending bytes to the client faster
        2. Handle errors in the render API : To make class component an error boundary we define a new lifecycle method called componentDidCatch(error, info).
        3. Return multiple elements from render : With this new feature in React v16.0 now we can also return an array of elements, and string from component’s render method.
        4. Portals : Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
        5. Fragments : A common pattern in React is for a component to return multiple elements. Fragments let us group a list of children without adding extra nodes to the DOM.`
    },
    {
        title: "How to avoid the need for binding in React?",
        type: 1,
        content: `There are several common approaches used to avoid methods binding in React:
        - Define my Event Handler as an Inline Arrow Function
        - Define my Event Handler as an Arrow Function Assigned to a Class Field
        - Use a Function Component with Hooks`
    },
    {
        title: "How does React renderer work exactly when we call setState?",
        type: 1,
        content: `There are two steps of what we may call render:
        - Virtual DOM render: when render method is called it returns a new virtual dom structure of the component. This render method is called always when I call setState(), because shouldComponentUpdate always returns true by default. So, by default, there is no optimisation here in React.
        - Native DOM render: React changes real DOM nodes in my browser only if they were changed in the Virtual DOM and as little as needed - this is that great React's feature which optimizes real DOM mutation and makes React fast.`
    },
    {
        title: "How to use React.memo()?",
        type: 1,
        content: `With React.memo(), I can create memoized functional components that bail out of rendering on unnecessary updates using shallow comparison of props.
        Using the new React.memo() API, the functional component can be wrapped`
    },
    {
        title: "Can a custom React hook return JSX?",
        type: 1,
        content: `While there is no hardcore restriction on how I should define custom hooks and what logic should contain, it's an anti-pattern to write hooks that return JSX.
        There are a few downsides to using hooks to return JSX
        - When I write a hook that returns JSX component, I are essentially defining the component within the functional component, so on each and every re-render I will be creating a new instance of the component. This will lead to the component being unmounted and mounted again. This is bad for performance and also buggy if I have stateful login within the component as the state will get reset with every re-render of the parent
        - By defining a JSX component within the hook, I are taking away the option of lazy loading my component if the need be.
        - Any performance optimization to the component will require I to make use of useMemo which doesn't give I the flexibility of a custom comparator function like React.memo()
        The benefit on the other hand is that I have control over the state of the component in the parent. However, I can still implement the same logic by using a controlled component approach`
    },
    {
        title: "What is the order of useInsertionEffect, useEffect and useLayoutEffect hooks at component generation?",
        type: 1,
        content: `useInsertionEffect.

        It fires synchronously before all DOM mutations. Use this to inject styles into the DOM before reading layout in useLayoutEffect. So it runs before useLayoutEffect.
        useLayoutEffect
        
        It fires synchronously after all DOM mutations. Use this to read layout from the DOM and synchronously re-render.
        useEffect.
        
        It will run after the render is committed to the screen. So it runs after useLayoutEffect.
        Therefore the order of running is:
        - useInsertionEffect
        - useLayoutEffect
        - useEffect`
    },
];
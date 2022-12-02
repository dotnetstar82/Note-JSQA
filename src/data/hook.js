export const hook = [
    {
        title: "What are React Hooks?",
        type: 2,
        content: `Hooks are a new addition in React 16.8. They let I use state and other React features without writing a class. With Hooks, I can extract stateful logic from a component so it can be tested independently and reused. Hooks allow I to reuse stateful logic without changing my component hierarchy. This makes it easy to share Hooks among many components or with the community.`
    },
    {
        title: "What are advantages of using React Hooks?",
        type: 2,
        content: `Primarily, hooks in general enable the extraction and reuse of stateful logic that is common across multiple components without the burden of higher order components or render props. Hooks allow to easily manipulate the state of our functional component without needing to convert them into class components.
        Hooks don’t work inside classes (because they let I use React without classes). By using them, we can totally avoid using lifecycle methods, such as componentDidMount, componentDidUpdate, componentWillUnmount. Instead, we will use built-in hooks like useEffect .`
    },
    {
        title: "How to call loading function with React useEffect only once?",
        type: 2,
        content: `If I only want to run the function given to useEffect after the initial render, I can give it an empty array [] as the second argument.`
    },
    {
        title: "How to access DOM elements in React?",
        type: 2,
        content: `One of the useful application of the useRef() hook is to access DOM elements. This is performed in 3 steps:
        - Define the reference to access the element const elementRef = useRef();
        - Assign the reference to ref attribute of the element: <div ref={elementRef}></div>;
        - After mounting, elementRef.current points to the DOM element.`
    },
    {
        title: "How to use componentWillMount() in React Hooks?",
        type: 2,
        content: `I cannot use any of the existing lifecycle methods (componentDidMount, componentDidUpdate, componentWillUnmount etc.) in a hook. They can only be used in class components. And with Hooks I can only use in functional components.
        I can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.
        - Code inside componentDidMount run once when the component is mounted. useEffect hook equivalent for this behaviour is.
        - Without the second parameter the useEffect hook will be called on every render (like componentDidUpdate) of the component which can be dangerous.
        - Hook equivalent of componentWillUnmount() code will be as follows`
    },
    {
        title: "Does React useState Hook update immediately?",
        type: 2,
        content: `React useState and setState don’t make changes directly to the state object; they create queues to optimize performance, which is why the changes don’t update immediately. The process to update React state is asynchronous for performance reasons.
        To perform side effects after state has change, I must use the useEffect`
    },
    {
        title: "What does Batching mean in ReactJS?",
        type: 2,
        content: `Batching is nothing but grouping React multiple state updates together into a single render state to achieve better computational performance. Until React 18, we only batched updates during the React event handlers. Updates inside of promises, setTimeout, native event handlers, or any other event were not batched in React by default.`
    },
    {
        title: "What are the advantages of Batching in ReactJS?",
        type: 2,
        content: `- Batching is great for performance because it avoids unnecessary re-renders.
        - Batching also prevents my component from rendering half-finished states where only one state variable was updated, which may cause bugs.
        - Another reason to use batching is when the web application grows, the number of nested components will increase. Therefore, if a parent component executes an unbatched state updated, the entire component tree will be re-rendered per state update that is expensive.`
    },
    {
        title: "Which lifecycle methods of class component is replaced by useEffect in functional component?",
        type: 2,
        content: `The lifecyce methods replaced by useEffect Hooks of functional component are componentDidMount(), componentDidUpdate(), and componentWillUnmount()

        - componentDidMount: is equivalent for running an effect once.
        - componentDidUpdate: is equivalent for running effects when things change.
        - componentWillUnmount: To run a hook as the component is about to unmount, we just have to return a function from the useEffect Hook`
    },
    {
        title: "Compare React Context Api with useContext React hook",
        type: 2,
        content: `When using the React Context API:
        - We need to wrap our content in a Consumer component and then pass a function as a child just so we could access (or consume) our state.
        - This introduces unnecessary component nesting and increases the complexity of our code.
        When using useContext Hook: “use” context without a Consumer:`
    },
    {
        title: "When would I use useContext hook?",
        type: 2,
        content: `React’s useContext hook makes it easy to pass data throughout my app without manually passing props down the tree. React Context is a way to manage state globally. Wrap child components in the Context Provider and supply the state value. Then I can access the user Context in all components:`
    },
    {
        title: "Is there any problem when using useContext Hook?",
        type: 2,
        content: `The problem is that any component consuming state with useContext will re-render when any piece of the Context’s state updates. This resulted in components that were totally divorced from one another causing each other to re-render.
        In cases where these re-renders were expensive, the memory in users’ browsers accumulated JS Heap footprints in the orders of gigabytes.`
    },
    {
        title: "Compare useState and useReducer implementations",
        type: 2,
        content: `- useState updates state with setState, while useReducer with dispatch function.
        - useState passes down all the setState custom helper functions, while useReducer passes down just the dispatch function.
        - useState needs to wrap functions in useCallback(if we want to memorize them), while dispatch function is already memorized.
        - useState easier to write, useReducer is harder to implement and needs more logic to be coded.`
    },
    {
        title: "Do React Hooks cover all use cases for class components?",
        type: 2,
        content: `No, The following methods have not been introduced in Hooks yet:
        - getSnapshotBeforeUpdate
        - getDerivedStateFromError
        - componentDidCatch`
    },
    {
        title: "How can I make use of Error Boundaries in functional React components?",
        type: 2,
        content: `As of v16.2.0, there's no way to turn a functional component into an error boundary. The componentDidCatch() method works like a JavaScript catch {} block, but for components. Only class components can be error boundaries. In practice, most of the time you’ll want to declare an error boundary component once and use it throughout my application.

        Also bear in mind that try/catch blocks won't work on all cases. If a component deep in the hierarchy tries to update and fails, the try/catch block in one of the parents won't work -- because it isn't necessarily updating together with the child.
        A few third party packages on npm implement error boundary hooks.`
    },
    {
        title: "What are differences between React.memo() and useMemo()?",
        type: 2,
        content: `- React.memo() is a higher-order component (HOC) that we can use to wrap components that we do not want to re-render unless props within them change.
        - useMemo() is a React Hook that we can use to wrap functions within a component. We can use this to ensure that the values within that function are re-computed only when one of its dependencies change`
    },
    {
        title: "What are common use cases for the useMemo?",
        type: 2,
        content: `<> The primary purpose of useMemo hook is "performance optimization".
        - It returns a memoized value,
        - It accepts two arguments - create function (which should return a value to be memoized) and dependency array. It will recompute the memoized value only when one of the dependencies has changed.
        <> Using useMemo I achieve:
        referential equality of the values (to further send them to props of the components to potentially avoid re-renders)
        eliminate redoing of the computationally expensive operations for same parameters`
    },
    {
        title: "What are production use cases for the useRef?",
        type: 2,
        content: `useRef simply returns a plain Javascript object. Its value can be accessed and modified (mutability) as many times as I need without worrying about rerender.
        useRef value will persist (won't be reset to the initialValue unlike an ordinary object defined in my function component; it persists because useRef gives I the same object instead of creating a new one on subsequent renders) for the component lifetime and across re-renders.
        useRef hook is often used to store values instead of DOM references. These values can either be a state that does not need to change too often or a state that should change as frequently as possible but should not trigger full re-rendering of the component.`
    },
    {
        title: "Explain the difference between useState and useRef hooks?",
        type: 2,
        content: `- Updating a reference created by useRef doesn't trigger re-rendering, while updating the state (setState) makes the component re-render;
        - useRef returns an object with a current property holding the actual value. In contrast, useState returns an array with two elements.
        - useRef's current property is mutable, but useState's state variable is not.
        - The reference update is synchronous (the updated reference value is available right away), while the state update is asynchronous (the state variable is updated after re-rendering).
        Using useRef - no re-renders.
        Using useState - triggers re-render`
    },
    {
        title: "When would you use useRef?",
        type: 2,
        content: `To store a ref to DOM elements so I can later do something with them.
        To store values without triggering re-renders.`
    },
    {
        title: "When writing a Custom Hook, what is the difference between it and a normal function?",
        type: 2,
        content: `Hooks use a stateful closure around the invocation of the function component to store the state on behalf of that component instance. That closure is maintained by React.
        - Custom hook will only be "stateful" if I use state with useState inside (or something that implements useState),
        - Hooks should be called from the React code only not from the regular JS functions. Hence, Hooks' scope is limited to the React code world and has more power to do a lot with React code,
        - In the class-based components, the Hooks won't work but regular functions will.
        - In the regular JS functions, I can't access useState, useEffect, useContext etc. but in react custom hooks I can.`
    },
    {
        title: "Do two components using the same Hook share state?",
        type: 2,
        content: `No. Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time I use a custom Hook, all state and effects inside of it are fully isolated.`
    },
    {
        title: "Do Hooks replace render props and higher-order components (HOC)?",
        type: 2,
        content: `Often, render props and higher-order components render only a single child. React team thinks Hooks are a simpler way to serve this use case.
        There is still a place for both patterns (for example, a virtual scroller component might have a renderItem prop, or a visual container component might have its own DOM structure). But in most cases, Hooks will be sufficient and can help reduce nesting in my tree.`
    },
    {
        title: "What's the difference between useCallback and useMemo in practice?",
        type: 2,
        content: `With useCallback I memoize functions, useMemo memoizes any computed value:
        (1) will return a memoized version of fn - same reference across multiple renders, as long as dep is the same. But every time I invoke memoFn, that complex computation starts again.
        (2) will invoke fn every time dep changes and remember its returned value (42 here), which is then stored in memoFnReturn.`
    },
    {
        title: "How do I update state on a nested object with useState()?",
        type: 2,
        content: `I can use spread syntax. Also while trying to update current state based on previous, use the callback pattern os setState`
    },
    {
        title: "Is there a React hook equivalent to componentDidCatch?",
        type: 2,
        content: `There is not a React hook equivalent of componentDidCatch. However, the React team plans to add one soon.
        For functional components I can sometimes use try...catch to catch component errors. Also bear in mind that try/catch blocks won't work on all cases. If a component deep in the hierarchy tries to updates and fails, the try/catch block in one of the parents won't work -- because it isn't necessarily updating together with the child.
        That approach has some limitations: when I use a hook like useEffect and I use some internal functions in it, I cannot put that internal function into try...catch(Error Boundary) block because I should define that function on top of useEffect hook (why?) and I shouldn't use useEffect conditionally (why?)!`
    },
    {
        title: "Are there any problems using useCallback?",
        type: 2,
        content: `Since MyChild component is light and its re-rendering doesn't create performance issues, using useCallback here is not important. Using useCallback I also increased code complexity.`
    },
    {
        title: "Explain the use of useLayoutEffect React Hook",
        type: 2,
        content: `useLayoutEffect React Hook runs synchronously immediately after React has performed all DOM mutations. This can be useful if I need to make DOM measurements (like getting the scroll position or other styles for an element) and then make DOM mutations or trigger a synchronous re-render by updating the state.
        As far as scheduling and lifecycle, this works the same way as componentDidMount and componentDidUpdate. my code runs immediately after the DOM has been updated, but before the browser has had a chance to "paint" those changes (the user doesn't actually see the updates until after the browser has repainted).`
    },
    {
        title: "How would you store non-state/instance variables in functional React components?",
        type: 2,
        content: `I can use useRef hook (it's the recommended way stated in docs). useRef returns an object whose reference would not change across re-renders, the actual value for foo is then kept in the current property of that object.
        - Declaring variable: const a = useRef(5) // 5 is initial value
        - getting the value: a.current
        - setting the value: a.current = my_value`
    },
    {
        title: "How can I force component to re-render with Hooks in React?",
        type: 2,
        content: `This is possible with useState or useReducer, since useState uses useReducer internally:
        useCallback memoizes forceUpdate, so it stays constant during component lifespan and can be passed as a prop safely. updateState({}) updates the state with new object on each forceUpdate call, this results in a re-render. So yes, it forces an update when being called.
        forceUpdate isn't intended to be used under normal circumstances, only in testing or other outstanding cases. This situation may be addressed in a more conventional way.`
    },
    {
        title: "Can a custom React hook return JSX?",
        type: 2,
        content: `While there is no hardcore restriction on how I should define custom hooks and what logic should contain, it's an anti-pattern to write hooks that return JSX.
        There are a few downsides to using hooks to return JSX
        When I write a hook that returns JSX component, I are essentially defining the component within the functional component, so on each and every re-render I will be creating a new instance of the component. This will lead to the component being unmounted and mounted again. This is bad for performance and also buggy if I have stateful login within the component as the state will get reset with every re-render of the parent
        By defining a JSX component within the hook, I are taking away the option of lazy loading my component if the need be.
        Any performance optimization to the component will require I to make use of useMemo which doesn't give I the flexibility of a custom comparator function like React.memo()
        The benefit on the other hand is that I have control over the state of the component in the parent. However, I can still implement the same logic by using a controlled component approach`
    },
    {
        title: "When would you want to avoid useEffect and use useLayoutEffect instead?",
        type: 2,
        content: `If my effect is mutating the DOM (via a DOM node ref) and the DOM mutation will change the appearance of the DOM node between the time that it is rendered and my effect mutates it, then I don't want to use useEffect. You'll want to use useLayoutEffect. Otherwise, the user could see a flicker when my DOM mutations take effect. This is pretty much the only time I want to avoid useEffect and use useLayoutEffect instead.`
    },
];
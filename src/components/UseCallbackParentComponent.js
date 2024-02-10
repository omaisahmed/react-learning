import React, {useState,useCallback} from 'react';

const ChildComponent = ({ onClick }) => {
    console.log('ChildComponent rendered');
    return (
      <button onClick={onClick}>
        Click me (Child Component)
      </button>
    );
  };
  

export default function UseCallbackParentComponent() {
    const [count, setCount] = useState(0);

    // Using useCallback to memoize the handleClick function
    const handleClick = useCallback(() => {
      console.log('Button clicked!');
      setCount(count + 1);
    }, [count]); // Dependency array: handleClick depends on the count state
  
    console.log('ParentComponent rendered');
  
    return (
      <div>
        <h1>ParentComponent</h1>
        <p>Count: {count}</p>
        <ChildComponent onClick={handleClick} />
      </div>
    );
}

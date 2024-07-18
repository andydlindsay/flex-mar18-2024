import {useEffect, useState} from 'react';

const DocumentTitle = () => {
  const [counter, setCounter] = useState(0);
  const [username, setUsername] = useState('');

  useEffect(() => {
    
    if (counter < 10) {
      console.log('updating the document title');
      document.title = `The count is ${counter}`;
    }

  }, [counter]); // document.ready

  return (
    <div>
      <h2>Document Title Component</h2>
      <h3>Counter: {counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      {/* or use the `prev` version of setCounter to avoid stale state */}
      <button onClick={() => setCounter(prev => prev + 1)}>Increment</button>

      <div>
        <label>Username</label>
        <input 
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
    </div>
  );
};

export default DocumentTitle;

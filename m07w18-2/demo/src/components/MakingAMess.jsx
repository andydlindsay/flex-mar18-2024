import {useEffect, useState} from 'react';

const MakingAMess = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    console.log('setting interval');

    const intervalId = setInterval(() => {
      console.log('the interval has fired');
    }, 2000);
    
    const cleanup = () => {
      console.log('clearing interval');
      clearInterval(intervalId);
    };

    return cleanup;
  });

  return (
    <div>
      <h2>Making a Mess</h2>

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

export default MakingAMess;

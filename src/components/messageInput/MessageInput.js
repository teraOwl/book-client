import React, { useState } from 'react';
import './MessageInput.css';

const NewMessage = ({socket}) => {
  //https://booksvooks.com/scrolablehtml/merles-door-lessons-from-a-freethinking-dog-pdf.html testing client 
  //https://booksvooks.com/fullbook/timekeeper-pdf-tara-sim.html valid book
  const [value, setValue] = useState('https://booksvooks.com/fullbook/timekeeper-pdf-tara-sim.html');
  const submitForm = (e) => {
    e.preventDefault();
    socket.emit('message', value);
    setValue('');
  };

  return (
    <form onSubmit={submitForm}>
      <input
        autoFocus
        value={value}
        placeholder="Paste book url"
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      />
    </form>
  );
};

export default NewMessage;


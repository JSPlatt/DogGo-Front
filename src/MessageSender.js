import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './MessageSender.css';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import { useStateValue } from './StateProvider';
import db from './firebase'
import firebase from 'firebase'


function MessageSender() {
  const [{user} , dispatch] = useStateValue();
  const [input, setInput] = useState('');
  const [inputURL, setInputURL] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: inputURL
    })

    setInput('');
    setInputURL('');
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL}/>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="messageSender__input"
            placeholder={`Tell  us about your doggo.`}
          />
          <input
            value={inputURL}
            onChange={(e) => setInputURL(e.target.value)}
            type="text"
            placeholder="Show us your doggo."
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Button
          </button>
        </form>
     
    

      </div>
    </div>
  );
}

export default MessageSender;
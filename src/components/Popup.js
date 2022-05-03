import React from 'react';

const Popup = (props) => {
  return (
    <div className="overlay">
      <div className="popup">
        <h2>This is your note:</h2>
        <p>
          First name: <span>{props.firstname}</span>
        </p>
        <p>
          Last name: <span>{props.lastname}</span>
        </p>
        <p>
          Phone: <span>{props.phone}</span>
        </p>
        <p>
          Role: <span>{props.role}</span>
        </p>
        <p>
          Message: <span>{props.message}</span>
        </p>
        <button onClick={props.submit}>Yes, I am sure</button>
        <button onClick={props.close}>No, I don't want to post it</button>
      </div>
    </div>
  );
};

export default Popup;

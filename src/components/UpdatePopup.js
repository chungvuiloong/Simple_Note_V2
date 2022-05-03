import React from 'react';
import Form from './Form';

const UpdatePopup = (props) => {
  return (
    <div className="overlay">
      <Form {...props} />
      <div>
        <button onClick={props.close}>Oops I made a mistake</button>  
      </div>
        {/* <form onChange={props.change} onSubmit={props.onSubmit}>
          <h2>Update with new info</h2>

          <div>
            <label htmlFor="firstname">First name</label>
            <input type="text" 
                          name="firstname" 
                          id="firstname" 
                          required 
                          defaultValue={props.firstname}/>
          </div>

          <div>
            <label htmlFor="lastname">Last name</label>
            <input type="text" 
                    name="lastname" 
                    id="lastname" 
                    required 
                    defaultValue={props.lastname}/>
          </div>

          <div>
            <label htmlFor="phone">Phone</label>
            <input type="tel" 
                    name="phone" 
                    id="phone" 
                    required 
                    defaultValue={props.phone}/>
          </div>
          <div>
            <label htmlFor="role">Role</label>
            <select name="role" id="role" required defaultValue={props.role}>
              <option value="" invalid="true" hidden>
                Choose a role ...
              </option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
              <option value="scientist">Scientist</option>
              <option value="cutiepie">Cutiepie</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea name="message" 
                      id="message" 
                      required 
                      defaultValue={props.message}/>
          </div>

          <button onClick={props.update}>Save</button>
          <button onClick={props.close}>Oops I made a mistake</button>
        </form> */}
    </div>
  );
};

export default UpdatePopup;

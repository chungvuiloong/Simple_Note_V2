import React, { Component } from 'react';


const NotesList = (props) => {

        return (
            <div>
                {props.data.map(note =>
//<FontAwesomeIcon icon="fa-solid fa-circle-trash" /> 
//<FontAwesomeIcon icon="fa-solid fa-pen" /> 
                
                    <li key={note.id}>{note.id}. {note.firstname} {note.lastname} | {note.phone} | {note.role} | {note.message} 
                        <span onClick={() =>props.delete(note.id)}>Delete </span>
                        <span onClick={() =>props.edit(note.id)}>Edit</span>
                    </li>
                  
                
                    )}
            </div>
        );
        

};

export default NotesList;
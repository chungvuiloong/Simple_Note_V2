import React, { Component } from 'react';


const NotesList = (props) => {

        return (
            <div>
                {props.data.map((note) => {
                
                   return (
                    <li key={note.id}> 
                    {note.firstname} {note.lastname} | {note.phone} | {note.role} | {' '} {note.message} 
                    <span 
                    className="material-symbols-rounded"
                    onClick={() =>props.delete(note.id)}>Delete </span>
                    <span 
                    className="material-symbols-rounded" 
                    onClick={() =>props.edit(note)}>Edit</span>
                    </li>
                   )
                })};
            </div>
        );
};

export default NotesList;
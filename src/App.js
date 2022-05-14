import React, { Component } from 'react';

import Form from './components/Form';
import View from './components/View';
import Popup from './components/Popup';
import NotesList from './components/NotesList';
import UpdatePopup from './components/UpdatePopup';
import axios from 'axios';

class App extends Component {
  state = {
    inputData: {
      firstname: '',
      lastname: '',
      phone: '',
      role: '',
      message: '',
    },
    showPopup: false,
    updatePopup: false,
    isLoading: false,
    data: [], // stores the data from the note
    currentNote: {

    },
  };

  componentDidMount() {
    // this.setState({ isLoading: true });
    axios
      .get('http://localhost:3010/notes').then((res) => this.setState({ data: res.data }));

  }; // end of componentDidMount


  inputHandler = (e) => {
    this.setState({
      inputData: { ...this.state.inputData, [e.target.name]: e.target.value },
    });
  }; //end of inputHandler

  popUpHandler = (e) => {
    e.preventDefault();
    this.setState({ showPopup: !this.state.showPopup });
  };

  closeHandler = () => {
    window.location.reload();
  };

  submitHandler = () => {
    axios.post("http://localhost:3010/notes", {...this.state.inputData})
    .then((res) => console.log('res', res))
    .catch((err) => console.log('error',err));
    this.closeHandler();
  }; // End of submite handler

  deleteHandler = (id) => {
    axios.delete(`http://localhost:3010/notes/${id}`).then((res)=> {
      const notes = this.state.data.filter((item) => item.id !== id);
      this.setState({data: notes});
    });
  }; // End of delete Handler


  //Pop up the new menu
  updateHandler = (item) => {
    console.log('update pressed');
    this.setState({updatePopup: true , currentNote: item});
  };

  //Save the new infor
  inputUpdateHandler = (e) => {
    this.setState({
      currentNote: {
        ...this.state.currentNote,
        [e.target.name]: e.target.value,
      },
    });
  };

 

  postHandler = (id) => {
    axios
      .put(`http://localhost:3010/notes/${id}`, this.state.currentNote).then((res) => res.data);
  };



  render() {
    return (
      <>
        <div className="form_area">
          <Form change={this.inputHandler} submit={this.popUpHandler} />
          <View {...this.state.inputData} />

          {/* Once pressed, the pop up occurs */}
          {this.state.showPopup && (
            <Popup submit={this.submitHandler} close={this.closeHandler} {...this.state.inputData} />
          )}

        </div>
        <ol>
          {/* Testing */}



          <NotesList data={this.state.data} delete={this.deleteHandler} edit={this.updateHandler}/>
          {this.state.updatePopup && (
            <UpdatePopup {...this.state.currentNote} 
            update={this.postHandler} 
            change={this.updateHandler} 
            close={this.closeHandler}  />
          )}

        </ol>
        
      </>
    );
  }
}

export default App;

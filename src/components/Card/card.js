import React, { useState } from 'react';
// import {createPost, showAlert} from '../redux/actions'

export const Card = (props) => {
  const [text, setText] = useState('s');

  const submitHandler = (event) => {
    event.preventDefault();
    console.log('ssss');
    console.log(text.title);
    props.add_item(text.title);
  };

  const changeInputHandler = (event) => {
    event.persist();
    setText((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }));
  };

  return (
    <div className='card'>
      <div className='card-body'>
        <form onSubmit={submitHandler}>
          <input
            type='text'
            className='form-control'
            id='title'
            //   value={this.state.title}
            name='title'
            onChange={changeInputHandler}
          />
          <button className='btn btn-success' type='submit'>
            Создать
          </button>
        </form>
      </div>
      {/* <div>
        <form onSubmit={submitHandler}>
          <button className='btn btn-success' type='submit'>
            Получить
          </button>
        </form>
        <p></p>
      </div> */}
    </div>
  );
};

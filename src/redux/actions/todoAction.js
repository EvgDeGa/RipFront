import {
  ADD_ITEM,
  DEL_ITEM,
  UPDATE_ITEM,
  GET_ITEM,
  GET_ITEMS,
} from '../constants';

export const add_item = (text) => {
  var fdata = new FormData();
  fdata.append('text', text);

  addItem('http://127.0.0.1:8000/todo/', fdata, text);
  return {
    type: ADD_ITEM,
    text: text,
  };
};

async function addItem(url, fdata, text) {
  console.log(1111);
  try {
    const response = await fetch('http://127.0.0.1:8000/todo/', {
      mode: 'no-cors',
      method: 'POST',
      body: fdata,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // const result = await response.json();
    // console.log(result);
    // return text;
  } catch (e) {
    console.error('Ошибка:', e);
  }
}

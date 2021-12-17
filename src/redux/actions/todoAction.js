import {
  ADD_ITEM,
  DEL_ITEM,
  UPDATE_ITEM,
  GET_ITEM,
  GET_ITEMS,
} from "../constants";

export const add_item = async (text) => {
  const items = await addItem("http://localhost:8000/todo/", text);
  console.log(".catch()", items);
  return {
    type: ADD_ITEM,
    items: items,
  };
};

async function addItem(url, text) {
  console.log(text);
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log("sad", result);
    return result;
  } catch (e) {
    console.error("Ошибка:", e);
  }
}

async function getItems() {
  console.log(1111);
  try {
    const response = await fetch("localhost/todo/", {
      mode: "no-cors",
      method: "GET",
    });
    const result = await response.json();
    console.log(result);
    // return text;
  } catch (e) {
    console.error("Ошибка:", e);
  }
}

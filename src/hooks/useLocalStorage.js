import react, {useState} from "react";

function useLocalStorage(itemName, initialValue) {
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;
  
    if (!localStorageItem) {
      parsedItem = [];
      localStorage.setItem(itemName, JSON.stringify(initialValue));
    } else {
      parsedItem = JSON.parse(localStorageItem);
    }
  
    const [item, setItem] = useState(parsedItem);
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
  
    return [item, saveItem ];
  }
  export {useLocalStorage};
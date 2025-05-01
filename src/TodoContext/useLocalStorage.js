import { useState, useEffect } from "react";

function useLocalStorage(itemName, initialValue, delay = 2000) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadItem = () => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (e) {
        setError(true);
        setLoading(false);
      }
    };

    const timer = setTimeout(loadItem, delay);

    return () => clearTimeout(timer);
  }, [itemName, initialValue, delay]);

  const saveItem = (newItem) => {
    try {
      const stringified = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringified);
      setItem(newItem);
    } catch (e) {
      setError(true);
    }
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };

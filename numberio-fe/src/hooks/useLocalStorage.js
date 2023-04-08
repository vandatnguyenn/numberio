import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            if (item) return JSON.parse(item);
            else{
                window.localStorage.setItem(key, JSON.stringify(initialValue));
                return initialValue;
            }
        } catch (error) {
            //console.log(error);
            return initialValue;
        }
    });

    const setValue = value => {
        try{
            window.localStorage.setItem(key, JSON.stringify(value));
            setStoredValue(value);
        } catch (error) {
            //console.log(error);
            setStoredValue(value);
        }
    };

    return [storedValue, setValue];
};

export default useLocalStorage;
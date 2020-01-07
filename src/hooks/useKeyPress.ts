import { useState } from "react";
import { useEventListener } from "hooks";

const useKeyPress = (targetKey: string | number) => {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);

  // If pressed key is our target key then set to true
  const downHandler = ({ key, keyCode }: any) => {
    if (key === targetKey || keyCode === targetKey) {
      setKeyPressed(true);
    }
  };

  // If released key is our target key then set to false
  const upHandler = ({ key, keyCode }: any) => {
    if (key === targetKey || keyCode === targetKey) {
      setKeyPressed(false);
    }
  };

  // Add event listeners
  useEventListener("keydown", downHandler, window);
  useEventListener("keyup", upHandler, window);

  return keyPressed;
};

export { useKeyPress };
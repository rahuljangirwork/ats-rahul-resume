// import { useEffect } from 'react';

// const useKeyboardShortcut = (key, ctrlKey, callback) => {
//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key.toLowerCase() === key.toLowerCase() && event.ctrlKey === ctrlKey) {
//         event.preventDefault();
//         callback();
//       }
//     };

//     document.addEventListener('keydown', handleKeyDown);
//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [key, ctrlKey, callback]);
// };



// export default useKeyboardShortcut;


import { useEffect } from 'react';

const useKeyboardShortcut = (key, ctrlKey, callback) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      const pressedKey = event?.key?.toLowerCase?.();
      const targetKey = key?.toLowerCase?.();

      if (pressedKey && targetKey && pressedKey === targetKey && event.ctrlKey === ctrlKey) {
        event.preventDefault();
        callback();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [key, ctrlKey, callback]);
};

export default useKeyboardShortcut;

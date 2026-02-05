/* eslint-disable @typescript-eslint/no-explicit-any */
// export const updateStates = (
//     setState: (state: any) => void,
//     message: string | { [key: string]: any },
//     messageValue?: any
// ) => {
//     setState((prevState: any) => {
//         if (typeof message === 'string') {
//             // handle sinfle item udpdate
//             return {
//                 ...prevState,
//                 [message]: messageValue
//             }
//         }
//         else if (typeof message === 'object') {
//             // handle multiple item udpdate
//             return {
//                 ...prevState,
//                 ...message
//             }
//         }
//         return prevState;
//     })
// };

/* eslint-disable @typescript-eslint/no-explicit-any */
export const updateStates = (
    setState: (state: any) => void,
    message: string | { [key: string]: any },
    messageValue?: any
  ) => {
    setState((prevState: any) => {
      const nextState = { ...prevState };
  
      if (typeof message === 'string') {
        // Handle single item update
        if (message in prevState) {
          nextState[message] = messageValue;
        } else {
          throw new Error(`Key "${message}" does not exist in the state.`);
        }
      } else if (typeof message === 'object' && message !== null) {
        // Handle multiple item updates
        for (const key in message) {
          if (key in prevState) {
            nextState[key] = message[key];
          } else {
            throw new Error(`Key "${key}" does not exist in the state.`);
          }
        }
      }
  
      return nextState;
    });
  };
  
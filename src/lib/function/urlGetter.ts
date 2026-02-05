import { create } from 'zustand';

interface StoreState {
  storedValue: string;
  setStoredValue: (value: string) => void;
  refreshStoredValue: () => void; // Function to re-sync state with localStorage
}

export const useStore = create<StoreState>((set) => ({
  storedValue: '',
  setStoredValue: (value: string) => {
    localStorage.setItem('myKey', value);
    set({ storedValue: value });
  },
  refreshStoredValue: () => {
    const stored = localStorage.getItem('myKey') || '';
    set({ storedValue: stored });
  },
}));


// export default function ExampleComponent() {
//   const { storedValue, setStoredValue, getStoredValue } = useStore();

//   return (
//     <div>
//       <p>Stored Value: {storedValue || 'No value set'}</p>
//       <input
//         type="text"
//         value={storedValue}
//         onChange={(e) => setStoredValue(e.target.value)}
//         placeholder="Enter a value"
//       />
//     </div>
//   );
// }

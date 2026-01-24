// // updateStates.ts

// type SetState<T extends Record<string, unknown>> = React.Dispatch<React.SetStateAction<T>>;

// // Overload: Single key-value update
// export function updateStates<T extends Record<string, unknown>, K extends keyof T>(
//   setState: SetState<T>,
//   key: K,
//   value: T[K]
// ): void;

// // Overload: Multiple updates with partial object
// export function updateStates<T extends Record<string, unknown>>(
//   setState: SetState<T>,
//   updates: Partial<T>
// ): void;

// // Unified implementation
// export function updateStates<T extends Record<string, unknown>>(
//   setState: SetState<T>,
//   keyOrUpdates: keyof T | Partial<T>,
//   value?: unknown
// ): void {
//   // If `keyOrUpdates` is a string, treat as single update
//   if (typeof keyOrUpdates === 'string') {
//     const key = keyOrUpdates;
//     setState(prev => ({
//       ...prev,
//       [key]: value as T[typeof key],
//     }));
//   } else {
//     // Here TypeScript now knows it's Partial<T>
//     const updates = keyOrUpdates as Partial<T>;
//     setState(prev => ({
//       ...prev,
//       ...updates,
//     }));
//   }
// }

// //  updateStates(setStates, { age: 30, isActive: true })


type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

// Overload: single key-value update
export function updateStates<T, K extends keyof T>(
  setState: SetState<T>,
  key: K,
  value: T[K]
): void;

// Overload: partial object update
export function updateStates<T>(
  setState: SetState<T>,
  updates: Partial<T>
): void;

// Implementation
export function updateStates<T>(
  setState: SetState<T>,
  keyOrUpdates: keyof T | Partial<T>,
  value?: unknown
): void {
  if (typeof keyOrUpdates === 'string') {
    const key = keyOrUpdates;
    setState(prev => ({
      ...prev,
      [key]: value as T[typeof key],
    }));
  } else {
    const updates = keyOrUpdates as Partial<T>;
    setState(prev => ({
      ...prev,
      ...updates,
    }));
  }
}

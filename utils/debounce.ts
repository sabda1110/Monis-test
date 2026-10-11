export interface DebouncedCallback<T> {
  (value: T): void;
  cancel: () => void;
}

export function createDebouncedCallback<T>(
  callback: (value: T) => void,
  delayMs: number
): DebouncedCallback<T> {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  const debounced = (value: T): void => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      callback(value);
      timeoutId = null;
    }, delayMs);
  };

  debounced.cancel = (): void => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };

  return debounced;
}

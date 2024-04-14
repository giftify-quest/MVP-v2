type Timer = ReturnType<typeof setTimeout>;

type DebounceFunction<T extends (...args: any[]) => any> = (
  func: T,
  delay: number
) => (...args: Parameters<T>) => void;

export const debounce: DebounceFunction<(...args: any[]) => any> = (func, delay) => {
  let timerId: Timer;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => func(...args), delay);
  };
};



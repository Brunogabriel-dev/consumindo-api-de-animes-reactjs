import { useRef } from "react";

export default function useDebounce(fn, delay) {
  const timeoutRef = useRef(null)
  
  function debouncedFn(...args) {
    window.clearTimeout()
    timeoutRef.current = window.setTimeout(() => {
      fn(...args);
    }, delay);
    
  }

  return debouncedFn;
}
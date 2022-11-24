import { useState, useEffect } from 'react';

export function useLocaleStorage(initial) {
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem('contacts')) || initial
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(state));
  }, [state]);

  return [state, setState];
}

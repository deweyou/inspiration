import { useRef } from 'react';

export const useWillMount = (cb: () => void) => {
  const hasRun = useRef(false);

  if (!hasRun.current) {
    hasRun.current = true;
    cb();
  }
};

// Libararies
import { useState, useEffect } from 'react';

// Local
interface WindowProps {
    height: number,
    width: number,
}
const getWidthAndHeight = (): WindowProps => {
  const { innerWidth, innerHeight } = window;
  return {
    width: innerWidth,
    height: innerHeight,
  };
}

const getWindowDimensions = (): WindowProps => {
  const [windowDimensions, setWindowDimensions] = useState(getWidthAndHeight());

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWidthAndHeight());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export default getWindowDimensions;
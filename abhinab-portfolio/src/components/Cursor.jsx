import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const Cursor = () => {
  const [hovering, setHovering] = useState(false);

  // Fast dot springs
  const dotX = useSpring(0, { stiffness: 700, damping: 28 });
  const dotY = useSpring(0, { stiffness: 700, damping: 28 });

  useEffect(() => {
    const move = (e) => {
      dotX.set(e.clientX - 7);
      dotY.set(e.clientY - 7);
    };
    const over = (e) => setHovering(!!e.target.closest('a, button, .interactive'));

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, [dotX, dotY]);

  return (
    <motion.div
      className={`cursor${hovering ? ' hover' : ''}`}
      style={{ left: dotX, top: dotY }}
    />
  );
};

export default Cursor;

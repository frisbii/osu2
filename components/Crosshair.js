import { useState } from 'react';

export default function Crosshair() {
  const [position, setPosition] = useState({x: 0, y: 0});
  return (
    <div
      onPointerMove={e => {
        const bounds = e.currentTarget.getBoundingClientRect();
        console.log(bounds)
        setPosition({
          x: e.clientX - bounds.left,
          y: e.clientY - bounds.top
        });
      }}
      style={{
        width: '100vw',
        height: '100vh',
      }}>
      <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20,
      }} />
    </div>
  );
}

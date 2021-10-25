import React, { useEffect } from 'react';

export default function Popup() {
  const [hide, setHide] = React.useState(false);
  const [coord, setCoord] = React.useState({ x: 0, y: 0 });
  const [fakeCurrentDate, setFakeCurrentDate] = React.useState(new Date());

  const close = () => {
    setHide(true);
    setTimeout(() => {
      setHide(false);
    }, 5000);
  };

  useEffect(() => {
    setTimeout(() => setFakeCurrentDate(new Date()), 600);
    const ww = window.innerWidth;
    const wh = window.innerHeight;
    const posx = Math.round(Math.random() * ww) - 20;
    const posy = Math.round(Math.random() * wh) - 20;
    setCoord({ x: posx, y: posy });
  }, [fakeCurrentDate]);

  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="./error-37.jpg"
        alt=""
        className={`popup ${hide ? 'hide' : ''}`}
        style={{ top: coord.y, left: coord.x }}
        onClick={close}
      />
    </div>
  );
}

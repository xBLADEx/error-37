import React, { useEffect } from 'react';

export default function Skull() {
  const [hide, setHide] = React.useState(true);

  const [fakeCurrentDate, setFakeCurrentDate] = React.useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      setHide(false);
      setFakeCurrentDate(new Date());
    }, 20000);
    setTimeout(() => {
      setHide(true);
    }, 1000);
  }, [fakeCurrentDate]);

  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="./skull.gif" alt="" className={`skull ${hide ? 'hide' : ''}`} width="800" />
    </div>
  );
}

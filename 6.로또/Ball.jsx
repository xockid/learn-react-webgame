import React, { memo } from "react";

const Ball = memo(({ number }) => {
  let borderColor;
  if (number <= 10) {
    borderColor = 'red';
  } else if (number <= 20) {
    borderColor = 'orange';
  } else if (number <= 30) {
    borderColor = 'darkorchid';
  } else if (number <= 40) {
    borderColor = 'royalblue';
  } else {
    borderColor = 'forestgreen';
  }
  return (
    <div className="ball" style={{ borderColor }}>{number}</div>
  );
});

export default Ball;
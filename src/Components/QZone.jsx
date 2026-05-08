import React from "react";
import classes from '../assets/class.png';
import swimming from '../assets/swimming.png';
import playground from '../assets/playground.png';


const QZone = () => {
  return (
    <div className="bg-base-200 p-3">
      <h2 className="font-bold mb-5">Q-Zone</h2>
      <div className="flex flex-col items-center justify-center">
        <img src={classes} alt="Class" />
        <img src={swimming} alt="Swimming" />
        <img src={playground} alt="Playground" />
      </div>
    </div>
  );
};

export default QZone;

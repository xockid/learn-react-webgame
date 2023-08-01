import React, { useState, useRef, useEffect } from "react";
import useInterval from "./useInterval";

const rpsCoords = {
  가위: '-450px',
  바위: '-105px',
  보: '-280px',
};

const scores = {
  가위: 1,
  바위: 0,
  보: -1,
};

const computerChoice = (imgCoord) => {
  return Object.entries(rpsCoords).find(function(v) {
    return v[1] === imgCoord;
  })[0];
}

const RPS = () => {
  const [result, setResult] = useState('');
  const [imgCoord, setImgCoord] = useState(rpsCoords.가위);
  const [score, setScore] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const changeHand = () => {
    if (imgCoord === rpsCoords.가위) {
      setImgCoord(rpsCoords.바위);
    } else if (imgCoord === rpsCoords.바위) {
      setImgCoord(rpsCoords.보);
    } else if (imgCoord === rpsCoords.보) {
      setImgCoord(rpsCoords.가위);
    }
  };

  useInterval(changeHand, isRunning ? 100: null);

  const onClickBtn = (choice) => () => {
    if (isRunning) {
      setIsRunning(false);
      const myScore = scores[choice];
      const cpuScroe = scores[computerChoice(imgCoord)];
      const diff = myScore - cpuScroe;
      if (diff === 0) {
        setResult('비겼습니다.');
      } else if ([-1, 2].includes(diff)) {
        setResult('이겼습니다!');
        setScore((prevScore) => prevScore + 1);
      } else {
        setResult('졌습니다.');
        setScore((prevScore) => prevScore - 1);
      }
      setTimeout(() => {
        setIsRunning(true);
      }, 2000);
    }
  };

  return (
    <>
      <div id="computer" style={{ background: `url(https://t4.ftcdn.net/jpg/03/32/86/27/360_F_332862747_zb0oXy6txyqlopzJAW3UNQJCPxTg7eUx.jpg) ${imgCoord} 0` }} />
      <div>
        <button id="scissors" className="btn" onClick={onClickBtn('가위')}>가위</button>
        <button id="rock" className="btn" onClick={onClickBtn('바위')}>바위</button>
        <button id="paper" className="btn" onClick={onClickBtn('보')}>보</button>
      </div>
      <div>{result}</div>
      <div>현재 {score}점</div>
    </>
  );
}

export default RPS;
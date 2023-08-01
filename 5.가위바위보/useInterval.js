import { useRef, useEffect } from 'react';

// const [isRunning, setRunning] = useState(true);
// useInterval(() => {
//   console.log('hello');
// }, isRunning ? 1000 : null);


// 1초 뒤에 가위
// 1.1초 뒤에 changeHand
// 2.1초 뒤에 바위
// 2.2초 뒤에 changeHand
// 3.2초 뒤에 보
// ...
// function useInterval(callback, delay) {
//   useEffect(() => {
//     if (delay !== null) {
//       let id = setInterval(callback, delay);
//       //setInterval은 호출되고 나서 delay 이후에 callback을 실행한다.
//       //따라서 1.1초 + 1초 = 2.1초
//       return () => clearInterval(id);
//     }
//   }, [delay, callback]); //여기에 callback을 받으면 미세한 delay가 발생하기 때문에 useRef 사용

//   return callback;
// }

function useInterval(callback, delay) {
  const savedCallback = useRef();
  //useRef를 사용하게 되면 setInterval, clearInterval은 delay가 바뀔 때만 실행된다.
  //callback이 바뀌어도 새로 setInterval이 안되지만 최신 callback을 참조 가능하다!

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);

  return savedCallback.current;
}

export default useInterval;
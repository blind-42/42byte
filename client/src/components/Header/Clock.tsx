import { useState, useEffect, useRef } from 'react';
import Moment from 'react-moment';
import { TimeBox } from './styled';

interface IUseInterval {
  (callback: () => void, interval: number): void;
}

export default function Clock() {
  const [nowTime, setNowTime] = useState(Date.now());
  const [delay, setDelay] = useState(1000);

  useInterval(() => {
    setNowTime(Date.now());
  }, delay);

  return (
    <>
      <TimeBox>
        <Moment format="HH:mm">{nowTime}</Moment>
      </TimeBox>
    </>
  );
}

const useInterval: IUseInterval = (callback, delay) => {
  const savedCallback = useRef<(() => void) | null>(null);

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
};

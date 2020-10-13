import { FC, useState } from "react";

type props = {
  startCount?: number;
};

const Clicker: FC<props> = ({ startCount = 0 }) => {
  const [counter, setCounter] = useState(startCount);

  return (
    <div>
      <p role="text" data-counter={counter}>
        You have clicked the button {counter} times.
      </p>
      <button
        data-testid="counter-increase"
        onClick={() => setCounter(c => c + 1)}
      >
        Click me!
      </button>
      <button
        data-testid="counter-reset"
        onClick={() => setCounter(startCount)}
      >
        Reset!
      </button>
    </div>
  );
};

export default Clicker;

import * as d3 from "d3";
import init from ".";
import { useLayoutEffect, useRef } from "react";

const css = `
text {
  font: bold 28px monospace;
}

.enter {
  fill: green;
}

.update {
  fill: #333;
}

.exit {
  fill: brown;
}
`;

export default {
  component: init,
};

const ALPHABETS = "abcdefghijklmnopqrstuvwxyz".split("");

const getLetters = () =>
  d3
    .shuffle(ALPHABETS)
    .slice(0, Math.floor(Math.random() * 26))
    .sort();

export const normal = () => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const update = init(ref.current);

    update(ALPHABETS);
    const id = setInterval(() => {
      update(getLetters());
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <>
      <div ref={ref} />
      <style>{css}</style>
    </>
  );
};

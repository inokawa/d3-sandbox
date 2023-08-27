import init from ".";
import { getRangedData } from "../randamDataCreator";
import { useLayoutEffect, useRef } from "react";

export default {
  component: init,
};

export const normal = () => {
  const ref = useRef(null);
  useLayoutEffect(() => {
    const update = init(ref.current, {
      key: "value",
      label: "値",
    });

    update(getRangedData(1000));
    const id = setInterval(() => {
      update(getRangedData(1000));
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <>
      <div ref={ref} />
    </>
  );
};

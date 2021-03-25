import React from "react";

export default function DelayUnmounting(time = 1600) {
  const [mountState, setState] = React.useState("unmounted");
  const show = () => {
    if (mountState === "unmounting") {
      return;
    }
    setState("mounting");
  };
  const hide = () => {
    if (mountState === "mounting") {
      return;
    }
    setState("unmounting");
  };

  React.useEffect(() => {
    let timeoutId;
    if (mountState === "unmounting") {
      timeoutId = setTimeout(() => {
        setState("unmounted");
      }, time);
    } else if (mountState === "mounting") {
      timeoutId = setTimeout(() => {
        setState("mounted");
      }, time);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [mountState, time]);

  return [mountState, show, hide];
}

export const throttleFunction = function (func, delay) {
  let timerId;
  return (e) => {
    if (timerId) {
      return;
    }
    timerId = setTimeout(function () {
      func(e);
      timerId = undefined;
    }, delay);
  };
};

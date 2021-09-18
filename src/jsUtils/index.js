export const throttleFunction = function (func, delay) {
  let timerId;
  return (e) => {
    /** e.preventDefault(); used to disable
      mobile browsers default scrolling 
      which effect touch game play*/
    e.preventDefault();
    if (timerId) {
      return;
    }
    timerId = setTimeout(function () {
      func(e);
      timerId = undefined;
    }, delay);
  };
};

import React, { useState, useEffect } from "react";
import styles from "./game.module.scss";
import { useInterval } from "../../../customHooks/useInterval";
import Button from "../../atoms/Button";
import Heading from "../../atoms/Heading";
import BackButton from "../../atoms/BackButton";
import { throttleFunction } from "../../../jsUtils";

const getRandomInt = (max) => Math.floor(Math.random() * max);
const content = {
  heading: "Brain Game",
  description: "This game is developed in ReactJS with ❤️.",
  instruction: "You can use arrow keys or swipe to play.",
  startBtn: "START GAME",
  stopBtn: "PAUSE GAME",
};

const Game = () => {
  const [moveDirection, setMoveDirection] = useState("right");
  const [gameSpeed, setGameSpeed] = useState(null);
  const [score, setScore] = useState(0);
  const [foodPosition, setFoodPosition] = useState({ top: "10%", left: "90%" });
  const [lastTouchAxis, setLastTouchAxis] = useState({ x: 0, y: 0 });
  const myStateRef = React.useRef(lastTouchAxis);
  const setLastTouchAxisOutSideListener = (data) => {
    myStateRef.current = data;
    setLastTouchAxis(data);
  };
  const maxPosition = 94;
  const minPosition = 0;
  const getValidPosition = (position) => {
    const intPosition = parseInt(position);
    if (intPosition >= maxPosition) {
      return minPosition;
    }
    if (intPosition <= minPosition) {
      return maxPosition;
    }
    if (!intPosition) {
      return 50;
    }
    return intPosition;
  };
  const setNewFood = () => {
    // food emoji should between 95% max and 1% min
    const newTop = `${getRandomInt(maxPosition) + 1}%`;
    const newLeft = `${getRandomInt(maxPosition) + 1}%`;
    const foodElm = document.getElementById("food");
    foodElm.style.top = newTop;
    foodElm.style.left = newLeft;
    setFoodPosition({ top: newTop, left: newLeft });
  };
  const checkFood = () => {
    const playerElm = document.getElementById("player");
    const playerTop = parseInt(playerElm.style.top);
    const playerLeft = parseInt(playerElm.style.left);
    const foodTop = parseInt(foodPosition.top);
    const foodLeft = parseInt(foodPosition.left);
    if (
      playerTop >= foodTop - 3 &&
      playerTop <= foodTop + 3 &&
      playerLeft >= foodLeft - 3 &&
      playerLeft <= foodLeft + 3
    ) {
      setNewFood();
      setScore(score + 1);
    }
  };
  const movePlayer = ({ direction, isIncrement }) => {
    const val = isIncrement ? 1 : -1;
    const playerElm = document.getElementById("player");
    if (playerElm) {
      checkFood();
      if (direction === "top") {
        const currentPosition = playerElm.style.top;
        const validPosition = getValidPosition(currentPosition);
        playerElm.style.top = `${validPosition + val}%`;
      } else {
        const currentPosition = playerElm.style.left;
        const validPosition = getValidPosition(currentPosition);
        playerElm.style.left = `${validPosition + val}%`;
      }
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleController);
    document.body.addEventListener("touchmove", throttledTouchEvent, {
      passive: false,
    });
    document.addEventListener("touchcancel", handleTouchCancel);
    setNewFood();
    return () => {
      document.removeEventListener("keydown", handleController);
      document.body.removeEventListener("touchmove", throttledTouchEvent);
      document.removeEventListener("touchcancel", handleTouchCancel);
    };
  }, []);

  const handleTouchCancel = () => {
    alert("Something went wrong!! Please refresh the page.");
  };

  useInterval(() => {
    switch (moveDirection) {
      case "top":
        movePlayer({ direction: "top", isIncrement: false });
        break;
      case "bottom":
        movePlayer({ direction: "top", isIncrement: true });
        break;
      case "left":
        movePlayer({ direction: "left", isIncrement: false });
        break;
      case "right":
        movePlayer({ direction: "left", isIncrement: true });
        break;
    }
  }, gameSpeed);

  const startGame = () => {
    setGameSpeed(70);
  };

  const stopGame = () => {
    setGameSpeed(null);
  };

  const handleTouch = (e) => {
    if (e.touches) {
      const { x, y } = myStateRef.current;
      const userX = Math.floor(e.touches[0].clientX);
      const userY = Math.floor(e.touches[0].clientY);
      const xDiff = userX - x;
      const yDiff = userY - y;
      const moveAxisVal = Math.abs(xDiff) > Math.abs(yDiff) ? xDiff : yDiff;
      const isXAxis = Math.abs(xDiff) > Math.abs(yDiff);
      const isIncrement = Math.sign(moveAxisVal) > 0;
      if (isXAxis && isIncrement) {
        setMoveDirection("right");
      } else if (isXAxis && !isIncrement) {
        setMoveDirection("left");
      } else if (!isXAxis && isIncrement) {
        setMoveDirection("bottom");
      } else if (!isXAxis && !isIncrement) {
        setMoveDirection("top");
      }
      setLastTouchAxisOutSideListener({ x: userX, y: userY });
    }
  };

  const throttledTouchEvent = throttleFunction(handleTouch, 70);

  const handleController = (e) => {
    if (e.keyCode) {
      switch (e.keyCode) {
        case 38:
          setMoveDirection("top");
          break;
        case 40:
          setMoveDirection("bottom");
          break;
        case 37:
          setMoveDirection("left");
          break;
        case 39:
          setMoveDirection("right");
          break;
      }
    }
  };
  return (
    <div id="game-container" className={styles.gameContainer}>
      <BackButton />
      <Heading content={content.heading} Type="h1" />
      <p className={styles.description}>{content.description}</p>
      <p className={styles.instruction}>{content.instruction}</p>
      <output className={styles.result}>Score: {score}</output>
      <div className={styles.screen}>
        <div id="player" className={styles.player}>
          🧠
        </div>
        <div id="food" className={styles.food}>
          📚
        </div>
      </div>
      <div className={styles.playControl}>
        <Button
          content={content.startBtn}
          type="button"
          handler={startGame}
          variant="game"
        />
        <Button
          content={content.stopBtn}
          type="button"
          handler={stopGame}
          variant="game"
        />
      </div>
    </div>
  );
};

export default Game;

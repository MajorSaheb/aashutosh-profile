import { useState } from "react";

export function useDarkMode() {
  const [isDarkTheme, setTheme] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      setTheme(e.matches);
    });
  return isDarkTheme;
}

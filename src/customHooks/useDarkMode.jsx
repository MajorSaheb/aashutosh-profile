import { useEffect, useState } from "react";

export function useDarkMode() {
  const [isDarkTheme, setTheme] = useState(false);

  const updateTheme = (e) => {
    setTheme(e.matches);
  };

  useEffect(() => {
    setTheme(
      window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", updateTheme);
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", updateTheme);
    };
  }, []);

  return isDarkTheme;
}

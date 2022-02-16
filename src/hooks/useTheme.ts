import { useCallback, useEffect, useState } from "react";

const useTheme = (): [typeof theme, typeof toggleTheme] => {
  const getInitialTheme = useCallback(() => {
    let theme =
      window.localStorage.getItem("simple-creator-ui-theme") ||
      ("dark" as "light" | "dark" | null);

    const INVALID_THEME = theme !== "light" && theme !== "dark";

    if (!theme || INVALID_THEME) {
      const { matches } = window.matchMedia("(prefers-color-scheme: dark)");
      theme = matches ? "dark" : "light";
    }
    return theme;
  }, []);

  const [theme, setTheme] = useState(null);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }, []);

  useEffect(() => {
    const initTheme = async () => await setTheme(getInitialTheme);
    initTheme();
  }, []);

  useEffect(() => {
    window.localStorage.setItem("simple-creator-ui-theme", theme);
  }, [theme]);

  return [theme || "dark", toggleTheme];
};

export default useTheme;

import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function Footer() {
  const theme = useContext(ThemeContext);
  return <footer className={theme.color}>Tema Atual: {theme.color}</footer>
}

import { themes } from "../data/theme.ts";
import type { Theme, ThemeColors } from "../data/theme.ts";
import { useState, type JSX } from "react";
import "../App.css";
import Navbar from "../components/Navbar.tsx";

function ThemeInput() {
  return (
    <div>
     <Navbar />
    </div>
  );
}

export default ThemeInput;

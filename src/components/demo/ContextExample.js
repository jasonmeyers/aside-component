import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();

export default function ContextExample() {
  const [themes, setThemes] = useState({
    light: {
      foreground: "green",
      background: "blue",
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222",
    },
  });
  return (
    <ThemeContext.Provider value={themes}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const garbageThing = useContext(ThemeContext);
  console.log(garbageThing);

  return (
    <button
      style={{
        background: garbageThing.light.background,
        color: garbageThing.light.foreground,
      }}
      onClick={() => console.log(garbageThing)}
    >
      I am styled by theme context!
    </button>
  );
}

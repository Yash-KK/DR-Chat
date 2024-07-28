import React from "react";

interface ColorModeContextProps {
  toggleColorMode: () => void;
}

const ColorModeContext = React.createContext<ColorModeContextProps>({
  toggleColorMode: () => {},
});

export default ColorModeContext;

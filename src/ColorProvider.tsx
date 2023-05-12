import { ReactNode, createContext, useContext, useState } from "react";
import colorData from "./color-data.json";
import { v4 } from "uuid";

type ContextType = {
  colors: { id: string; title: string; color: string; rating: number }[];
  addColor: (title: string, color: string) => void;
  rateColor: (id: string, rating: number) => void;
  removeColor: (id: string) => void;
};

export const ColorContext = createContext<ContextType>({
  colors: [],
  addColor: function (title: string, color: string): void {
    throw new Error("Function not implemented.");
  },
  rateColor: function (id: string, rating: number): void {
    throw new Error("Function not implemented.");
  },
  removeColor: function (id: string): void {
    throw new Error("Function not implemented.");
  },
});
export const useColors = () => useContext(ColorContext);

type Props = {
  children: ReactNode;
};

export const ColorProvider = ({ children }: Props) => {
  const [colors, setColors] = useState(colorData);

  const addColor = (title: string, color: string) =>
    setColors([...colors, { id: v4(), rating: 0, title, color }]);

  const rateColor = (id: string, rating: number) =>
    setColors(
      colors.map((color) => (color.id === id ? { ...color, rating } : color))
    );

  const removeColor = (id: string) =>
    setColors(colors.filter((color) => color.id !== id));

  return (
    <ColorContext.Provider value={{ colors, addColor, rateColor, removeColor }}>
      {children}
    </ColorContext.Provider>
  );
};

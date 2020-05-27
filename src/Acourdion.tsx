import React, { CSSProperties, FC, useState } from "react";

interface Item {
  title: string;
  itemId: number;
  top: string;
  middle: string;
  bottom: string;
  imaUrl: string;
  link: string;
}
interface PanelProps {
  items: Item[];
  height?: string;
  textStyles?: CSSProperties;
}

const Acourdion: FC<PanelProps> = ({ items, height, textStyles }) => {
  const [activate, setActivate] = useState(-1);

  const handleActivate = (id: number) => {
    const value: number = id === activate ? -1 : id;
    setActivate(value);
  };

  return (
    <div className="panels" data-test="panels-container">
      {items.map(item => (
        <Panel />
      ))}
    </div>
  );
};
export default Acourdion;

import React from "react";
import { CardContainer } from "../styles";
interface CardProps {
  taskName: string;
}

export const Card: React.FC<CardProps> = ({ taskName }) => {
  return <CardContainer>{taskName}</CardContainer>;
};
export default Card;

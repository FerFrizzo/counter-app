import React from "react";
import "./Title.css";

type TitleProps = {
  text: string;
};

export const Title = ( props: TitleProps ) => {
  return <h1 className="title">{props.text}</h1>;
};
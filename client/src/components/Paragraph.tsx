import React from "react";
import './Paragraph.css';

type ParagraphProps = {
  text: string;
  logout?: ( e: React.FormEvent<HTMLAnchorElement> ) => void;
};

export const Paragraph = ( { text, logout }: ParagraphProps ) => {
  return (
    <h3 className='paragraph'>{text} {logout && ( <a href='#' onClick={logout}>logout</a> )}</h3>
  )
};
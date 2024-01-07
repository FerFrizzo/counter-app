import React from 'react';
import './IncreaseButton.css';

type IncreaseButtonProps = {
  onClickAction: ( e: React.FormEvent<HTMLButtonElement> ) => void,
  text: string
}

export const IncreaseButton = ( props: IncreaseButtonProps ) => {
  return (
    <button className='increaseButton' onClick={props.onClickAction}>{props.text}</button>
  )
};
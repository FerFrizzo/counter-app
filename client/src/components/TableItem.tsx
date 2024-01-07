import React from "react";
import "./TableItem.css";

type TableItemProps = {
  username: string;
  count: number;
};

export const TableItem = ( { username, count }: TableItemProps ) => {
  return (
    <tr className='item' key={username}>
      <td key={username}>{username}</td>
      <td key={count}>{count}</td>
    </tr>
  )
}
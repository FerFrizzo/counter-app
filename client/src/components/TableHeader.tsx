import React from "react";
import './TableHeader.css';

type TableHeaderProps = {
  columns: string[];
};

export const TableHeader = ( { columns }: TableHeaderProps ) => {
  return (
    <thead className="tableHeader">
      <tr className='columns'>
        {columns.map( ( column, index ) => (
          <th key={index}>{column}</th>
        ) )}
      </tr>
    </thead>
  )
};
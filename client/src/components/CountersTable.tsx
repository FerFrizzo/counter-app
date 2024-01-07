import React from "react";
import { TableHeader } from "./TableHeader";
import { TableItem } from "./TableItem";

type CountersTableProps = {
  counters: Record<string, number>;
};

export const CountersTable = ( { counters }: CountersTableProps ) => {
  return (
    <div>
      <TableHeader columns={['Username', 'Count']} />
      {
        Object.keys( counters ).map( ( username ) => (
          <TableItem key={username} username={username} count={counters[username]} />
        ) )
      }
    </div>
  )
}
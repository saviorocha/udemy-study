import Link from "next/link";
import React from "react";

const ClientIndex = () => {
  const clients = [
    { id: "max", name: "maxwell" },
    { id: "manu", name: "manuel" },
  ];
  // console.log(clients);
  return (
    <div>
      <h1>Client index</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientIndex;

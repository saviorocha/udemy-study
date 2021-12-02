import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Client = () => {
  const router = useRouter();

  function loadProjectHandler() {
    router.push({
      pathname: "/clients/[id]/[clientid]",
      query: { id: "max", clientid: "projectA" },
    });
  }

  return (
    <div>
      <h1>Client Project Page</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default Client;

import { useRouter } from "next/router";
import React from "react";

const SelectedClient = () => {
  const router = useRouter();
  console.log("router", router.query);

  return (
    <div>
      <h1>Selected Client</h1>
    </div>
  );
};

export default SelectedClient;

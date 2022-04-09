import React from "react";

const UserIdPage = ({ id }) => {
  return <h1>{id}</h1>;
};

export async function getServerSideProps({ params }) {
  const userId = params.uid;
  console.log(params);
  return {
    props: {
      id: "userid-" + userId,
    },
  };
}

export default UserIdPage;

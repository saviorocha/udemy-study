import React from "react";

const UserProfilePage = ({ username }) => {
  return <h1>{username}</h1>;
};

export async function getServerSideProps({ req, res }) {
  // no context do getServerSideProps se tem acesso à dados do request e response

  return {
    props: {
      username: "Max",
    },
  };
}

export default UserProfilePage;

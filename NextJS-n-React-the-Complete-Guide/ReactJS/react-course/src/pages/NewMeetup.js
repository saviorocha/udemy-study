import { useHistory } from "react-router-dom";
import React from "react";
import NewMeetupForm from "../components/meetup/NewMeetupForm";

function NewMeetupPage() {
  const history = useHistory();
  function addMeetupHandler(meetupData) {
    fetch("https://{MY-URL}/", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>New Meetup</h1>
      <NewMeetupForm onMeetupAdd={addMeetupHandler}></NewMeetupForm>
    </section>
  );
}

export default NewMeetupPage;

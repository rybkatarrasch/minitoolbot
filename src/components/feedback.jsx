import React, { useState } from "react";
import axios from "axios";

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  // header('Access-Control-Allow-Origin: http://localhost:3000');
  // header('Access-Control-Allow-Methods: GET, POST');
  // header("Access-Control-Allow-Headers: X-Requested-With");
  // header('Access-Control-Allow-Headers: Content-Type');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("https://coinfos.com/feedbackstab.php", {
        name: name,
        email: email,
        feedback: feedback,
      })
      .then((response) => {
        if (response.status === 200) {
          setStatus("success");
        }
      })
      .catch((error) => {
        console.error(error.message);
        setStatus("error");
      });
  };

  return (
    <div>
      {status === "success" ? (
        <p>Thank you for your feedback!</p>
      ) : status === "error" ? (
        <p>
          There was an error submitting your feedback. Please try again later.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="name (optional)"
          />
          <label htmlFor="email">email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="email (optional)"
          />

          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            name="feedback"
            value={feedback}
            onChange={(event) => setFeedback(event.target.value)}
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

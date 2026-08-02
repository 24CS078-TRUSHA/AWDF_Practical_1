import { useState } from "react";
import "./Contact.css";

function Contact() {
  // useState #2: controlled form input
  const [message, setMessage] = useState("");

  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <section className="contact-page">
      <h2>Contact Me</h2>
      <p>Have a question? Send a message below.</p>

      <div className="form-group">
        <label htmlFor="message">
          Message
        </label>

        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
          rows={5}
        />

        <p className="char-count">{message.length} characters</p>
      </div>

      {message && (
        <div className="live-preview">
          <h3>Live Preview</h3>
          <p>{message}</p>
        </div>
      )}
    </section>
  );
}

export default Contact;

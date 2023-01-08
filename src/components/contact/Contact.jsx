import { useState } from "react";
import "./contact.scss";
import { MdPerson, MdMail } from "react-icons/md";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact-container">
      <h1>Let's Connect</h1>
      <div className="contact" id="contact">
        <div className="left">
          <img src="images/handshake.png" alt="" />
        </div>
        <div className="right">
          {/* <h2>Contact.</h2> */}
          <div className="item-container">
            <MdPerson className="icon" />
            <span>+234 803 917 2294</span>
          </div>
          <div className="item-container">
            <MdMail className="icon" />
            <span>chisomchima370@gmail.com</span>
          </div>
          <div className="item-container">
          <a href="https://linkedin.com/in/chima-chisom-03685a195"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH1gaG9wl4n7dYyzxcMOESd4jxqvz0LmyNA&usqp=CAU" className="left" alt="" /></a>
          <a href="https://twitter.com/chimachisom1"><img src="https://www.pngitem.com/pimgs/m/3-38684_twitter-logo-png-transparent-background-transparent-background-twitter.png" className="left" alt="" /></a>
          <a href="https://github.com/Chisomchima"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" className="left" alt="" /></a>
          </div>
        </div>
        {/* <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div> */}
      </div>
    </div>
  );
}

import mail from "../assets/Mail.png";
import linkedBtn from "../assets/linkedin_nano.png";

export default function MainContent() {
  return (
    <div className="mainContent">
      <h2 className="mainContent-h2">Hritik Singh</h2>
      <h3 className="mainContent-h3">Frontend Developer</h3>
      <p className="mainContent-p1">Hritik.website</p>
      <div className="btn-Container">
        <button className="emailBtn">
          <img src={mail} alt="" /> Email
        </button>
        <button className="linkedInBtn">
          <img src={linkedBtn} alt="" />
          LinkedIn
        </button>
      </div>
      <h3 className="mainContent-abt">About</h3>
      <p className="mainContent-p2">
        I am a frontend developer with a particular interest in making things
        simple and automating daily tasks. I try to keep up with security and
        best practices, and am always looking for new things to learn.
      </p>
      <h3 className="mainContent-Int">Interest</h3>
      <p className="mainContent-p3">
        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
        Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
      </p>
    </div>
  );
}

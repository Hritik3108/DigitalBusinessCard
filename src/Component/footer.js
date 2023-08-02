import fb from "../assets/Facebook.png";
import git from "../assets/GitHub.png";
import insta from "../assets/Instagram.png";
import tweet from "../assets/Twitter.png";

export default function Footer() {
  return (
    <div className="foot">
      <div className="footImg">
        <img src={tweet} alt="" className="foot-img1" />
        <img src={fb} alt="" className="foot-img2" />
        <img src={insta} alt="" className="foot-img3" />
        <img src={git} alt="" className="foot-img4" />
      </div>
    </div>
  );
}

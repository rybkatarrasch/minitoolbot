import "./footer.css";
import fb from "../images/fb.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";
import redit from "../images/redit.png";
import telegram from "../images/telegram.png";
import whatsapp from "../images/whatsapp.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Footer() {
  const shareFacebook = () => {
    const fbShareUrl =
      "https://www.facebook.com/sharer/sharer.php?u=" +
      encodeURIComponent("https://www.minitoolbot.com");
    window.open(fbShareUrl, "_blank");
  };
  const shareTwitter = () => {
    const tweetUrl =
      "https://twitter.com/intent/tweet?url=" +
      encodeURIComponent("https://www.minitoolbot.com");
    window.open(tweetUrl, "_blank");
  };
  const shareTelegram = () => {
    const shareUrl =
      "https://t.me/share/url?url=" +
      encodeURIComponent("https://www.minitoolbot.com");
    window.open(shareUrl, "_blank");
  };
  const shareReddit = () => {
    const shareUrl =
      "https://www.reddit.com/submit?url=" +
      encodeURIComponent("https://www.minitoolbot.com");
    window.open(shareUrl, "_blank");
  };

  const shareLinkedIn = () => {
    const shareUrl =
      "https://www.linkedin.com/sharing/share-offsite/?url=" +
      encodeURIComponent("https://www.minitoolbot.com");
    window.open(shareUrl, "_blank");
  };

  const shareWhatsApp = () => {
    const shareUrl =
      "https://api.whatsapp.com/send?text=" +
      encodeURIComponent("Check out this link: https://www.minitoolbot.com");
    window.open(shareUrl, "_blank");
  };

  return (
    <div className="my-footer">
      <div>
        <div className="footer-column">
          <img onClick={shareFacebook} src={fb} />
          <img onClick={shareTwitter} src={twitter} />
          <img onClick={shareTelegram} src={telegram} />
          <img onClick={shareLinkedIn} src={linkedin} />
          <img onClick={shareReddit} src={redit} />
          <img onClick={shareWhatsApp} src={whatsapp} />
        </div>
        <div className="footer-column">
          <Link to="terms&condition">Terms of Use</Link>
          <Link to="about">About</Link>
          <Link to="privacy-policy">Privacy Policy</Link>
        </div>
        <div className="footer-column credits">
          <h4>Credits for the Icons</h4>
          <a
            href="https://www.flaticon.com/free-animated-icons/luggage"
            title="luggage animated icons"
          >
            Luggage animated icons created by Freepik - Flaticon
          </a>
          <a
            href="https://www.flaticon.com/free-animated-icons/measuring-tape"
            title="measuring tape animated icons"
          >
            Measuring tape animated icons created by Freepik - Flaticon
          </a>
          <a
            href="https://www.flaticon.com/free-animated-icons/code"
            title="code animated icons"
          >
            Code animated icons created by Freepik - Flaticon
          </a>
          <a
            href="https://www.flaticon.com/free-animated-icons/coding"
            title="coding animated icons"
          >
            Coding animated icons created by Freepik - Flaticon
          </a>
        </div>
      </div>
    </div>
  );
}

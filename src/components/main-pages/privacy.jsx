import "./mainpages-css/about.css";
import SideMenus from "./../side-menus";
import { useEffect } from "react";

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  return (
    <div className="content-container">
      <div>
        <div id="content-explain">
          <h2>Privacy Policy</h2>
          <p>
            <h4>General </h4>{" "}
            <p>
              Using this website minitoolbot.com doesn’t require user to signup
              of log in. We don’t share data or sell or rent them.
            </p>
            <h4>Google Analytics</h4>{" "}
            <p>
              This website minitoolbot.com uses Google Analytics to monitor the
              usage of the website and the tools within this website. Cookies
              are being used by Google Analytics to collect statistical data,
              and those data are not personal data like names, emails, or
              anything like that.
            </p>
            <a
              href="https://www.google.com/policies/privacy/partners/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read how Google uses data when you use our partners sites or apps.
            </a>
            <p>Read Also:</p>
            <a
              href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Analytics cookie usage,{" "}
            </a>
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google privacy policy.
            </a>
            <h4>Google AdSense</h4>
            <p>
              this website minitoolbot.com use Google Adsense Programm to show
              ads. Third party vendors, including Google, use cookies to serve
              ads based on a user's prior visits to this website or other
              websites.
            </p>
            <p> you can read:</p>
            <a
              href="https://developers.google.com/third-party-ads/googleads-vendors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read: Google Ads Certified External Vendors.
            </a>
            <p>
              Google uses advertising cookies to enables it and its partners to
              serve ads to the users based on their visit to your sites and/or
              other sites on the Internet.
            </p>
            <h4>Socila Media sharing</h4>
            <p>
              If you click on Social media icons it will take you the social
              media site and you will be ask to share the link provided by
              minitoolbot.com if you don't agree with it just dont share the
              link or don't click the social media share icons at all to begin
              with.
            </p>
            <br />
            <p>Privacy Policy may Update over time</p>
          </p>
        </div>
      </div>

      <div className="menu-ads">
        <div>sample ads</div>
        <div>
          <SideMenus />
        </div>
      </div>
    </div>
  );
}

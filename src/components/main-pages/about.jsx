import "./mainpages-css/about.css";
import SideMenus from "./../side-menus";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  return (
    <div className="content-container">
      <div>
        <div id="content-explain">
          <h2>About</h2>
          <p>
            minitoolbot.com is a free tool and you will not pay a single penny
            of using it. With that by using this website you will not be given
            any form of WARRANTY OF ANY KIND. <br />
            <p>
              minitoolbot.com, its developer, and its contributor will not be of
              any form liable for any damage or any form of loss resulting from
              the use or misuse of minitoolbot.com its content, and its
              information and tools. <br />{" "}
              <p>
                This website minitoolbot.com uses cookies and you can read more
                about it in the Privacy Policy section.
              </p>
            </p>
            <h4>
              By using this website or the tools you can find within
              minitoolbot.com you accept the underlying terms, conditions,
              privacy policies, etc. of this website.{" "}
            </h4>
            The Terms and conditions or disclaimer or privacy policy stated in
            this section or anywhere within this website minitoolbot.com may
            change over time.
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

import AppLogo from "../assets/images/logo.svg?react";
import DataBiz from "../assets/images/client-databiz.svg?react";
import AudioPhile from "../assets/images/client-audiophile.svg?react";
import Meet from "../assets/images/client-meet.svg?react";
import Marker from "../assets/images/client-maker.svg?react";

const Home = () => {
  return (
    <div className="container">
      <header className="header">
        <nav className="header-left">
          <AppLogo />
          <ul>
            <li>feature</li>
            <li>company</li>
            <li>careers</li>
            <li>about</li>
          </ul>
        </nav>
        <div className="header-right">
          <button>login</button>
          <button>register</button>
        </div>
      </header>
      <main className="main">
        <section className="main-body">
          <article>
            <h1>
              Make
              <br />
              remote work
            </h1>
            <p>
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <button>learn more</button>
          </article>
          <ul>
            <li>
              <DataBiz />
            </li>
            <li>
              <AudioPhile />
            </li>
            <li>
              <Meet />
            </li>
            <li>
              <Marker />
            </li>
          </ul>
        </section>
        <section className="main-img">
          <img src="src/assets/images/image-hero-desktop.png"></img>
        </section>
      </main>
    </div>
  );
};

export default Home;

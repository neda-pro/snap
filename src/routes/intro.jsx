import DataBiz from "../assets/images/client-databiz.svg?react";
import AudioPhile from "../assets/images/client-audiophile.svg?react";
import Meet from "../assets/images/client-meet.svg?react";
import Marker from "../assets/images/client-maker.svg?react";

const Intro = () => {
  return (
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
  );
};

export default Intro;

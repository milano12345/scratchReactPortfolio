import React from "react";
import NavBar from "./NavigationBar";
import Footer from "./Footer";

const AboutMe = () => {
  return (
    <div className="projects-grid">
      <NavBar />
      "Welcome to My Page!"
      <div className="wrapper">
        <div className="inner">
          <header>
            <h2>About Me</h2>
          </header>
          <div className="images">
            <img
              className="aboutMeImage"
              src="images/artwork.jpg"
              alt="Daniel Milano"
            />
            <img
              className="aboutMeImage"
              src="images/wakeboard.jpg"
              alt="Daniel Milano"
            />
            <img
              // style={{ width: "32%" }}
              className="aboutMeImage"
              src="https://danielmilano.tech/images/lion.jpg"
              alt="Daniel Milano"
            />
          </div>
          <strong>I'm a Full Stack Web Developer from Colorado, USA.</strong>
          <p style={{ color: "black" }}>
            I enjoy taking complex problems and turning them into simple and
            beautiful designs. I also love the logic and structure of coding and
            always strive to write elegant and efficient code.
          </p>
          <h3 className="major">The Great Outdoors</h3>
          <p style={{ color: "black" }}>
            When I'm not in the office coding, you can find me snowboarding,
            wakeboarding or doing some sort of outdoor activity. I also am a big
            fan of art as whole. I've been sketching since I was 7 and coding
            since I was 13. The artwork seen above was handcreated by myself
            using different mediums. I'm an avid outdoorsman who loves sports as
            much as I love technology.
          </p>
          <section className="features">
            <article>
              <a
                href="https://www.switchbacktravel.com/day-hikes-near-denver"
                className="image"
              >
                <img
                  className="cardimg"
                  src="images/hiking.jpg"
                  alt="Hiking spots"
                />
              </a>
              <h3 className="major">Top Hiking Trails</h3>
              <p style={{ color: "black" }}>
                These are some of the best trails with the most incredible
                views. Bucket list potential.
              </p>
              <a
                href="https://www.switchbacktravel.com/day-hikes-near-denver"
                className="special"
              >
                Learn more
              </a>
            </article>
            <article>
              <a
                href="https://www.uncovercolorado.com/ski-resorts-near-denver-co/"
                className="image"
              >
                <img
                  className="cardimg"
                  src="images/snowboard.jpg"
                  alt="Snowboarding"
                />
              </a>
              <h3 className="major">Local Snowboarding</h3>
              <p style={{ color: "black" }}>
                This is a curated list of some of the best local spots to go
                snowboarding.
              </p>
              <a
                href="https://www.uncovercolorado.com/ski-resorts-near-denver-co/"
                className="special"
              >
                Learn more
              </a>
            </article>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default AboutMe;

// test

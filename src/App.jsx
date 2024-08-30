import React, { useEffect } from "react";
import AOS from "aos";

import "./App.css";
import "aos/dist/aos.css"; // Import file CSS của AOS

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // Thiết lập duration cho AOS
  }, []);
  return (
    <>
      <div className="container">
        <h1
          data-aos="zoom-in"
          style={{ color: "#E6A4B4", textAlign: "center", marginTop : "4rem" }}
        >
          Gửi nàng công chúa của tớ ❤️❤️❤️❤️❤️❤️
        </h1>
        <img
          src="https://cdn.dribbble.com/users/2609563/screenshots/11239089/media/a4276ccadfa82c45b572db7b4eba85a2.jpg"
          className="img-container"
        />
        <div           data-aos="zoom-in"

          style={{
            position: "absolute",
            top: `10px`,
            left: `10px`,
          }}
        >
          <img src="/public/133.gif" />
        </div>
        <div           data-aos="zoom-in"

          style={{
            position: "absolute",
            top: `3rem`,
            left: `3rem`,
          }}
        >
          <img src="/public/133.gif" />
        </div>
        <div           data-aos="zoom-in"

          style={{
            position: "absolute",
            top: `5rem`,
            left: `5rem`,
          }}
        >
          <img src="/public/133.gif" />
        </div>
        <div           data-aos="zoom-in"

          style={{
            position: "absolute",
            top: `7rem`,
            left: `7rem`,
          }}
        >
          <img src="/public/133.gif" />
        </div>
        <div           data-aos="zoom-in"

          style={{
            position: "absolute",
            top: `9rem`,
            left: `9rem`,
          }}
        >
          <img src="/public/133.gif" />
        </div>
        <div           data-aos="zoom-in"

          style={{
            position: "absolute",
            top: `11rem`,
            left: `11rem`,
          }}
        >
          <img src="/public/133.gif" />
        </div>
        <div           data-aos="zoom-in"

          style={{
            position: "absolute",
            top: `13rem`,
            left: `13rem`,
          }}
        >
          <img src="/public/133.gif" />
        </div>

        <div           data-aos="zoom-in"

          style={{
            position: "absolute",
            top: `15rem`,
            left: `15rem`,
          }}
        >
          <img src="/public/133.gif" />
        </div>
        <div           data-aos="zoom-in"

          style={{
            position: "absolute",
            top: `17rem`,
            left: `17rem`,
          }}
        >
          <img src="/public/133.gif" />
        </div>
        <div           data-aos="zoom-in"

          style={{
            position: "absolute",
            top: `19rem`,
            left: `19rem`,
          }}
        >
          <img src="/public/133.gif" />
        </div>
        <div           data-aos="zoom-in"

          style={{
            position: "absolute",
            top: `21rem`,
            left: `21rem`,
          }}
        >
          <img src="/public/133.gif" />
        </div>
        <div           data-aos="zoom-in"

          style={{
            position: "absolute",
            top: `23rem`,
            left: `23rem`,
          }}
        >
          <img src="/public/133.gif" />
        </div>
        <div           data-aos="zoom-in"

          style={{
            position: "absolute",
            top: `25rem`,
            left: `25rem`,
          }}
        >
          <img src="/public/133.gif" />
        </div>

        <div           data-aos="zoom-in"

          style={{
            position: "absolute",
            top: `10px`,
            right: `10px`,
          }}
        >
          <img src="/public/133.gif" />
        </div>
        <div           data-aos="zoom-in"

          style={{
            position: "absolute",
            top: `3rem`,
            right: `3rem`,
          }}
        >
          <img src="/public/133.gif" />
        </div>
        <div           data-aos="zoom-in"

          style={{
            position: "absolute",
            top: `5rem`,
            right: `5rem`,
          }}
        >
          <img src="/public/133.gif" />
        </div>
        <div           data-aos="zoom-in"

          style={{
            position: "absolute",
            top: `7rem`,
            right: `7rem`,
          }}
        >
          <img src="/public/133.gif" />
        </div>
        <div           data-aos="zoom-in"

          style={{
            position: "absolute",
            top: `9rem`,
            right: `9rem`,
          }}
        >
          <img src="/public/133.gif" />
        </div>
        <div           data-aos="zoom-in"

          style={{
            position: "absolute",
            top: `11rem`,
            right: `11rem`,
          }}
        >
          <img src="/public/133.gif" />
        </div>
        <div           data-aos="zoom-in"

          style={{
            position: "absolute",
            top: `13rem`,
            right: `13rem`,
          }}
        >
          <img src="/public/133.gif" />
        </div>

        <div           data-aos="zoom-in"

          style={{
            position: "absolute",
            top: `15rem`,
            right: `15rem`,
          }}
        >
          <img src="/public/133.gif" />
        </div>
        <div           data-aos="zoom-in"

          style={{
            position: "absolute",
            top: `17rem`,
            right: `17rem`,
          }}
        >
          <img src="/public/133.gif" />
        </div>
        <div           data-aos="zoom-in"

          style={{
            position: "absolute",
            top: `19rem`,
            right: `19rem`,
          }}
        >
          <img src="/public/133.gif" />
        </div>
        <div           data-aos="zoom-in"

          style={{
            position: "absolute",
            top: `21rem`,
            right: `21rem`,
          }}
        >
          <img src="/public/133.gif" />
        </div>
        <div           data-aos="zoom-in"

          style={{
            position: "absolute",
            top: `23rem`,
            right: `23rem`,
          }}
        >
          <img src="/public/133.gif" />
        </div>
        <div           data-aos="zoom-in"

          style={{
            position: "absolute",
            top: `25rem`,
            right: `25rem`,
          }}
        >
          <img src="/public/133.gif" />
        </div>
      </div>
    </>
  );
}

export default App;

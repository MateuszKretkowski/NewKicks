import {React, useRef} from "react";
import { motion, useScroll, useInView } from "framer-motion"
import ModelViewer from "./ModelViewer.js";
import "./App.css";
import { fromHalfFloat } from "three/src/extras/DataUtils.js";

function App() {
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });
  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  const variantImg1 = {
    hidden: { x: -400, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  }

  function Section({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
  
    return (
      <section ref={ref}>
        <div
          style={{
            transform: isInView ? "translateX(00px)" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
          }}
          className="sellbuy_img sellbuy_img1 "
        >
        </div>
      </section>
    );
  }

  function Section2({ children2 }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
  
    return (
      <section ref={ref}>
        <div
          style={{
            transform: isInView ? "translateX(0px)" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
          className="sellbuy_img sellbuy_img3"
        >
        </div>
      </section>
    );
  }

  function Section3({ children3 }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <section ref={ref}>
        <div
          style={{
            transform: isInView ? "translateX(0px)" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s ease-in-out 0.1s",
          }}
        >
          <img
            className="jordans jordan_travis"
            src={require("./jordantravisscott.png")}
            alt="Jordan Travis Scott"
          />
        </div>
      </section>
    );
  }

  function Section4({ children4 }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <section ref={ref}>
        <div
          style={{
            transform: isInView ? "translateX(0px)" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s ease-in-out 0.1s",
          }}
        >
          <img
            className="jordans jordan_4"
            src={require("./jordan-4.png")}
            alt="Jordan 4"
          />
        </div>
      </section>
    );
  }

  function Section5({ children5 }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <section ref={ref}>
        <div
          style={{
            transform: isInView ? "translateY(0px)" : "translateY(2000px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
          className="sellbuy_img sellbuy_img3"
        >
        </div>
      </section>
    );
  }
  return (
    <div className="App">
      <div className="navBar">
        <div className="navBar_container">
          <h2 className="logo">NewKicks</h2>
          <ul className="links_wrapper">
            <li className="link">
              <h4 className="link_text">Link</h4>
            </li>
            <li className="link">
              <h4 className="link_text">Link</h4>
            </li>
            <li className="link">
              <h4 className="link_text">Link</h4>
            </li>
            <li className="link">
              <h4 className="link_text">Link</h4>
            </li>
            <li className="link">
              <h4 className="link_text">Link</h4>
            </li>
          </ul>
          <div className="login_wrapper">
            <h3 className="login">Zaloguj się</h3>
            <h3 className="login">Załóż konto</h3>
          </div>
        </div>
      </div>
      <header className="header">
        <div className="planet planet1" />
        <div className="planet planet2" />
        <div className="header_container">
          <div className="header_text_wrapper">
            <h5 className="">NewKicks jest miejscem do</h5>
            <h1>
              <span>Sprzedawania</span>
              <span>,</span> <span>i</span> <span>Kupowania</span> <br />{" "}
              <span>Najlepszych</span> <span>SNEAKERSÓW</span>
            </h1>
          </div>
          <div className="img-wrapper">
            <motion.img
              className="header_img gradient-border"
              src={require("./jordan-1-retro-high-og-lost-and-found-2-1000.png")}
            />
          </div>
          <div className="action_container">
            <button className="button">
              <h4>Załóż Konto!</h4>
            </button>
          </div>
        </div>
      </header>
      <section className="whatisit">
        <div className="whatisit_container">
          <div className="left_side">
            <h5 className="subtitle">Co to NewKicks?</h5>
            <h1>Kupno, Sprzedaż najlepszych SNEAKERSÓW w Polsce!</h1>
            <h2>
              NewKicks jest miejscem handlowym gdzie możesz kupywać swoje
              wymarzone buty, a zarazem sprzedawać swoje nieużywane Sneakersy!
            </h2>
            <button className="button whatisit_btn">
              <h4>Używaj NewKicks Już teraz!</h4>
            </button>
          </div>
          <div className="right_side"></div>
        </div>
      </section>
      <section className="sellbuy">
        <div className="sellbuy_container">
          <div className="sellbuy_left_side">
            <Section
            ></Section>
            <Section2
            />
          </div>
          <div className="sellbuy_right_side">
            <h5 className="subtitle">Czy NewKicks Jest Bezpieczne?</h5>
            <h1>
              NewKicks Ma Zasadę. Bezpieczne Kupnowanie, Bezpieczne
              Sprzedawanie!
            </h1>
            <h2>
              NewKicks jest bezpiecznym pośrednikiem gdy kupujesz swoje
              wymarzone Sneakersy, który korzysta z technologii Stripe.
            </h2>
            <button className="button sellbuy_btn">
              <h4>Wyszukaj Swoje Wymarzone Sneakersy!</h4>
            </button>
          </div>
        </div>
      </section>
      <section className="starting">
        <div className="starting_container">
          <h5>
            Już teraz dołącz do NewKicks, żeby...
          </h5>
          <h1>Dostawać Najnowsze newsy o Sneakersach!</h1>
          <div className="starting_content_container">
            <div className="starting_content">
              <Section3 />
              <div className="starting_content_text-wrapper">
                <h2>Denerwuje cię Wchodzenie Zawsze na Dwie Aplikacje, Aby Zobaczyć Co Nowego?</h2>
                <h5>Dzięki NewKicks, możesz wejść w naszą podstronę, aby zobaczyć najlepsze SNEAKERSY które dropią na najbliższych dniach.</h5>
              </div>
              <Section4 />
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="footer_container">
          <h1>NewKicks</h1>
          <ul className="links_wrapper">
            <li className="link">
              <h4 className="link_text">Link</h4>
            </li>
            <li className="link">
              <h4 className="link_text">Link</h4>
            </li>
            <li className="link">
              <h4 className="link_text">Link</h4>
            </li>
            <li className="link">
              <h4 className="link_text">Link</h4>
            </li>
            <li className="link">
              <h4 className="link_text">Link</h4>
            </li>
          </ul>
          <div>
            <h5>Copyright © Mateusz Kretkowski 2023</h5>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

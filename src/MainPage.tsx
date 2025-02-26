import React from "react";
import ContactForm from "./ContactForm";
import { Me } from "./Me";
import Navigation from "./Navigation";
import Gallery from "./Gallery";
import PersonalInformation from "./PersonalInformation";
import headerImg from "/Header.png";
import titelUnterImg from "/titel_unter.png";

function App(): React.ReactElement {
  return (
    <div
      style={{
        backgroundImage: "url('background_horizontal.jpg')",
        backgroundRepeat: "repeat-y",
        backgroundSize: "100% auto",
      }}
      className="bg-base-200 min-h-screen flex flex-col"
    >
      <Header />
      <Navigation />
      <MainContent />
      <Footer />
    </div>
  );
}

function Header(): React.ReactElement {
  return (
    <section id="header">
      <header className="grid grid-cols-1 place-items-center relative justify-center py-20 items-center bg-cover bg-center max-w-screen-lg mx-auto">
        <img
          className="mt-8 sm:mt-6 px-4 sm:px-6
           w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/1"
          src={headerImg}
          alt="Artfy Logo"
        ></img>

        <img
          className="mt-8 sm:mt-6 px-4 sm:px-6
           w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/1"
          src={titelUnterImg}
          alt=" Bereit, für kreative Wände? :)"
        ></img>
      </header>
    </section>
  );
}

function MainContent(): React.ReactElement {
  return (
    <div className="min-h-screen bg-cover bg-center">
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="w-full max-w-screen-lg md:max-w-[800px] lg:max-w-[1000px] mx-auto p-4">
          <Me />
          <Gallery />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

function Footer(): React.ReactElement {
  return (
    <footer id="footer" className="bg-neutral text-neutral-content py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mt-4 flex flex-wrap">
          <div className="w-full md:w-1/3 mb-4 text-left">
            <h3 className="text-lg font-semibold">Impressum</h3>
            <div className="mb-2">
              <h4 className="font-medium">Name:</h4>
              <p>Tamara Akova</p>
            </div>
            <div className="mb-2">
              <h4 className="font-medium">Anschrift:</h4>
              <p>Meyerstraße 31 / 33, 28201 Bremen, Deutschland</p>
            </div>
          </div>

          <div className="w-full md:w-1/3 mb-4 text-left">
            <h3 className="text-lg font-semibold">Kontakt</h3>
            <div className="mb-2">
              <h4 className="font-medium">Telefon:</h4>
              <p>{PersonalInformation.telefon} </p>
            </div>
            <div className="mb-2">
              <h4 className="font-medium">E-Mail:</h4>
              <p>{PersonalInformation.email}</p>
            </div>
          </div>

          <div className="w-full md:w-1/3 mb-4 text-left">
            <h3 className="text-lg font-semibold">Weitere Informationen</h3>

            <div className="mb-2">
              <h4 className="font-medium">Ust-idNr.:</h4>
              <p>DE369127227</p>
            </div>
            <div className="mb-2">
              <h4 className="font-medium">Handelsregister:</h4>
              <p>Amtsgericht Bremen HRB 29465</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center">
        &copy; 2025 Tamara Akova. Alle Rechte vorbehalten.
      </p>
    </footer>
  );
}

export default App;

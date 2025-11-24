"use client";
import styles from "./styles/style";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Solutions from "./components/Solutions";
import Graphs from "./components/Graphs";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <div className={`${styles.flexCenter}`}>
        <Header />
      </div>
      <Banner />
      <div className={`${styles.flexCenter}`}>
        <Solutions />
      </div>
      <div className={`${styles.flexCenter}`}>
        <Graphs />
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}

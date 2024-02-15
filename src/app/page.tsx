// import Image from "next/image";
// import styles from "./page.module.css";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import HashtagList from "@/components/HashtagList";

export default function Home() {
  return (
    <div className="app">
    <Footer />

    <Container />

    <HashtagList />
  </div>
  );
}

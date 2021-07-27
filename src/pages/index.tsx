import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Types from "../components/Types";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Types />
      <Slider />
    </>
  );
}

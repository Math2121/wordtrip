import api from "../services/api";
import { GetStaticProps } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Types from "../components/Types";
interface Continent {
  id: number;
  name: string;
  description: string;
  carrouselImage:string;
}
interface SliderProps {
  continent: Continent[];
}
export default function Home({ continent }: SliderProps) {

  return (
    <>
      <Header />
      <Banner />
      <Types />
      <Slider sliders={continent} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get("/country");

  const continent = response.data;

  return {
    props: {
      continent:continent.continents,
    },
  };
};

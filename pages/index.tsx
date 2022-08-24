import { HomeProps } from "interfaces/home";
import { APP_URL } from "lib/constants";
import { GetStaticProps } from "next";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home({ data }: HomeProps) {
  return (
    <>
      <Navbar />
      <Card data={data} />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(APP_URL + "api");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

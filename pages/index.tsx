import { HomeProps } from "interfaces/home";
import { APP_URL } from "lib/constants";
import { GetStaticProps, NextPage } from "next";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home: NextPage<HomeProps> = ({ data }) => {
  return (
    <>
      <Navbar />
      <Card data={data} />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(APP_URL + "api");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default Home;

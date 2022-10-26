import Footer from "@/components/Footer";
import { HomeProps } from "interfaces/home";
import { GetStaticProps, NextPage } from "next";
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import { fetchData } from "lib/getData";

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
  const data = await fetchData();

  return {
    props: {
      data,
    },
  };
};

export default Home;

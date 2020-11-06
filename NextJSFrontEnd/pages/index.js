import Head from "next/head";
import { Fragment, useState, useEffect } from "react";

const Home = ({ data }) => {
  const [weather, getWeather] = useState(null);
  useEffect(() => {
    getWeather(data)
  }, [])
  return (
    <Fragment>
      <Head>
        <title>Docker-compose proof-of-concept</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-800 h-screen text-white">
        <div className="text-center pt-16">
          {!weather
            ? "Undefined"
            : weather.map((forecast, i) => (
                <ul>
                  <li key={i}>{forecast.summary}</li>
                </ul>
              ))}
        </div>
      </div>
    </Fragment>
  );
};

export async function getServerSideProps() {
  const CONTAINER_URL = `${process.env.NEXT_PUBLIC_URL_API}/api/weather`;
  const res = await fetch(CONTAINER_URL);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}

export default Home;

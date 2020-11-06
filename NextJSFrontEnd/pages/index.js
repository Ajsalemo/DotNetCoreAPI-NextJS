import Head from "next/head";
import moment from "moment"
import { Fragment, useState, useEffect } from "react";

const Home = ({ data }) => {
  const [weather, getWeather] = useState(null);
  useEffect(() => {
    getWeather(data);
  }, []);
  return (
    <Fragment>
      <Head>
        <title>Docker-compose proof-of-concept</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-800 h-auto text-white">
        <div className="text-center pt-16">
          <h1 className="text-4xl font-bold">Weather Descriptions</h1>
          {!weather
            ? "Undefined"
            : weather.map((forecast, i) => (
                <ul key={i} className="py-12">
                  <li key={i} className="flex flex-col justify-center">
                    <b>Today's date: </b>
                    {moment(forecast.date).format("dddd, MMMM Do YYYY")}
                    <b>Temperature(C): </b>
                    {forecast.temperatureC}&deg;C
                    <b>Temperature(F): </b>
                    {forecast.temperatureF}&deg;F
                  </li>
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

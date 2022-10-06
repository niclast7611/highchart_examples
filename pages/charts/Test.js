import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Test() {
  const [colorData, setColorData] = useState();
  const [winsAndLosses, setWinsAndLosses] = useState();

  useEffect(() => {
    // **************
    // const endpoints = [
    //   `https://api.sportsdata.io/v3/mlb/scores/json/teams?key=${process.env.MLB_KEY}`,
    //   `https://api.sportsdata.io/v3/mlb/scores/json/TeamSeasonStats/2022?key=${process.env.MLB_KEY}`,
    // ];
    // axios
    //   .all(endpoints.map((endpoint) => axios.get(endpoint)))
    // .then((response) => setSportsData(response));
    // **************
    // .then((response) => {
    //   const filteredResponse = response.data.map((stats) => {
    //     return {
    //       wins: stats.Wins,
    //       name: stats.Name,
    //       losses: stats.Losses,
    //     };
    //   });
    // **************

    let one = `https://api.sportsdata.io/v3/mlb/scores/json/teams?key=${process.env.MLB_KEY}`;
    let two = `https://api.sportsdata.io/v3/mlb/scores/json/TeamSeasonStats/2022?key=${process.env.MLB_KEY}`;

    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);

    axios
      .all([requestOne, requestTwo])
      .then(
        axios.spread((...responses) => {
          const responseOne = responses[0].data;
          const responseTwo = responses[1].data.map((stats) => {
            return {
              wins: stats.Wins,
              name: stats.Name,
              losses: stats.Losses,
            };
          });
          setColorData(responseOne);
          setWinsAndLosses(responseTwo);
        })
      )
      .catch((errors) => {
        console.log(errors);
      });
  }, []);
  return <div>Test</div>;
}

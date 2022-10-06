import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Test() {
  const [colorData, setColorData] = useState([]);
  const [winsAndLosses, setWinsAndLosses] = useState([]);
  const [final, setFinal] = useState([]);

  useEffect(() => {
    const requestOne = axios.get(
      "https://api.sportsdata.io/v3/mlb/scores/json/teams",
      {
        params: { key: process.env.MLB_KEY },
      }
    );
    const requestTwo = axios.get(
      "https://api.sportsdata.io/v3/mlb/scores/json/Standings/2022",
      {
        params: { key: process.env.MLB_KEY },
      }
    );

    axios
      .all([requestOne, requestTwo])
      .then(
        axios.spread((...responses) => {
          const responseOne = responses[0].data;
          const responseTwo = responses[1].data.map((stats) => {
            return {
              city: stats.City,
              division: stats.Division,
              divisionRank: stats.DivisionRank,
              league: stats.League,
              leagueRank: stats.LeagueRank,
              losses: stats.Losses,
              name: stats.Name,
              teamID: stats.TeamID,
              wins: stats.Wins,
            };
          });
          setColorData(responseOne.sort((a, b) => a.TeamID - b.TeamID));
          setWinsAndLosses(responseTwo.sort((a, b) => a.teamID - b.teamID));
        })
      )
      .catch((errors) => {
        console.log(errors);
      });
    finalObject();
  }, []);

  const finalObject = () => {
    const final = winsAndLosses.map((team, index) => {
      return {
        ...team,
        primaryColor: colorData[index].PrimaryColor,
        secondaryColor: colorData[index].SecondaryColor,
      };
    });
    setFinal(final);
  };
  return <div>Test</div>;
}

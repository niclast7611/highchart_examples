import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import sunburst from "highcharts/modules/sunburst.js";

if (typeof Highcharts === "object") {
  sunburst(Highcharts);
}

export default function Test() {
  const [colorData, setColorData] = useState([]);
  const [winsAndLosses, setWinsAndLosses] = useState([]);
  const [final, setFinal] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const requestOne = await axios.get(
        "https://api.sportsdata.io/v3/mlb/scores/json/teams",
        {
          params: { key: process.env.MLB_KEY },
        }
      );
      const requestTwo = await axios.get(
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
                parent: `${stats.League} ${stats.Division}`,
                divisionRank: stats.DivisionRank,
                league: stats.League,
                leagueRank: stats.LeagueRank,
                losses: stats.Losses,
                name: stats.Name,
                teamID: stats.TeamID,
                value: stats.Wins,
              };
            });
            setColorData(responseOne.sort((a, b) => a.TeamID - b.TeamID));
            setWinsAndLosses(responseTwo.sort((a, b) => a.teamID - b.teamID));
          })
        )
        .catch((errors) => {
          console.log(errors);
        });
    };
    fetchData();
    finalObject();
  }, []);

  const finalObject = () => {
    const final = winsAndLosses.map((team, index) => {
      return {
        ...team,
        color: `#${colorData[index].PrimaryColor}`,
        secondaryColor: `#${colorData[index].SecondaryColor}`,
      };
    });
    setFinal(final);
  };
  const incomingData = [
    {
      id: "MLB",
      parent: "",
      name: "MLB",
      color: "transparent",
    },
    {
      id: "AL",
      parent: "MLB",
      name: "American League",
      color: "#D50032",
    },
    {
      id: "NL",
      parent: "MLB",
      name: "National League",
      color: "#002D72",
    },
    /* American League */
    {
      id: "AL East",
      parent: "AL",
      name: "AL East",
    },
    {
      id: "AL West",
      parent: "AL",
      name: "AL West",
    },
    {
      id: "AL Central",
      parent: "AL",
      name: "AL Central",
    },
    /* National League */

    {
      id: "NL East",
      parent: "NL",
      name: "NL East",
    },

    {
      id: "NL West",
      parent: "NL",
      name: "NL West",
    },
    {
      id: "NL Central",
      parent: "NL",
      name: "NL Central",
    },
  ];
  const finalDataNeeded = [...incomingData, ...final];
  const options = {
    chart: {
      height: 600,
    },
    title: {
      text: "MLB Teams Wins 2022",
    },
    credits: {
      enabled: false,
    },

    series: [
      {
        type: "sunburst",
        data: finalDataNeeded,
        allowDrillToNode: true,
        cursor: "pointer",
        rotationMode: "circular",
        levels: [
          {
            level: 1,
            tooltip: {
              formatter: function () {
                return (
                  "The value for <b>" + this.x + "</b> is <b>" + this.y + "</b>"
                );
              },
            },
            levelIsConstant: false,
            dataLabels: {
              filter: {
                property: "outerArcLength",
                operator: ">",
                value: 64,
              },
            },
          },
          {
            level: 2,
            colorByPoint: true,
          },
          {
            level: 3,
            colorVariation: {
              key: "brightness",
              to: -0.5,
            },
          },
          {
            level: 4,
            colorByPoint: true,
          },
        ],
        tooltip: {
          pointFormatter: function () {
            if (!this.options.value) {
              return `<div style='padding: 10px; background-color: white; border-radius: 9px;'>${this.options.name}</div>`;
            } else {
              return `<div style='padding: 10px; background-color: white; border-radius: 9px;'>
      The  <b style='color: ${this.options.color}'>
          ${this.options.name}
          </b> won <b>
          ${this.options.value}
          </b> games this season
  </div>`;
            }
          },
        },
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

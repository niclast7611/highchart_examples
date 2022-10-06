import React from "react";
import axios from "axios";
import { useEffect } from "react";
export default function Test() {
  useEffect(() => {
    axios
      .get(
        `https://api.sportsdata.io/v3/mlb/scores/json/teams?key=${process.env.TEAM_COLOR}`
      )
      .then((response) => {
        console.log(response.data);
      });
  }, []);
  return <div>Test</div>;
}

import { gql, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import "./Antrian.css";
import { BottomNavigationAction, Grid } from "@mui/material";
import CardAntrian from "../component/card/CardAntrian";

export default function Antrian() {
  const [antrianData, setAntrian] = useState(0);
  const { loading, error, data } = useQuery(gql`
    query MyQuery {
      doctor {
        id
        name
        profile_picture
        role
      }
    }
  `);

  if (loading) return <p>loading</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="Antrian">
      {data?.doctor.map((item) => (
        <CardAntrian item={item} />
      ))}
    </div>
  );
}

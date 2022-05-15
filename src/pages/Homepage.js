import { gql, useLazyQuery, useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardDokter from "../component/card/CardDokter";

export default function Homepage({ nama }) {
  const [getData, { loading, error, data }] = useLazyQuery(gql`
    query MyQuery($where: doctor_bool_exp) {
      doctor(where: $where) {
        name
        profile_picture
        role
        id
      }
    }
  `);

  const [reload, setReload] = useState(1);
  useEffect(() => {
    setReload(reload + 1);
  }, [nama]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    if (nama !== "") {
      getData({ variables: { where: { name: { _ilike: "%" + nama + "%" } } } });
    } else {
      getData();
    }
  }, [reload]);

  if (loading) return <p>loading</p>;
  if (error) return <p>{error}</p>;

  return (
    <div
      style={{
        backgroundColor: "#fffff",
        Width: "100vw",
      }}
    >
      <Grid
        container
        spacing={20}
        p="20px"
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {data?.doctor.map((item) => (
          <Grid item xs={4}>
            <CardDokter
              Id={item.id}
              Gambar={item.profile_picture}
              NamaDokter={item.name}
              Spesialis={item.role}
            ></CardDokter>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

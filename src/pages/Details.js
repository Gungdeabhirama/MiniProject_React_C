import { gql, useQuery } from "@apollo/client";
import { Grid, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const params = useParams();

  const [antrianData, setAntrian] = useState(0);

  const { loading, error, data } = useQuery(
    gql`
      query MyQuery($id: Int!) {
        doctor_by_pk(id: $id) {
          description
          id
          name
          profile_picture
          role
        }
      }
    `,
    {
      variables: {
        id: params.doctorId,
      },
    }
  );

  useEffect(() => {
    const antrian = localStorage.getItem("doctor-" + params.doctorId);
    if (!antrian) {
      localStorage.setItem("doctor-" + params.doctorId, "0");
      setAntrian(0);
      return "0";
    }
    setAntrian(parseInt(antrian));
  }, []);

  const addAntrian = () => {
    const nextAntrian = antrianData + 1;
    setAntrian(nextAntrian);
    localStorage.setItem("doctor-" + params.doctorId, nextAntrian);
  };

  if (loading) return <p>loading</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      <Grid container direction="row">
        <Grid justifyContent="center" alignItems="center" item container xs={4}>
          <img
            src={data.doctor_by_pk.profile_picture}
            style={{
              margin: "46px",
              width: "420px",
              height: "395px",
              borderRadius: "100%",
            }}
          ></img>
          <Grid
            justifyContent="center"
            alignItems="center"
            item
            container
            direction="column"
            fontFamily="Poiret One"
            color="#7F858C"
          >
            <h2>{data.doctor_by_pk.name}</h2>
            <h3 style={{ paddingTop: "10px" }}>{data.doctor_by_pk.role}</h3>
          </Grid>
          <Grid item>
            <Box
              bgcolor="#034C81"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              color="white"
              p="20px"
              mt="10px"
              borderRadius="30px"
            >
              <h5>Antrian Saat Ini</h5>
              <h3>- {antrianData} -</h3>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={7}>
          <Box
            my="50px"
            minHeight="70vh"
            classname="container"
            style={{
              textAlign: "center",
              padding: "10px",
              border: "2px solid",
              borderColor: "#2CA3FA",
            }}
          >
            <h3 style={{ fontFamily: "Poiret One", color: "#7F858C" }}>
              {data.doctor_by_pk.description}
            </h3>
          </Box>
          <Box display="flex" justifyContent="flex-end" mx="10px">
            <button
              type="button"
              class="btn"
              href="/Antrian"
              onClick={addAntrian}
              style={{
                padding: "20px 50px 20px 50px",
                borderRadius: "50px",
                fontSize: "25px",
                color: "white",
                backgroundColor: "#034C81",
              }}
            >
              Pesan
            </button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

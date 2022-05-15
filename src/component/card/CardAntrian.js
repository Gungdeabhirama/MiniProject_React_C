import { BottomNavigationAction, Grid, Box } from "@mui/material";
import React from "react";

export default function CardAntrian({ item }) {
  return (
    <Grid
      container
      p="10px"
      m="10px"
      borderRadius="20px"
      boxShadow="3"
      border="2px solid"
      borderColor="#2CA3FA"
      width="97vw"
      fontFamily="Poiret One"
      color="#7F858C"
    >
      <Grid item container p="10px">
        <Grid item px="50px">
          <img
            src={item.profile_picture}
            alt={item.name}
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "100%",
            }}
          />
        </Grid>
        <Grid item xs={7}>
          <h2 style={{ fontWeight: 400 }}>{item.name}</h2>
          <h5>{item.role} </h5>
        </Grid>
        <Grid item xs={3} container justifyContent="flex-end">
          <div>
            <h2>No Antrean : </h2>
            <Box display="flex" justifyContent="flex-end">
              <h1>
                {localStorage.getItem("doctor-" + item.id) !== null
                  ? localStorage.getItem("doctor-" + item.id)
                  : 0}
              </h1>
            </Box>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

import React from "react";

export default function CardDokter({ Gambar, NamaDokter, Spesialis, Id }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "312px",
        minHeight: "476px",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5))",
        border: "2px solid",
        borderColor: "#2CA3FA",
      }}
    >
      <div
        className="card-image"
        style={{ margin: "20px", display: "flex", justifyContent: "center" }}
      >
        <img
          src={Gambar}
          className="card-img-top"
          alt="Not Found"
          style={{
            height: "208px",
            width: "208px",
            borderRadius: "100%",
          }}
        />
      </div>
      <div className="card-body">
        <center>
          <h5
            className="card-title"
            style={{
              fontSize: "30px",
              fontFamily: "Poiret One",
              fontcolor: "#7F858C",
            }}
          >
            {NamaDokter}
          </h5>
          <p
            className="card-text"
            style={{
              fontSize: "20px",
              fontFamily: "Poiret One",
              fontcolor: "#7F858C",
            }}
          >
            {Spesialis}
          </p>
        </center>
        <div
          className="d-flex"
          style={{ justifyContent: "flex-end", alignItems: "flex-end" }}
        >
          <a
            href={`/details/${Id}`}
            className="btn"
            style={{
              marginTop: "25px",
              backgroundColor: "#034C81",
              color: "white",
              fontFamily: "Poiret One",
            }}
          >
            Rincian
          </a>
        </div>
      </div>
    </div>
  );
}

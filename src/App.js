import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Antrian from "./pages/Antrian";
import Homepage from "./pages/Homepage";
import Details from "./pages/Details";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/Footer/Footer";
const client = new ApolloClient({
  uri: "https://living-ringtail-74.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "bmyLi1i67WKP2UzKVQ2fi7dMeSfzdmYFNPWNwmhTg8K83tQ7Hhw1FoJq4qAIFtri",
  },
});

function App() {
  const [nama, setNama] = useState("");

  return (
    <>
      <div style={{ minHeight: "95vh" }}>
        <Navbar setNama={setNama}></Navbar>
        <ApolloProvider client={client}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage nama={nama} />} />
              <Route path="/antrian" element={<Antrian />} />
              <Route path="/details/:doctorId" element={<Details />} />
            </Routes>
          </BrowserRouter>
        </ApolloProvider>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;

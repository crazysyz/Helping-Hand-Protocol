import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.jpg";
import c3 from "../assets/c3.jpg";
import {
    LivepeerConfig,
    createReactClient,
    studioProvider,
  } from '@livepeer/react';
  import * as React from 'react';
  var ethers = require("ethers");

export default function AllListings() {

    const livepeerClient = createReactClient({
        provider: studioProvider({
          apiKey: process.env.NEXT_PUBLIC_STUDIO_API_KEY,
        }),
      });


  return (
    <div
      className="row justify-content-center"
      style={{ marginBottom: "100px" }}
    >
      <div
        className="col-12"
        style={{ paddingTop: "50px", marginBottom: "50px" }}
      >
        <h4 className="text-center" style={{ textDecoration: "underline" }}>
          All Campaigns
        </h4>
      </div>

    

      <div className="col-6 col-md-2" style={{ margin: "20px" }}>
        <div className="card" style={{ width: "18rem" }}>
        <LivepeerConfig client={livepeerClient}>
        <DecentralizedStoragePlayback />
        </LivepeerConfig>
          <div className="card-body">
            <h5 className="card-title">Help John with the surgery</h5>
            <br />
            <h6>3 /$10,000 raised</h6>
            <div class="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-label="Example with label"
                style={{
                  width: "25%",
                  ariaValuenow: "3000",
                  ariaValuemin: "0",
                  ariaValuemax: "10000",
                }}
              >
                $3000
              </div>
            </div>
            <br />
            <p className="card-text">
              John was a successful athelete until he met with a surgery. Help
              John for his surgery.
            </p>
            <a href="#" className="btn btn-success">
              Donate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

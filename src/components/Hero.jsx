import help from "../assets/help2.png";
export default function Hero(){
    return(
        <div
            className="col-12"
            style={{
              backgroundImage: "linear-gradient(to right, #C9D6FF , #E2E2E2)",
              paddingTop: "50px",
            }}
          >
            <div className="row justify-content-center">
              <div className="col-12 col-md-7" 
              style={{ 
                paddingTop: "100px", 
                paddingLeft:"150px", 
                paddingRight:"150px",
                paddingBottom:"120px"
              }}
                >
                <h1
                  style={{
                    color: "#262626",
                    fontSize: "475%",
                    fontWeight: "bolder",
                  }}
                >
                  Free Crowdfunding
                  <br />
                  For Everyone
                </h1>
                <br />
                <p
                  style={{
                    color: "#262626",
                    fontSize: "140%",
                    fontWeight: "400",
                  }}
                >
                  Raise funds online for medical emergencies and social causes
                </p>
              </div>
              <div className="col-12 col-md-5">
                <img src={help} style={{ width: "600px" }} alt="help" />
              </div>
            </div>
          </div>
    );
}
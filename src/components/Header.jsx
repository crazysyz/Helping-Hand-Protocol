import { Auth, useAuth } from "@arcana/auth-react";

export default function Header() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          backgroundImage: "linear-gradient(to right, #C9D6FF , #E2E2E2)",
        }}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="#0"
            style={{
              color: "black",
              fontWeight: "600",
              fontSize: "22px",
              marginLeft: "10px",
            }}
          >
            Crowdfunding
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{color:"white"}}>
                  Home
                </a>
              </li> */}
            </ul>
            <div>
              {auth.loading ? (
                "Loading"
              ) : auth.isLoggedIn ? (
                <p>Logged In</p>
              ) : (
                <div>
                  <Auth
                    externalWallet={true}
                    theme={"light"}
                    onLogin={onLogin}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

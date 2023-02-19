import AllListings from "../components/AllListings";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function MainPage() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Hero />
          <AllListings />
        </div>
      </div>
    </>
  );
}

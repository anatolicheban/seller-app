import Dashboard from "../Dashboard";

const Home = () => {
  const page = "Dashboard";

  switch (page) {
    case "Dashboard":
      return <Dashboard />;
    default:
      return null;
  }
};

export default Home;

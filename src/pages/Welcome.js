import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <seciton>
      <h1>The Welcome Page</h1>
      <Route path="/welcome/new-user">
        <p>Welcome, new user!</p>
      </Route>
    </seciton>
  );
};

export default Welcome;

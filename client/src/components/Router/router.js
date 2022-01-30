import SearchPage from "../../pages/SearchPage/SearchPage";
import Navbar from "../../components/Navbar/Navbar";
import { Switch, Route, BrowserRouter } from "react-router-dom";
const router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/search">
          <SearchPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default router;

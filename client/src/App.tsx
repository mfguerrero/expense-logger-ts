import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { AnimatedRoute, AnimatedRoutes } from "./components/animation/animated-route";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import Theme from "./theme";
import Login from "./features/pages/login";
import Dashboard from "./features/pages/dashboard";
import ManageExpense from "./features/pages/manage-expense";
import { setToken } from "./redux/auth/reducer";

import store, { history } from "./redux/store";

declare global {
  interface Window {
    nav: typeof history;
  }
}

window.nav = history;

const App: React.FC = () => {
  const token = window.localStorage.getItem("el-token");
  if (token) store.dispatch(setToken(token));
  return (
    <Provider store={store}>
      <Theme>
        <ConnectedRouter history={history}>
          <AnimatedRoutes>
            <AnimatedRoute path="/" exact={true} slide={30}>
              <Login />
            </AnimatedRoute>
            <AnimatedRoute path="/dashboard" exact={true} slide={30}>
              <Dashboard />
            </AnimatedRoute>
            <AnimatedRoute path="/manage" slide={30}>
              <ManageExpense />
            </AnimatedRoute>
          </AnimatedRoutes>
        </ConnectedRouter>
        <ToastContainer autoClose={3000} hideProgressBar={true} newestOnTop={true} transition={Slide} theme="colored" />
      </Theme>
    </Provider>
  );
};

export default App;

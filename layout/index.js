import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useSelector, useDispatch } from "react-redux";
import {
  getProfileByTokenAction,
  CheckAuthState,
} from "../state/action/authenticaiton";

import { useEffect } from "react";
const Layout = ({ children }) => {
  const { authenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (authenticated) {
      dispatch(getProfileByTokenAction());
    }
  }, [authenticated]);
  useEffect(() => {
    dispatch(CheckAuthState());
  }, []);
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

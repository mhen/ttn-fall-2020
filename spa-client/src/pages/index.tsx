import { NextPage } from "next";
import Clicker from "components/Clicker/Clicker";
import AppName from "components/AppName/AppName";

const IndexPage: NextPage = () => (
  <div>
    <AppName />
    <Clicker startCount={0} />
  </div>
);

export default IndexPage;

import AppName from "components/AppName/AppName";
import Clicker from "components/Clicker/Clicker";
import { NextPage } from "next";

const IndexPage: NextPage = () => (
  <div>
    <AppName />
    <Clicker startCount={0} />
  </div>
);

export default IndexPage;

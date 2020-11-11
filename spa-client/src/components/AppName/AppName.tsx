import { FC } from "react";

const AppName: FC = ({ children }) => {
  return (
    <div>
      <h1>{process.env.APP_NAME ?? "[App Name Missing]"}</h1>
      <p>Here your app resides</p>
      {children}
    </div>
  );
};

export default AppName;

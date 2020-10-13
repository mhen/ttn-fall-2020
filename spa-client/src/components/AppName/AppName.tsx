import { FC } from "react";

const AppName: FC = ({ children }) => {
  return (
    <div>
      <h1>{process.env.NEXT_PUBLIC_APP_NAME}</h1>
      <p>Here your app resides</p>
      {children}
    </div>
  );
};

export default AppName;

import { createContext, useState, useEffect } from "react";

export const AllFunction = createContext({
  handleAuth: () => {},
  handleHrData: () => {},
  handleHrPostJobData: () => {},
  handleInsertId: () => {},
  handleUserdata: () => {},
});
const FunctionProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState(false);
  const [hrAuth, setHrAuth] = useState(false);
  //hr data
  const [hrData, setHrData] = useState({
    HrName: "",
    HrEmail: "",
    CompADD: "",
    CompPhone: "",
    CompName: "",
    AdharId: "",
    AdminId: "",
    CompWeb: null,
  });
  const [userData, setUserData] = useState(null);
  const handleUserdata = (data) => {
    setUserData(data);
  };
  const [insertId, setInsertId] = useState(0);
  //set hr data
  const handleHrData = (data) => {
    setHrData(data);
  };
  const handleInsertId = async (id) => {
    try {
      await setInsertId(id);
    } catch (error) {
      throw error;
    }
  };
  const handleAuth = (type, temp) => {
    if (type === "user") setUserAuth(temp);
    else if(type==="hr") setHrAuth(temp);
  };
  const [hrPostjobData, setHrPostJobData] = useState(null);
  const handleHrPostJobData = (totalJob) => {
    setHrPostJobData(totalJob);
  };
  return (
    <AllFunction.Provider
      value={{
        userAuth,
        handleAuth,
        hrAuth,
        handleHrData,
        hrData,
        handleHrPostJobData,
        hrPostjobData,
        insertId,
        handleInsertId,
        handleUserdata,
        userData,
      }}
    >
      {children}
    </AllFunction.Provider>
  );
};
export default FunctionProvider;

import React from "react";
import Navbar from "../../../pages/Browse/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../utils/firebase";
import Loading from "../../Modules/Elements";
import { useAtom } from "jotai";
import { emailStorageAtom, tokenAtom } from "../../../jotai/atoms";

const BrowseLayout = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const [emailStorage] = useAtom(emailStorageAtom);
  const [tokenStorage] = useAtom(tokenAtom);

  if (loading) {
    return <Loading />;
  }

  if(error){
    return <p>Error...</p>
  }

  if(!user && !emailStorage && !tokenStorage){
    return location.replace("/")
  } 

  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default BrowseLayout;

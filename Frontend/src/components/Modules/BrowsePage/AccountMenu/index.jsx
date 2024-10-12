import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../../utils/firebase";
import { useAtom } from "jotai";
import { tokenAtom } from "../../../../jotai/atoms";
import { emailStorageAtom } from "../../../../jotai/atoms";
import { apiInstanceExpress } from "../../../../utils/apiInstance";

const AccountMenu = () => {
  const navigate = useNavigate();
  const [token, setToken] = useAtom(tokenAtom);
  const [emailStorage, setEmailStorage] = useAtom(emailStorageAtom);

  const handleSignOut = async () => {
    const data = { emailStorage, token }
    
    const dbSignOut = await apiInstanceExpress.delete(`/my-token`, {
        params: {
            email: emailStorage,
            token: token
        }
    });
    

    if (dbSignOut.status !== 204) {
      signOut(auth).then(() => {
        setToken(null);
        setEmailStorage(null);
        navigate("/");
      });
    }
  };

  return (
    <div className="flex dropdown dropdown-hover dropdown-end">
      <div className="avatar" tabIndex={0}>
        <div className="w-10 rounded">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <button
        tabIndex={0}
        className="dropdown-content top-10 w-32 bg-black py-1"
        onClick={handleSignOut}
      >
        Sign Out
      </button>
    </div>
  );
};

export default AccountMenu;

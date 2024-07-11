import { useContext } from "react";
import { AuthContent } from "../Provider/AuthProvider";

const useAuth = () => {

      const auth = useContext(AuthContent);
      return auth;
};

export default useAuth;
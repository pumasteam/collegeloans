import { useAuth0 } from "@auth0/auth0-react";
import Aside from "../partials/Aside";
import FinancePage from "../partials/FinancePage";
import StickyBox from "react-sticky-box";

export default function Finance() {
    const { user, isAuthenticated, isLoading } = useAuth0();
  
    if (isLoading) {
      return (
        <div className="flex h-screen">
          <div className="m-auto">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          </div>
        </div>
      );
    }
  
    return (
      isAuthenticated && (
        <div className="flex">
            <StickyBox>
                <Aside avatar={user.picture} />
            </StickyBox>
            <FinancePage />
        </div>
      )
    );
  }
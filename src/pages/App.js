import { useAuth0 } from "@auth0/auth0-react";
import Aside from "../partials/Aside";
import FormUI from "../partials/Form";

function Dash() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="flex h-screen">
        <div className="m-auto">
          <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
      </div>
    );
  }

  return (
    isAuthenticated && (
      <div class="flex">
        <Aside avatar={user.picture} />
        <FormUI />
      </div>
    )
  );
}

export default Dash;

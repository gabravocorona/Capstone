//import {handleAuth} from "@kinde-oss/kinde-auth-nextjs/server";
//export const GET = handleAuth();

import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

// Add a custom handler for logging the environment variable
export const GET = (req, res) => {
  // Log the environment variable to check if it's being picked up
  console.log("KINDE_ISSUER_URL:", process.env.KINDE_ISSUER_URL);

  // Call the handleAuth function after logging
  return handleAuth()(req, res);
};

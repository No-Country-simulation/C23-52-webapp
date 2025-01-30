'use client';

import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function Auth0Provider({ children }) {
  return <UserProvider>{children}</UserProvider>;
}

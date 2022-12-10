import { Suspense } from 'react';

export default function AppSuspence({ children }) {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
}

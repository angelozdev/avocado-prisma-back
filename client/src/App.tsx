import React from "react";
import { Outlet, Router } from "@tanstack/react-location";
import { QueryClientProvider } from "react-query";
import { ReactLocationDevtools } from "@tanstack/react-location-devtools";
import { ReactQueryDevtools } from "react-query/devtools";

import { reactLocation, reactQuery } from "./lib";
import { routes } from "./routes";
import { __DEV__ } from "./utils/assertions";
import { Header, Navigation, Splash, Wrapper } from "./components";
import { AuthProvider } from "./contexts/auth";

function App() {
  return (
    <QueryClientProvider client={reactQuery}>
      <React.Suspense fallback={<Splash />}>
        <AuthProvider>
          <Router routes={routes} location={reactLocation}>
            <Header>
              <Wrapper full>
                <Navigation />
              </Wrapper>
            </Header>
            <Outlet />
            {__DEV__ && <ReactLocationDevtools position="bottom-right" />}
          </Router>
        </AuthProvider>
      </React.Suspense>

      {__DEV__ && <ReactQueryDevtools />}
    </QueryClientProvider>
  );
}

export default App;

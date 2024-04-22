import { Refine, Authenticated } from "@refinedev/core";
import dataProvider from "@refinedev/simple-rest";
import routerProvider, { NavigateToResource } from "@refinedev/react-router-v6";
import { BrowserRouter, Route, Routes, Outlet, Navigate } from "react-router-dom";

import {
  ThemedLayoutV2,
  ErrorComponent,
  RefineThemes,
  notificationProvider,
  RefineSnackbarProvider,
  AuthPage,
} from "@refinedev/mui";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { ThemeProvider } from "@mui/material/styles";

import authProvider from "./auth-provider";

import { ProductList, ProductShow, ProductEdit, ProductCreate } from "./pages/products";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={RefineThemes.Blue}>
        <CssBaseline />
        <GlobalStyles
            styles={{ html: { WebkitFontSmoothing: "auto" } }}
        />
        <RefineSnackbarProvider>
            <Refine
                routerProvider={routerProvider}
                dataProvider={dataProvider(
                    "https://api.fake-rest.refine.dev",
                )}
                notificationProvider={notificationProvider}
                authProvider={authProvider}
                resources={[
                    {
                        name: "products",
                        list: "/products",
                        show: "/products/:id",
                        edit: "/products/:id/edit",
                        create: "/products/create",
                        meta: {
                            canDelete: true,
                        },
                    },
                ]}
                options={{
                    syncWithLocation: true,
                }}
            >
                <Routes>
                  <Route element={<Authenticated fallback={<Navigate to="/login" />}><Outlet /></Authenticated>}>
                    <Route
                        element={
                            <ThemedLayoutV2>
                                <Outlet />
                            </ThemedLayoutV2>
                        }
                    >
                        <Route index element={<NavigateToResource resource="products" />} />
                        <Route path="/products" element={<Outlet />}>
                          <Route index element={<ProductList />} />
                          <Route path="create" element={<ProductCreate />} />
                          <Route path=":id" element={<ProductShow />} />
                          <Route path=":id/edit" element={<ProductEdit />} />
                        </Route>
                        <Route path="*" element={<ErrorComponent />} />
                    </Route>
                  </Route>
                  <Route element={<Authenticated fallback={<Outlet />}><NavigateToResource resource="products" /></Authenticated>}>
                    <Route
                      path="/login"
                      element={(
                        <AuthPage
                          type="login"
                          formProps={{
                            defaultValues: {
                              email: "demo@refine.dev",
                              password: "demodemo",
                            },
                          }}
                        />
                      )}
                    />
                    <Route path="/register" element={<AuthPage type="register" />} />
                    <Route path="/forgot-password" element={<AuthPage type="forgotPassword" />} />
                    <Route path="/reset-password" element={<AuthPage type="resetPassword" />} />
                    <Route path="*" element={<ErrorComponent />} />
                  </Route>
                </Routes>
            </Refine>
        </RefineSnackbarProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};
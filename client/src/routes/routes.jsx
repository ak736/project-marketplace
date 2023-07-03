import {
  LandingPage,
  HomePage,
  DashboardPage,
  InvoicesPage,
  CryptoWalletPage,
  ProjectsPage,
  OrdersPage,
  DetailPage,
} from "../pages";

import Login from "../pages/login/Login";

export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/detail/:id",
    element: <DetailPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
  {
    path: "/orders",
    element: <OrdersPage />,
  },
  {
    path: "/invoices",
    element: <InvoicesPage />,
  },
  {
    path: "/cryptowallet",
    element: <CryptoWalletPage />,
  },
  {
    path: "/landing",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

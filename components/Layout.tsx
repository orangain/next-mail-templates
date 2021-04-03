import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";
import { Button } from "@chakra-ui/button";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    {children}
    <footer>
      <hr />
      <Button colorScheme="blue">OK</Button>
    </footer>
  </div>
);

export default Layout;

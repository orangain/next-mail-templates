import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title?: string;
};

const MailLayout = ({ children }: Props) => (
  <mjml owa="desktop" version="4.3.0">
    <mj-head>
      <mj-font
        href="https://fonts.googleapis.com/css?family=Montserrat"
        name="Montserrat"
      />
      <mj-font
        href="https://fonts.googleapis.com/css?family=Raleway"
        name="Raleway"
      />
      <mj-font
        href="https://fonts.googleapis.com/css?family=Open Sans"
        name="Open Sans"
      />
      <mj-preview></mj-preview>
      <mj-attributes>
        <mj-text
          color="#797e82"
          font-family="Open Sans, Helvetica, Arial, sans-serif"
        />
      </mj-attributes>
    </mj-head>
    <mj-body background-color="#f8f8f8">{children}</mj-body>
  </mjml>
);

export default MailLayout;

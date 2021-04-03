import MailLayout from "../../../components/MailLayout";
import { mjmlHandler } from "../../../utils/mjml-handler";
import { getQueryParameter } from "../../../utils/request";

type WelcomeMailProps = {
  firstName: string;
  productName: string;
};

const WelcomeMail = ({ firstName, productName }: WelcomeMailProps) => (
  <MailLayout title="Home | Next.js + TypeScript Example">
    <mj-section
      background-color="#ffffff"
      background-repeat="repeat"
      padding-bottom="0px"
      padding-left="0px"
      padding-right="0px"
      padding-top="0px"
      padding="20px 0"
      text-align="center"
    >
      <mj-column>
        <mj-divider
          border-color="#ac042c"
          border-style="solid"
          border-width="7px"
          padding-bottom="40px"
          padding-left="0px"
          padding-right="0px"
          padding-top="0px"
          padding="10px 25px"
          width="100%"
        />
        <mj-image
          align="center"
          alt=""
          border="none"
          href=""
          padding-bottom="0px"
          padding-top="0px"
          padding="10px 25px"
          src="https://logo.clearbit.com/example42.com"
          target="_blank"
          title=""
          height="auto"
          width="110px"
        />
      </mj-column>
    </mj-section>
    <mj-section
      background-color="#ffffff"
      background-repeat="repeat"
      background-size="auto"
      padding-bottom="70px"
      padding-top="30px"
      padding="20px 0px 20px 0px"
      text-align="center"
    >
      <mj-column>
        <mj-text
          align="left"
          color="#797e82"
          font-family="Open Sans, Helvetica, Arial, sans-serif"
          font-size="13px"
          line-height="22px"
          padding-bottom="0px"
          padding-left="50px"
          padding-right="50px"
          padding-top="0px"
          padding="0px 25px 0px 25px"
        >
          <h1
            style={{
              textAlign: "center",
              color: "#000000",
              lineHeight: "32px",
            }}
          >
            Welcome {firstName}! We are so happy to have you on board.
          </h1>
        </mj-text>
        <mj-text
          align="left"
          color="#797e82"
          font-family="Open Sans, Helvetica, Arial, sans-serif"
          font-size="13px"
          line-height="22px"
          padding-bottom="0px"
          padding-left="50px"
          padding-right="50px"
          padding-top="0px"
          padding="0px 25px 0px 25px"
        >
          <p style={{ margin: "10px 0", textAlign: "center" }}>
            You can now start using {productName}.
          </p>
        </mj-text>
        <mj-button
          align="center"
          background-color="#ac042c"
          border-radius="100px"
          border="none"
          color="#ffffff"
          font-family="Open Sans, Helvetica, Arial, sans-serif"
          font-size="13px"
          font-weight="normal"
          href="https://example.com/"
          inner-padding="15px 25px 15px 25px"
          padding-bottom="10px"
          padding-top="20px"
          padding="10px 25px"
          text-decoration="none"
          text-transform="none"
          vertical-align="middle"
        >
          <b style={{ fontWeight: 700 }}>Get Started</b>
        </mj-button>
      </mj-column>
    </mj-section>
  </MailLayout>
);

const handler = mjmlHandler("Welcome to Awesome App!", (req) => {
  const props = {
    firstName: getQueryParameter(req.query.firstName) || "John",
    productName: "Awesome App",
  };

  return <WelcomeMail {...props} />;
});

export default handler;

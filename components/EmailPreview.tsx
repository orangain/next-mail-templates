import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
} from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
import Layout from "./Layout";

type Props = {
  url: string;
};

type Email = {
  subject: string;
  html: string;
  text: string;
};

const EmailPreview = ({ url }: Props) => {
  const [email, setEmail] = useState<Email | null>(null);

  const [htmlDataURL, textDataURL] = useMemo(() => {
    if (!email) {
      return [null, null];
    }
    return [
      "data:text/html;base64," + btoa(email.html),
      "data:text/plain;base64," + btoa(email.text),
    ];
  }, [email]);

  useEffect(() => {
    (async () => {
      const res = await fetch(url);
      setEmail(await res.json());
    })().catch(console.error);
  }, [url]);

  return (
    <div>
      <Heading>{email?.subject}</Heading>
      <Tabs>
        <TabList>
          <Tab>HTML</Tab>
          <Tab>Text</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            {htmlDataURL && (
              <iframe
                sandbox="allow-popups"
                src={htmlDataURL}
                width="100%"
                height="400"
              />
            )}
          </TabPanel>
          <TabPanel>
            {textDataURL && (
              <iframe
                sandbox="allow-popups"
                src={textDataURL}
                width="100%"
                height="400"
              />
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default EmailPreview;

import { htmlToText } from "html-to-text";
import mjml2html from "mjml";
import { NextApiRequest, NextApiResponse } from "next";
import { ReactElement } from "react";
import ReactDOMServer from "react-dom/server";

export const mjmlHandler = (
  subject: string,
  getElement: (req: NextApiRequest) => ReactElement
) => {
  return (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const mjml = ReactDOMServer.renderToString(getElement(req));
      console.log(mjml);
      const { html, errors, json } = mjml2html(mjml);
      console.log(json);

      if (errors.length > 0) {
        res.statusCode = 500;
        res.setHeader("Content-Type", 'text/plain; charset="utf-8"');
        res.end(
          errors
            .map((e) => `Line ${e.line} (${e.tagName}): ${e.message}`)
            .join("\n")
        );
      }

      res.status(200).json({
        subject,
        html,
        text: htmlToText(html, { tags: { img: { format: "skip" } } }),
      });
      //   res.statusCode = 200;
      //   res.setHeader("Content-Type", 'text/html; charset="utf-8"');
      //   res.end(html);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  };
};

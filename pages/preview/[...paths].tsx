import { useRouter } from "next/router";
import EmailPreview from "../../components/EmailPreview";
import querystring from "querystring";
import Layout from "../../components/Layout";

const Preview = () => {
  const router = useRouter();

  if (!router.query.paths) {
    return null; // In case of Automatic Static Optimization. See: https://nextjs.org/docs/routing/dynamic-routes#caveats
  }

  const { paths, ...rest } = router.query as {
    paths: string[];
  } & {
    [key: string]: string;
  };

  const url = `/api/emails/${paths.join("/")}?${querystring.stringify(rest)}`;

  return (
    <Layout>
      <EmailPreview url={url} />
    </Layout>
  );
};

export default Preview;

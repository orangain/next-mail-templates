import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout>
    <Link href="/preview/welcome-mail?firstName=Taro">Welcomeメール</Link>
  </Layout>
);

export default IndexPage;

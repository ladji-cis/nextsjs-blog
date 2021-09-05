import Link from "next/link";
import Head from "next/head";

import Layout from "../../components/layout";

import Alert from "../../components/alert";

function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <div>
        <h1>First Post</h1>
        <Alert type="success">Hello</Alert>
      </div>
    </Layout>
  )
}

export default FirstPost;

// This is the base page for the application

// Libraries
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

// Components
import HomepageTopics from '@site/src/components/HomepageTopics';
import HomepageHeader from '@site/src/components/HomepageHeader';

import Translate, {translate} from '@docusaurus/Translate';

// Local
const Home = (): JSX.Element => {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description={translate({message:"Discover, learn, and develop with our data-sharing programs."})}
    >
      <HomepageHeader />
      <main>
        <HomepageTopics />
      </main>
    </Layout>
  );
}

export default Home
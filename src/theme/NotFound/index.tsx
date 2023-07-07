// Override for the 404 pages offered by Docusaurus framework

// Library
import React from 'react';

// Components
import {PageMetadata} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import imageUserTerminal from '@site/static/img/graphics/userTerminal.png';

// Utilties
import Translate, {translate} from '@docusaurus/Translate';

// Styles
import styles from './styles.module.scss';

// Local
const NotFound = (): JSX.Element => {
  return (
    <React.Fragment>
      <PageMetadata
        title={translate({
          id: 'theme.NotFound.title',
          message: 'Page Not Found',
        })}
      />
      <Layout>
        <main className="container margin-vert--xl">
          <div className={styles.contentContainer}>
            <div className={styles.imageContent}>
              <img className={styles.pageImage} src={imageUserTerminal} />
            </div>
            <div className={styles.textContent}>
              <h1 className={styles.pageHeader}>
                <Translate
                  id={'theme.NotFound.title'}
                  description={'The title of the 404 page'}>
                  404
                </Translate>
              </h1>
              <h3 className={styles.pageSubHeader}>
                <Translate
                  id={'theme.NotFound.titleExtended'}
                  description={'The further title explanation of the 404 page'}>
                  Content Unavailable
                </Translate>
              </h3>
              <p className={styles.pageText}>
                <Translate
                  id={'theme.NotFound.p'}
                  description={'The paragraph of the 404 page'}>
                  The content you are trying to access does not exist or is no longer available.
                </Translate>
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </React.Fragment>
  );
}

export default NotFound;

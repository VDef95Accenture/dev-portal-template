// Libraries
import React from 'react';
import { useHistory } from '@docusaurus/router';

// Components
// import imageUserTerminal from '/img/graphics/userTerminal.svg';
// import imageRocketDeploy from '@site/static/img/graphics/rocketDeploy.png';
// import imageSystemsRoute from '@site/static/img/graphics/systemsRoute.svg';

// Utilities
import clsx from 'clsx';

// Constants
import { homePageTopics } from '@site/config/homePageTopics/constants';

// Styles
import styles from './styles.module.scss';

// Local
const topicList = [
  {
    title: homePageTopics.GETTING_STARTED.title,
    redirect: homePageTopics.GETTING_STARTED.link,
    description: homePageTopics.GETTING_STARTED.description,
    imageSource: '/img/graphics/userTerminal.png',
  },
  {
    title: homePageTopics.VIEW_PRODUCTS.title,
    redirect: homePageTopics.VIEW_PRODUCTS.link,
    description: homePageTopics.VIEW_PRODUCTS.description,
    imageSource: '/img/graphics/rocketDeploy.png',
  },
  {
    title: homePageTopics.FIND_ANSWERS.title,
    redirect: homePageTopics.FIND_ANSWERS.link,
    description: homePageTopics.FIND_ANSWERS.description,
    imageSource: '/img/graphics/systemsRoute.png'
  },
];

const Topic = ({title, redirect, description, imageSource}) => {
  const history = useHistory();

  let pathName = '';

  if (typeof window !== 'undefined') {
    pathName = window.location.pathname[window.location.pathname.length] === '/'? window.location.pathname+'/' : window.location.pathname.substring(0,window.location.pathname.length);
  }
  

  return (
    <div className={`${clsx('col col--4')} ${styles.topicContainer}`}>
      <div className={styles.topicCard} onClick={() => { history.push(pathName+redirect) }}>
        <div className="text--center">
          <img className={styles.topicImage} src={imageSource} />
        </div>
        <div className="text--center padding-horiz--md">
          <div className={styles.topicTitle}>{title}</div>
          <div className={styles.topicDescription}>{description}</div>
        </div>
      </div>
    </div>
  );
}

const HomepageTopics = (): JSX.Element => {
  return (
    <section className={styles.topics}>
      <div className="container">
        <div className="row">
          {topicList.map((props, idx) => (
            <Topic key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomepageTopics
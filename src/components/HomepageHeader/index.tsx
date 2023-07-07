// Libraries
import React, { useSyncExternalStore } from 'react';

// Components
import bannerGreyMachine from '@site/static/img/banners/cnhi-landing-image.jpg';

// Utilities
import clsx from 'clsx';

// Constants
import { homePageHeader } from '@site/config/homePageHeader/constants';

// Styles
import styles from './styles.module.scss';

// Local
const HomepageHeader = (): JSX.Element => {
  const mobileBanner = (
    <div className={styles.mobileBanner}>
      <div className={styles.mobileTextContent}>
        <div className={styles.mobileTextHeader}>
          <div className={styles.text}>
          {homePageHeader.BANNER.title1}<br />{homePageHeader.BANNER.title2}
          </div>
        </div>
        <div className={styles.mobileTextSubheader}>
          <div className={styles.text}>
          {homePageHeader.BANNER.tagline1}<br />{homePageHeader.BANNER.tagline2}
          </div>
        </div>
      </div>
    </div>
  );

  const desktopBanner = (
    <div className={styles.desktopBanner}>
      <div className={styles.bannerContent}>
        <div className={styles.bannerImageContent}>
          <img src='/img/banners/cnhi-landing-image.jpg'/>
        </div>
        <div className={styles.bannerTextContent}>
            <div className={styles.bannerHeader}>
                <div className={styles.text}>
                  {homePageHeader.BANNER.title1}<br />{homePageHeader.BANNER.title2}
                </div>
            </div>
            <div className={styles.bannerSubheader}>
                <div className={styles.text}>
                  {homePageHeader.BANNER.tagline1}<br />{homePageHeader.BANNER.tagline2}
                </div>
            </div>
        </div>
      </div>
    </div>
  );

  return (
    <header className={clsx('hero hero--primary', styles.bannerContainer)}>
      {desktopBanner}
      {mobileBanner}
    </header>
  );
}

export default HomepageHeader
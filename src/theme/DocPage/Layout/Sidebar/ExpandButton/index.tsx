// Libraries
import React from 'react';

// Utilities
import {translate} from '@docusaurus/Translate';

// Components
import ArrowIcon from '@site/static/img/icons/arrow-head-right.svg'

// Types
import { ButtonProps } from './types';

// Styles
import styles from './styles.module.scss';

// Local
const DocPageLayoutSidebarExpandButton = (props: ButtonProps): JSX.Element => {
  const { toggleSidebar } = props;

  return (
    <div
      className={styles.expandButton}
      title={translate({
        id: 'theme.docs.sidebar.expandButtonTitle',
        message: 'Expand sidebar',
        description:
          'The ARIA label and title attribute for expand button of doc sidebar',
      })}
      aria-label={translate({
        id: 'theme.docs.sidebar.expandButtonAriaLabel',
        message: 'Expand sidebar',
        description:
          'The ARIA label and title attribute for expand button of doc sidebar',
      })}
      tabIndex={0}
      role="button"
      onKeyDown={toggleSidebar}
      onClick={toggleSidebar}
    >
      <div className={styles.expandButtonIcon}>
        <ArrowIcon color={'white '} height={30} width={30} />
      </div>
    </div>
  );
}

export default DocPageLayoutSidebarExpandButton;

// Override for the menu-collapse button at the bottome of the side menu.

// Libraries
import React from 'react';

// Utilities
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';

// Components
import ArrowIcon from '@site/static/img/icons/arrow-head-right.svg'

// Types
import { ButtonProps } from './types';

// Styles
import styles from './styles.module.scss';

// Local
const CollapseButton = (props: ButtonProps): JSX.Element => {
  const { onClick } = props;

  return (
    <button
      type="button"
      title={translate({
        id: 'theme.docs.sidebar.collapseButtonTitle',
        message: 'Collapse sidebar',
        description: 'The title attribute for collapse button of doc sidebar',
      })}
      aria-label={translate({
        id: 'theme.docs.sidebar.collapseButtonAriaLabel',
        message: 'Collapse sidebar',
        description: 'The title attribute for collapse button of doc sidebar',
      })}
      className={clsx(
        'button button--secondary button--outline',
        styles.collapseSidebarButton,
      )}
      onClick={onClick}
    >
      <div className={styles.collapseSidebarButtonIcon}>
        <ArrowIcon color={'white'} height={30} width={30} />
      </div>
    </button>
  );
}

export default CollapseButton;

// Override for the Doc link card list that exists on category pages

// Libraries
import React from 'react';

// Components
import DocCard from '@theme/DocCard';

// Utilities
import clsx from 'clsx';
import {
  useCurrentSidebarCategory,
  filterDocCardListItems,
} from '@docusaurus/theme-common';

// Styles
import styles from './styles.module.scss';

// Local
interface DocCardListProps {
  items: any,
  className: string,
}

const DocCardListForCurrentSidebarCategory = ({className}): JSX.Element => {
  const category = useCurrentSidebarCategory();

  return <DocCardList items={category.items} className={className} />;
}

const DocCardList = (props: DocCardListProps): JSX.Element => {
  const {items, className} = props;

  if (!items) {
    return <DocCardListForCurrentSidebarCategory {...props} />;
  }
  
  const filteredItems = filterDocCardListItems(items);

  return (
    <section className={clsx('column', styles[className])}>
      {filteredItems.map((item, index) => (
        <article key={index} className={styles.cardListItem}>
          <DocCard item={item} />
        </article>
      ))}
    </section>
  );
}

export default DocCardList;

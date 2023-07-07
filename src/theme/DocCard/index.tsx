// Override for the Doc link card that exists on category pages

// Libraries
import React from 'react';

// Components
import Link from '@docusaurus/Link';
import RightArrowIcon from '@site/static/img/icons/arrowCircleRight.svg';

// Utilities
import clsx from 'clsx';
import {
  findFirstCategoryLink,
  useDocById,
} from '@docusaurus/theme-common/internal';

// Translation
import Translate, {translate} from '@docusaurus/Translate';

// Styles
import styles from './styles.module.scss';

// Local
const CardContainer = ({href, children}): JSX.Element => {
  return (
    <Link
      href={href}
      className={clsx('card padding--lg', styles.cardContainer)}>
      {children}
    </Link>
  );
}

const CardLayout = ({href, title, description}): JSX.Element => {
  return (
    <CardContainer href={href}>
      <div className={'row'}>
        <div className={styles.cardInfoContainer}>
          <h2 className={clsx('text--truncate', styles.cardTitle)} title={title}>
            {title}
          </h2>
          {description && (
            <p
              className={clsx('text--truncate', styles.cardDescription)}
              title={description}>
              {description}
            </p>
          )}
        </div>
        <div className={styles.cardGraphicContainer}>
          <div className={styles.iconContainer}>
            <div className={styles.iconFiller} />
            <div className={styles.iconContent}>
              <RightArrowIcon color='#A32428' height={'60px'} width={'60px'}/>
            </div>
          </div>
        </div>
      </div>
    </CardContainer>
  );
}

const CardCategory = ({item}): JSX.Element => {
  const href = findFirstCategoryLink(item);
  // Unexpected: categories that don't have a link have been filtered upfront
  if (!href) {
    return null;
  }

  const customIntro = <Translate>Documentation and guides for API.</Translate>
  const defaultIntro = translate(
    {
      message: 'Contains {count} item(s)',
      id: 'theme.docs.DocCard.categoryDescription',
      description:
        'The default description for a category card in the generated index about how many items this category includes',
    },
    {count: item.items.length},
  );

  return (
    <CardLayout
      href={href}
      title={item.label}
      description={customIntro ?? defaultIntro}
    />
  );
}

const CardLink = ({item}): JSX.Element => {
  const doc = useDocById(item.docId ?? undefined);

  return (
    <CardLayout
      href={item.href}
      title={item.label}
      description={doc?.description}
    />
  );
}

const DocCard = ({item}): JSX.Element => {
  switch (item.type) {
    case 'link':
      return <CardLink item={item} />;
    case 'category':
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}

export default DocCard
// Libraries
import React from 'react';

// Components
import ArrowIcon from '@site/static/img/icons/arrowRight.svg';

// Types
import { ListProps, ItemsProps } from './types'

// Styles
import styles from './styles.module.scss';

// Local
const ColumnItems = (props: ItemsProps): JSX.Element => {
    const { columnItems } = props;
    const iconSize = '20px';
    const renderedItems = [];

    for (const item in columnItems) {
        renderedItems.push(
            <div key={item} className={styles.columnItem}>
                <div className={styles.iconContainer}>
                    <ArrowIcon height={iconSize} width={iconSize} />
                </div>
                <div>{columnItems[item]}</div>
            </div>
        );
    }

    return (
        <>{renderedItems}</>
    );
}
const ColumnList = (props: ListProps): JSX.Element => {
    const { columnTitle, columnItems } = props;

    return (
        <div className={styles.columnList}>
            <h3>{columnTitle}</h3>
            <ColumnItems columnItems={columnItems} />
        </div>
    );
  }

export default ColumnList

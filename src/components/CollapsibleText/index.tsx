// Libraries
import React, { useState } from 'react';

// Components
import ArrowIcon from '@site/static/img/icons/arrowRight.svg';

// Types
import { ElementProps, OrderedProps } from './types';

// Styles
import styles from './styles.module.scss';

// Local
const getOrderedChildren = (children: any): OrderedProps => {
    const orderedChildren: OrderedProps = {
        summary: <div>Title</div>,
        content: [],
    }

    children.forEach(entry => {
        if (entry.props.mdxType === 'Summary') {
            orderedChildren.summary = entry;
        } else {
            orderedChildren.content.push(entry);
        }
    })

    return orderedChildren;
}

const CollapsibleText = (props: ElementProps): JSX.Element => {
    const { children } = props;
    const iconSize = '30px';
    const [isCollapsed, setIsCollapsed] = useState(true);
    const orderedChildren = getOrderedChildren(children);

    return (
        <div className={styles.collapsibleTextContainer}>
            <div className={styles.summaryContainer} onClick={() => setIsCollapsed(!isCollapsed)}>
                <div className={styles.summary}>
                    {orderedChildren.summary}
                </div>
                <div className={styles.iconContainer}>
                    <div className={isCollapsed ? styles.hiddenIcon : styles.shownIcon}>
                        <ArrowIcon  height={iconSize} width={iconSize} />
                    </div>
                </div>
            </div>
            <div className={isCollapsed ? styles.hiddenContent : styles.shownContent}>
                {orderedChildren.content}
            </div>
        </div>
    );
  }

export default CollapsibleText

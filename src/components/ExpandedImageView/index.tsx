// Libraries
import React, { useState } from 'react';

// Types
import { ViewProps } from './types';

// Styles
import styles from './styles.module.scss';

import Translate, { translate } from '@docusaurus/Translate';

// Local
const ExpandedImageView = (props: ViewProps): JSX.Element => {
    const { imgSrc } = props;
    const [ isExpanded, setIsExpanded ] = useState(false);

    return (
        <div onClick={() => setIsExpanded(!isExpanded)}>
            <div className={isExpanded ? styles.isExpandedImageView : styles.notExpandedImageView}>
                <div className={styles.imageContent}>
                    <div className={styles.imageSource}>
                        <img src={imgSrc} />
                    </div>   
                </div>
                <div className={styles.imageText}>
                    <Translate>Click anywhere to close.</Translate>
                </div>
            </div>
            <div className={styles.minimizedView}>
                <div className={styles.imageContent}>
                    <div className={styles.imageSource}>
                        <img src={imgSrc} />
                    </div>
                </div>
                <div className={styles.imageText}>
                   <Translate> Click image to expand.</Translate>
                </div>
            </div>
        </div>
    );
  }

export default ExpandedImageView

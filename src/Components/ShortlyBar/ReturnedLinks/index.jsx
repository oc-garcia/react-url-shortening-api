import React, { useState } from 'react';

import styles from './ReturnedLinks.module.css'

export default function ReturnedLinks({linkOriginal, linkShort}) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(linkShort);
    setCopied(true);
  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <p className={styles.original}>{linkOriginal}</p>
        <div className={styles.container}>
          <p className={styles.short}>{linkShort}</p>
          <button onClick={copyToClipboard}>{copied ? 'Copied!' : 'Copy to clipboard'}</button>
        </div>
      </div>
    </div>
  )
}

import { type FC } from 'react';

import {Code} from '../../assets';

import './index.css';

interface Props {
  className?: string;
}

export const Badge: FC<Props> = ({ className }) => (
  <div className={`badge ${className ?? ''}`}>
    <Code/>
    <div className="badge-text">
      <span className="badge-title">
        Immutable Snapshot Live
      </span>
      <span className="badge-subtitle">
        CID: bafybe...hvkmga
      </span>
    </div>
  </div>
)

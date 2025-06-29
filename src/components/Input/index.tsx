import {type FC, type HTMLProps} from 'react';

import {ArrowRight} from '../../assets';

import './index.css';

interface Props extends Omit<HTMLProps<HTMLInputElement>, 'onChange'> {
  onSubmit: () => void
  onChange: (value: string) => void
}

export const Input: FC<Props> = ({ onSubmit, onChange, value, disabled, ...props}) => (
  <div className="input-wrapper">
    <input
      {...props}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      disabled={disabled}
      className="input"
    />
    <button onClick={onSubmit} disabled={!value} className="input-button"><ArrowRight/></button>
  </div>
)

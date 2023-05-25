'use client';

import { useId } from 'react';
import { Tooltip as ReactTooltip, type ITooltip } from 'react-tooltip';

interface TooltipProps extends ITooltip {
  tooltip: React.ReactNode;
  children: React.ReactNode;
}

export default function Tooltip({ tooltip, children, ...props }: TooltipProps) {
  const id = useId();

  return (
    <>
      <div id={id}>{children}</div>
      <ReactTooltip anchorSelect={`#${id}`} {...props}>
        {tooltip}
      </ReactTooltip>
    </>
  );
}

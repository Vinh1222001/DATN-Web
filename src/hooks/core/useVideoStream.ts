import { IUseVideoResult, IUseVideoStreamProps } from 'hook';
import { useRef } from 'react';

export const useVideoStream = ({
  name,
  url,
  alt
}: IUseVideoStreamProps): IUseVideoResult => {
  const ref = useRef(null);

  const _alt = alt ?? name;

  return {
    ref,
    name,
    src: url,
    alt: _alt
  };
};

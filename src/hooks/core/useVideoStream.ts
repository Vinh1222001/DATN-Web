import { IUseVideoResult, IUseVideoStreamProps } from 'hook';

export const useVideoStream = ({
  // ref,
  name,
  url,
  alt
}: IUseVideoStreamProps): IUseVideoResult => {
  const _alt = alt ?? name;

  return {
    name,
    src: url,
    alt: _alt
  };
};

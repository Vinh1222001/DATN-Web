import { IUseVideoResult } from 'hook';
import { useMount } from './useMount';
import { unset, set } from 'lodash';
import { videoRef } from '@/constants';
import { useEffect } from 'react';

export const useGlobalVideo = (
  video: IUseVideoResult,
  unmount: boolean = true
) => {
  useMount(() => {
    return () => {
      if (unmount) {
        unset(videoRef, video.name);
      }
    };
  });

  useEffect(() => {
    set(videoRef, video.name, video);
  }, [video, unmount]);
};

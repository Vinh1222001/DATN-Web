'use client';
import { useWebSocketContext } from '@/app/_components/providers/soket';
import Grid from '@/components/ui/layouts/Grid';
import { memo, useCallback, useMemo } from 'react';
import DataBox from './DataBox';
import Typography from '@/components/ui/Typography';
import { ColorDetectorData } from 'service';

const EspData = () => {
  const { messages } = useWebSocketContext();
  const latestMessage = useMemo(() => [...messages].pop(), [messages]);

  const toHex = useCallback((c: number | string) => {
    const hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
  }, []);

  const rbg2Hex = useCallback(
    (v?: ColorDetectorData) => {
      if (v) {
        const { red, green, blue } = v;
        return '#' + toHex(red) + toHex(green) + toHex(blue);
      }
      return '#000000';
    },
    [toHex]
  );
  return (
    <Grid.Container>
      <Grid.Item colSpan={12}>
        <Typography.Heading variant={'h3'}>Line Follower</Typography.Heading>
      </Grid.Item>
      <Grid.Item colSpan={4}>
        <DataBox
          name="leftMost"
          title="Left Most"
          value={latestMessage?.message.lineFollower?.leftMost ?? ''}
        />
      </Grid.Item>

      <Grid.Item colSpan={4}>
        <DataBox
          name="left"
          title="Left"
          value={latestMessage?.message.lineFollower?.left ?? ''}
        />
      </Grid.Item>
      <Grid.Item colSpan={4}>
        <DataBox
          name="center"
          title="Center"
          value={latestMessage?.message.lineFollower?.center ?? ''}
        />
      </Grid.Item>
      <Grid.Item colSpan={4}>
        <DataBox
          name="right"
          title="Right"
          value={latestMessage?.message.lineFollower?.right ?? ''}
        />
      </Grid.Item>
      <Grid.Item colSpan={4}>
        <DataBox
          name="rightMost"
          title="Right Most"
          value={latestMessage?.message.lineFollower?.rightMost ?? ''}
        />
      </Grid.Item>
      <Grid.Item colSpan={4}>
        <DataBox
          name="decision"
          title="Decision"
          value={latestMessage?.message.lineFollower?.decision ?? ''}
        />
      </Grid.Item>

      <Grid.Item colSpan={12} className="mt-3">
        <Typography.Heading variant={'h3'}>Color Detector</Typography.Heading>
      </Grid.Item>
      <Grid.Item colSpan={4}>
        <DataBox
          name="red"
          title="Red"
          value={latestMessage?.message?.colorDetector?.red ?? ''}
        />
      </Grid.Item>
      <Grid.Item colSpan={4}>
        <DataBox
          name="green"
          title="Green"
          value={latestMessage?.message?.colorDetector?.green ?? ''}
        />
      </Grid.Item>
      <Grid.Item colSpan={4}>
        <DataBox
          name="blue"
          title="Blue"
          value={latestMessage?.message?.colorDetector?.blue ?? ''}
        />
      </Grid.Item>
      <Grid.Item colSpan={6}>
        <DataBox
          name="color"
          title="Detected Color"
          value={latestMessage?.message?.colorDetector?.color ?? ''}
        />
      </Grid.Item>

      <Grid.Item colSpan={6}>
        <DataBox
          type="color"
          name="visualizedColor"
          title="Visualized Color"
          value={rbg2Hex(latestMessage?.message?.colorDetector) ?? ''}
        />
      </Grid.Item>

      <Grid.Item colSpan={12} className="mt-3">
        <Typography.Heading variant={'h3'}>
          Product Classification
        </Typography.Heading>
      </Grid.Item>
      <Grid.Item colSpan={4}>
        <DataBox
          name="label"
          title="Label"
          value={latestMessage?.message?.productType?.label ?? 'N/A'}
        />
      </Grid.Item>
      <Grid.Item colSpan={4}>
        <DataBox
          name="accuration"
          title="Accuration"
          value={latestMessage?.message?.productType?.accuration ?? '0.00'}
        />
      </Grid.Item>
      <Grid.Item colSpan={4}>
        <DataBox
          name="x"
          title="X"
          value={latestMessage?.message?.productType?.x ?? '0'}
        />
      </Grid.Item>
      <Grid.Item colSpan={4}>
        <DataBox
          name="y"
          title="Y"
          value={latestMessage?.message?.productType?.y ?? '0'}
        />
      </Grid.Item>
      <Grid.Item colSpan={4}>
        <DataBox
          name="width"
          title="Width"
          value={latestMessage?.message?.productType?.width ?? '0'}
        />
      </Grid.Item>
      <Grid.Item colSpan={4}>
        <DataBox
          name="height"
          title="Hieght"
          value={latestMessage?.message?.productType?.height ?? '0'}
        />
      </Grid.Item>
    </Grid.Container>
  );
};

export default memo(EspData);

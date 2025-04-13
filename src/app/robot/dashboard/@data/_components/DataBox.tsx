import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Flex from '@/components/ui/layouts/Flex';
import Typography from '@/components/ui/Typography';
import { memo, useId } from 'react';

interface IProps {
  title: string;
  name: string;
  value: string | number;
  type?: 'text' | 'color' | 'number';
}

const DataBox = (props: IProps) => {
  const id = useId();
  return (
    <Flex
      gap={'sm'}
      alignItems={'start'}
      justifyContent={'center'}
      direction={'column'}
    >
      <Label htmlFor={`${props.name}-${id}`}>
        <Typography.Muted>{props.title}</Typography.Muted>
      </Label>
      <Input
        type={props.type ?? 'text'}
        id={`${props.name}-${id}`}
        value={props.value}
        disabled
      />
    </Flex>
  );
};
export default memo(DataBox);

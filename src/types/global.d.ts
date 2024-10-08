declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.svg' {
  import { type ReactElement, type SVGProps } from 'react';

  const content: (props: SVGProps<SVGElement>) => ReactElement;
  export default content;
}

declare module '*.png' {
  const value: any;
  export = value
}

declare module '*.jpg' {
  const value: any;
  export = value
}

declare const __PROJECT__: 'frontend' | 'storybook';
declare const __IS_DEV__: boolean;

type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;

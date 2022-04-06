export type getFCProps<P> = (
  ...args: Parameters<React.FC<P>>
) => ReturnType<React.FC<P>>;

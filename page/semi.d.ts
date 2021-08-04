declare interface NodeModule {
  hot: {
    accept(param: string, fn: () => void, callback?: () => void): void;
  };
}

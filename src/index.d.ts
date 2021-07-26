declare interface Window {
    api: {
      getConfig: () => void;
      receiveConfig: (func: (event: any, ...arg: any) => void) => void;
    }
}
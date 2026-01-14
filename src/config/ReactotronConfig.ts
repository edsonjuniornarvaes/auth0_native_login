import Reactotron from 'reactotron-react-native';

const reactotron = Reactotron.configure({
  name: 'Auth0 Native Login',
})
  .useReactNative({
    asyncStorage: false,
    networking: {
      ignoreUrls: /symbolicate/,
    },
    editor: false,
    errors: { veto: () => false },
    overlay: false,
  })
  .connect();

if (__DEV__) {
  console.tron = reactotron;
}

export default reactotron;

declare global {
  interface Console {
    tron: typeof Reactotron;
  }
}

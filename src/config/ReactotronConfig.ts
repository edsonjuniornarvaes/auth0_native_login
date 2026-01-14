import Reactotron from 'reactotron-react-native';

// Configuração do Reactotron para logs detalhados
const reactotron = Reactotron
  .configure({
    name: 'Auth0 Native Login',
    // host: 'localhost', // descomente para especificar o host
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

// Estender o console para logar no Reactotron
if (__DEV__) {
  console.tron = reactotron;
}

export default reactotron;

// Tipos para TypeScript
declare global {
  interface Console {
    tron: typeof Reactotron;
  }
}

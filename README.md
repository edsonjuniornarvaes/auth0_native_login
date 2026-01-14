# Auth0 Native Login - React Native

Este projeto demonstra a implementação de **login nativo com Auth0** em React Native, usando módulos nativos personalizados para Android e iOS.

##  ✅ Login nativo funcionando no iOS.

|Vídeo do processo de autenticação| Tela com dados pós autenticação|
|---------------------------------|--------------------------------|
|![Simulator-Screen-Recording-iPhone-17-Pro-Max-2026-01-14-at-14 44 47](https://github.com/user-attachments/assets/b675688f-1876-436c-b075-bf0f71b0dc05)|<img width="1320" height="2868" alt="Simulator Screenshot - iPhone 17 Pro Max - 2026-01-14 at 14 53 47" src="https://github.com/user-attachments/assets/478db7ea-e83e-4b76-b19c-356c30e059f5" width="400" />|

## 🚀 Recursos

- ✅ Login Nativo (Email/Senha) usando Resource Owner Password Grant
- ✅ Web Auth (Login via navegador)
- ✅ Módulos nativos personalizados para Android e iOS
- ✅ Integração com Reactotron para logs detalhados
- ✅ TypeScript com tipos completos
- ✅ UI moderna e responsiva

## 📋 Pré-requisitos

- Node.js 20+
- React Native CLI
- Xcode (para iOS)
- Android Studio (para Android)
- Uma conta Auth0 com uma aplicação configurada

## ⚙️ Configuração do Auth0

### 1. Criar Aplicação no Auth0

1. Acesse [Auth0 Dashboard](https://manage.auth0.com)
2. Crie uma nova aplicação do tipo **Native**
3. Anote o **Client ID** e **Domain**

### 2. Habilitar Resource Owner Password Grant

Para usar o login nativo (email/senha), você precisa habilitar o ROPG:

1. Vá em **Applications > APIs > Auth0 Management API**
2. Na aba **Machine to Machine Applications**, autorize sua aplicação
3. Vá em **Settings > Advanced Settings > Grant Types**
4. Habilite **Password** grant type

### 3. Configurar Callback URLs

No Auth0 Dashboard, configure as URLs de callback:

**Android:**
```
auth0://YOUR_AUTH0_DOMAIN/android/com.auth0_native_login/callback
```

**iOS:**
```
com.auth0_native_login://YOUR_AUTH0_DOMAIN/ios/com.auth0_native_login/callback
```

## 📱 Configuração do Projeto

### Android

Edite o arquivo `android/app/src/main/res/values/strings.xml`:

```xml
<resources>
    <string name="app_name">auth0_native_login</string>
    
    <!-- Auth0 Configuration -->
    <string name="com_auth0_client_id">SEU_CLIENT_ID</string>
    <string name="com_auth0_domain">SEU_DOMAIN.auth0.com</string>
    <string name="com_auth0_scheme">auth0</string>
</resources>
```

### iOS

Edite o arquivo `ios/auth0_native_login/Auth0.plist`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Domain</key>
    <string>SEU_DOMAIN.auth0.com</string>
    <key>ClientId</key>
    <string>SEU_CLIENT_ID</string>
</dict>
</plist>
```

## 🛠️ Instalação

```bash
# Instalar dependências
npm install

# iOS: Instalar Pods
cd ios && pod install && cd ..

# Android: Build inicial (opcional)
cd android && ./gradlew clean && cd ..
```

## 🏃 Executando

```bash
# Iniciar Metro Bundler
npm start

# Executar no Android
npm run android

# Executar no iOS
npm run ios
```

## 🔍 Reactotron

Para visualizar os logs do Auth0:

1. Baixe o [Reactotron](https://github.com/infinitered/reactotron/releases)
2. Inicie o Reactotron antes de executar o app
3. Os logs aparecerão automaticamente com detalhes das chamadas Auth0

### Logs Disponíveis

- Login attempts (nativo e web)
- Token decoding
- User profile fetching
- Session management
- Errors detalhados

## 📁 Estrutura do Projeto

```
src/
├── config/
│   └── ReactotronConfig.ts    # Configuração do Reactotron
├── screens/
│   ├── LoginScreen.tsx        # Tela de login
│   └── ProfileScreen.tsx      # Tela de perfil
├── services/
│   └── Auth0Service.ts        # Serviço Auth0 com bridge nativa
├── types/
│   └── Auth0Module.d.ts       # Tipos TypeScript
└── index.ts                   # Exports

android/app/src/main/java/com/auth0_native_login/
├── Auth0Module.kt             # Módulo nativo Android
├── Auth0Package.kt            # Package React Native
├── MainActivity.kt
└── MainApplication.kt

ios/auth0_native_login/
├── Auth0Module.swift          # Módulo nativo iOS
├── Auth0Module.m              # Bridge Objective-C
├── Auth0.plist                # Configuração Auth0
└── ...
```

## 🔐 API do Serviço Auth0

```typescript
import auth0Service from './src/services/Auth0Service';

// Login nativo com email/senha
const credentials = await auth0Service.loginWithEmailPassword(email, password);

// Login via Web Auth
const credentials = await auth0Service.loginWithWebAuth();

// Logout
await auth0Service.logout();

// Obter informações do usuário
const profile = await auth0Service.getUserInfo(accessToken);

// Verificar credenciais
const hasCredentials = await auth0Service.hasValidCredentials();

// Obter credenciais cacheadas
const cached = await auth0Service.getCachedCredentials();
```

## ⚠️ Importante

O **Resource Owner Password Grant (ROPG)** é considerado legacy pelo Auth0 e não é recomendado para aplicações novas. Use apenas se:

- Você confia totalmente no aplicativo
- Precisa de uma experiência de login nativa sem browser
- Entende os riscos de segurança envolvidos

Para a maioria dos casos, use **Web Auth** que oferece:
- Maior segurança
- Suporte a MFA
- SSO entre aplicações
- Compliance com OAuth 2.0/OIDC

## 📄 Licença

MIT

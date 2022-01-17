/// <reference types="react-scripts" />

/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    // readonly REACT_APP_NODE_ENV: 'development' | 'production' | 'test';
    readonly REACT_APP_API_HOST: string;
    readonly REACT_APP_API_LOGIN_URL: string;
    readonly REACT_APP_API_REGISTER_URL: string;
    readonly REACT_APP_API_USER_URL: string;
    readonly REACT_APP_API_LOGOUT_URL: string;
  }
}

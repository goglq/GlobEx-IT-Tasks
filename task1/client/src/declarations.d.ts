declare module '*.module.scss' {
  const classes: { [key: string]: string }
  export default classes
}

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_BACKEND_URL: string
  }
}

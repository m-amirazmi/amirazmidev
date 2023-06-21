const ENV = "DEV";

const LOCAL_APIS = {
  DEV: "http://localhost:3000/",
  PROD: "https://amirazmi.dev/",
};

export const LOCALAPI = LOCAL_APIS[ENV];

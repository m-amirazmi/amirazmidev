import IconReact from "./icon-react";

type Icon = {
  [key: string]: () => JSX.Element;
};

export const icons: Icon = {
  react: IconReact,
};

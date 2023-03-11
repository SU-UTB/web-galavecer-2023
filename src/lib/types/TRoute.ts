type TRoute = {
  path: string;
  text: string;
  component?: React.ReactNode | (() => JSX.Element);
};

export default TRoute;

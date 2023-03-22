import "./controller.scss";

type ControllerPropsType = {
  text: string | JSX.Element;
  className: string;
};

const Controller = ({ text, className }: ControllerPropsType): JSX.Element => {
  return <button className={className}>{text}</button>;
};

export default Controller;

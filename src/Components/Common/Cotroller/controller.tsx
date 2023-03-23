import "./controller.scss";

type ControllerPropsType = {
  text: string | JSX.Element;
  className: string;
  onClick?:() => void
};

const Controller = ({ text, className, onClick }: ControllerPropsType): JSX.Element => {
  return <button onClick={onClick} className={className}>{text}</button>;
};

export default Controller;

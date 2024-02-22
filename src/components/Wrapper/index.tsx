import "./wrapper.css";
import { IWrapperProps } from "./models/wrapper.model";

export const Wrapper = (props: IWrapperProps) => {
  return <div className="continaer-wrapper py-3">{props.children}</div>;
};

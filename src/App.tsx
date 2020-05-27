import * as React from "react";
import "./styles.css";

type UseHoverProps<T extends HTMLElement> = [React.RefObject<T>, boolean];
const useHover = <T extends HTMLElement>(): UseHoverProps<T> => {
  const [isHover, setIsHover] = React.useState(false);
  const ref = React.useRef<T>(null);
  React.useEffect(() => {
    const element = ref.current;
    const handleenter = () => {
      setIsHover(true);
    };
    const handleleave = () => {
      setIsHover(false);
    };
    if (element) {
      element.addEventListener("mouseleave", handleleave);
      element.addEventListener("mouseenter", handleenter);
      return () => {
        element.removeEventListener("mouseleave", handleleave);
        element.removeEventListener("mouseenter", handleenter);
      };
    }
  }, [ref.current]);
  return [ref, isHover];
};

export default function App() {
  const [ref, isHover] = useHover<HTMLDivElement>();
  return (
    <div className="App" ref={ref}>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {isHover && <h1> Estoy aqui</h1>}
    </div>
  );
}

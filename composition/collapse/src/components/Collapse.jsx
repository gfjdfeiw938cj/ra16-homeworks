import {useState} from "react";

export default function Collapse(props) {
console.log(props)
  const [collapse, setCollapse] = useState(true)

  const collapsedLabel = props.collapsedLabel ? props.collapsedLabel : 'Развернуть '
  const expandedLabel = props.expandedLabel ? props.expandedLabel : 'Свернуть '

  const handleClick = () => {
    setCollapse(prevState => !prevState)
  }

  return (
    <div className="collapse" data-collapse={collapse}>
      <div className="body">{props.children}</div>
      <div className="collapse--label" onClick={handleClick}>{collapse ? collapsedLabel : expandedLabel}</div>
    </div>
  );
}

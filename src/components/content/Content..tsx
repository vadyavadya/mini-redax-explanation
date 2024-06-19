// import { useSelector } from "react-redux";
import { useAppSelector } from "../../app/hooks"
import { selectContent } from "./contentSlice"

export default function Content() {
  // получаем наже сотояние через хук useSelector() тут из за ts используется useAppSelector
  const content = useAppSelector(selectContent);

  // так тоже работает
  // const content = useSelector(selectContent);

  return (
    <div className="container">
    <div>
      Значение store content: {content ? "true" : "fasle"}
    </div>
    </div>
  )
}
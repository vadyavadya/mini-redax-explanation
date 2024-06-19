// import { useSelector } from "react-redux";
import { useAppSelector } from "../../app/hooks"
import { selectContent } from "./contentSlice"
import style from './style.module.css'

export default function Content() {
  // получаем наше сотояние через хук useSelector() тут из за ts используется useAppSelector
  const content = useAppSelector(selectContent);
  // так тоже работает
  // const content = useSelector(selectContent);

  // задаем стили в зависимости от состояния
  let styleBlock = style.redBlock;
  if (!content) {
    styleBlock += ' ' + style.hide;
  }

  return (
    <div className="container">
      <div>
        Значение store content: {content ? "true" : "fasle"}
      </div>
      <div className={styleBlock}></div>
    </div>
  )
}
// import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectContent, toggleVisible } from "../content/contentSlice";
import style from "./style.module.css";

// Заголовок где по нажатию кнопки происходит изменения т.к. тут состояние не нужно
// мы объявляем только диспатч(через него мы говорим стору что надо поменять состояние)
export default function Header() {
  const dispatch = useAppDispatch();
  // для js без ts используй это
  // const dispatch = useDispatch();
  
  // получение состояния для подписи в кнопке
  const content = useAppSelector(selectContent);
  let textButton = content ? 'Скрыть': 'Показать' 

  return (
    <header>
      <div className="container">
        <div className={style["d-flex"]}>
          <div className="">Заголовок</div>
          {/* тут мы по нажатию, обращаемся к стору через диспачь и говорим что делать какой акшин нужно выполнить */}
          <button onClick={()=> dispatch(toggleVisible())}>{textButton}</button>
        </div>
      </div>
    </header>
  )
}
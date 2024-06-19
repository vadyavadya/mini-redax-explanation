// import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../app/hooks";
import { toggleVisible } from "../content/contentSlice";
import style from "./style.module.css";

// Заголовок где по нажатию кнопки происходит изменения т.к. тут состояние не нужно
// мы объявляем только диспатч(через него мы говорим стору что надо поменять состояние)
export default function Header() {
  const dispatch = useAppDispatch();

  // для js без ts используй это
  // const dispatch = useDispatch();

  return (
    <header>
      <div className="container">
        <div className={style["d-flex"]}>
          <div className="">Заголовок</div>
          {/* тут мы по нажатию, обращаемся к стору через диспачь и говорим что делать какой акшин нужно выполнить */}
          <button onClick={()=> dispatch(toggleVisible())}>Скрыть</button>
        </div>
      </div>
    </header>
  )
}
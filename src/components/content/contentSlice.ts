import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface ContentVisibleState {
  value: boolean;
}

// Состояние в createSlice должно быть поле initialState можно в нем написать можно так сделать
const initialState: ContentVisibleState = {
  value: false,
};

// Создаем слайсер
export const contentSlice = createSlice({
  // обязательно имя для обращения и отслеживания
  name: 'content',
  // начальное состояние можно было написать initialState: {value: false},
  initialState,
  // обязательно редьюсер мы их вызываем для изменения состояния
  reducers: {
    // можно несколько
    // setVisible:(state) => {
    //   state.value = true;
    // },
    // setInvisible:(state) => {
    //   state.value = false;
    // },

    // получаем state наше состояние, так же можно что то передать при вызови и это поместится в actionPayload 
    // toggleVisible: (state, actionPayload)=>{state.value = actionPAyload.value}
    toggleVisible: (state) => {
      state.value = !state.value;
    },
  }
})

// данная запись для того чтобы в другом файле получить наше состояние через useSelector()
// можно было написать в другом фале  const content = useSelector(store.state.content.value) 
// а мы напишем const content = useSelector(selectContent)
export const selectContent = (state: RootState) => state.content.value;

// экспортируем наш созданный экшн чтобы менять состояние обязательно так
export const { toggleVisible } = contentSlice.actions;

// по умолчаниь для стора возвращаем редьюсер так надо
export default contentSlice.reducer;
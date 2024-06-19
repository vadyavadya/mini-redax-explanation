# Обьяснение

Основные файлы:
- **[index.tsx](https://github.com/vadyavadya/mini-redax-explanation/blob/main/src/index.tsx)** входной,
- **[App.tsx](https://github.com/vadyavadya/mini-redax-explanation/blob/main/src/App.tsx)** разметка страницы,
- **[store.ts](https://github.com/vadyavadya/mini-redax-explanation/blob/main/src/app/store.ts)** содержит стор
- **[contentSlicer.ts](https://github.com/vadyavadya/mini-redax-explanation/blob/main/src/components/content/contentSlice.ts)** слайсер для контента
- **[Header.tsx](https://github.com/vadyavadya/mini-redax-explanation/blob/main/src/components/header/Header.tsx), [Content.tsx](https://github.com/vadyavadya/mini-redax-explanation/blob/main/src/components/content/Content..tsx)** используют стор

## Для развертывания
1. Клонируем репозиторий  `git clone https://github.com/vadyavadya/mini-redax-explanation.git`
2. Переходим в папку `npm i`
3. Запускаем `npm start`

## Дополнительная информация
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

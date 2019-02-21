import React from 'react';
import MusicMain from './music_main_components';
import Header from './Header';


const App = () => (

      <div>
        <Header />
        <MusicMain />
      </div>
);

export default App;

/*
  В кратце - компонент рендерится по props, переключения состояния происходит в actions,
   а генерация нового state - в reducer

    То есть компонент вызывает action, он формирует новые данные для state и передает
  их на reducer с определенным типом. Reducer имеет доступ к текущему значению state
  и action, который инициировал смену state. По типу екшена редьюсер обрабатывает новые
  значения и возвращает измененный state, после чего выполняется ре-рендеринг компонента.
  И все по новой


*/

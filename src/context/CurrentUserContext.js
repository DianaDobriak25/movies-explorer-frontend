//встроенный метод React.createContext. Этот метод возвращает новый объект контекста. Важное свойство этого объекта — Provider. 
//В нём содержится специальный «Реакт-компонент», который позволяет внедрить контекст в определённый участок существующего JSX-дерева.
import React from "react";
export const CurrentUserContext = React.createContext();
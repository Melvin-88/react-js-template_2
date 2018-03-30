import Adapter from 'enzyme-adapter-react-15';
import { shallow, render, mount, configure } from 'enzyme';

configure({ adapter: new Adapter() });

// Сделаем функции Enzyme доступными во всех файлах тестов без необходимости импорта importing

global.shallow = shallow;
global.render = render;
global.mount = mount;
// Обрушим тест при любой ошибке
console.error = message => {
   throw new Error(message);
};
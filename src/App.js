import "./App.scss";
import {
  ButtonPurple,
  ButtonPurpleFaded,
  BlankButton,
  BlankButtonFaded,
  WideButton,
  BorderlessButton,
  BorderlessButtonFaded,
} from "./components/Buttons";

function App() {
  return (
    <div className="App">
      <ButtonPurple name="click"></ButtonPurple>
      <ButtonPurpleFaded name="click"></ButtonPurpleFaded>
      <BlankButton name="click"></BlankButton>
      <BlankButtonFaded name="click"></BlankButtonFaded>
      <WideButton name="Перейти к оплате"></WideButton>
      <BorderlessButton name="Click"></BorderlessButton>
      <BorderlessButtonFaded name="Click"></BorderlessButtonFaded>
    </div>
  );
}

export default App;

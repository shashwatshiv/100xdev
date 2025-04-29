import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import {
  jobAtom,
  messegeAtom,
  networkAtom,
  notificationAtom,
  totalAlert,
} from "./store/atom/atom";

function App() {
  return (
    <RecoilRoot>
      <MainApp></MainApp>
    </RecoilRoot>
  );
}
function MainApp() {
  const jobCount = useRecoilValue(jobAtom);
  const networkCount = useRecoilValue(networkAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const total = useRecoilValue(totalAlert);
  return (
    <>
      <button>Home({total})</button>
      <button>My Network({networkCount >= 100 ? "99+" : networkCount})</button>
      <button>jobs({jobCount})</button>
      <button> Notifications({notificationCount})</button>
      <button>Messages</button>
      <ButtonCounter></ButtonCounter>
    </>
  );
}
function ButtonCounter() {
  const [messegesCount, setMessegeCount] = useRecoilState(messegeAtom);
  return (
    <>
      <button
        onClick={() => {
          setMessegeCount(messegesCount + 1);
        }}>
        Click me({messegesCount})
      </button>
    </>
  );
}
export default App;

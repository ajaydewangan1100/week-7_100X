import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import {
  allNotificationsSelector,
  jobsAtom,
  messagingAtom,
  networksAtom,
  notificationsAtom,
} from "./store/atoms.js";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networksAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationsAtomCount = useRecoilValue(notificationsAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);
  // selctor getting
  const allNotificationsSelectorCount = useRecoilValue(
    allNotificationsSelector
  );

  return (
    <>
      <button>Home</button>
      <button>
        My Network (
        {networkNotificationCount > 99 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs ({jobsAtomCount > 99 ? "99+" : jobsAtomCount})</button>
      <button>
        Messaging ({messagingAtomCount > 99 ? "99+" : messagingAtomCount})
      </button>
      <button>
        Notifications (
        {notificationsAtomCount > 99 ? "99+" : notificationsAtomCount})
      </button>
      <button>Me ({allNotificationsSelectorCount})</button>
    </>
  );
}

export default App;

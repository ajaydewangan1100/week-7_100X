import { atom, selector } from "recoil";

export const networksAtom = atom({
  key: "networksAtom",
  default: 104,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
});

export const notificationsAtom = atom({
  key: "notificationsAtom",
  default: 10,
});

export const messagingAtom = atom({
  key: "messagingAtom",
  default: 0,
});

export const allNotificationsSelector = selector({
  key: "",
  get: ({ get }) => {
    return (
      get(networksAtom) +
      get(jobsAtom) +
      get(notificationsAtom) +
      get(messagingAtom)
    );
  },
});

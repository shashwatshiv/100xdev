import { atom, selector } from "recoil";
export const networkAtom = atom({
  key: "networkAtom",
  default: 102,
});
export const messegeAtom = atom({
  key: "messegeAtom",
  default: 10,
});

export const jobAtom = atom({
  key: "jobAtom",
  default: 12,
});

export const notificationAtom = atom({
  key: "notificationAtom",
  default: 2,
});
export const totalAlert = selector({
  key: "totalAlert",
  get: ({ get }) => {
    const networkCount = get(networkAtom);

    const jobCount = get(jobAtom);
    const messegeCount = get(messegeAtom);
    const notificationCount = get(notificationAtom);
    return jobCount + networkCount + messegeCount + notificationCount;
  },
});
ex;

import { ThumbnailAvatar } from "../assets";

export interface MessageThreadInterface {
  threadID: string;
  avatar: any;
  contactName: string;
  thread: { message: string; date?: string; type: "send" | "receive" }[];
}

const MESSAGE_THREAD = {
  threadID: "38947",
  avatar: ThumbnailAvatar,
  contactName: "Daehan Chi",
  thread: [
    {
      date: "Wednesday 9:32 PM",
      message: "hi!!~~",
      type: "send",
    },
    {
      message: "towtwotowtowtowo",
      type: "receive",
    },
    { date: "Thursdaty 10:03 AM", message: "therheirheirhei", type: "send" },
  ],
};

export default MESSAGE_THREAD;

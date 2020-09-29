import { ThumbnailAvatar } from "../assets";

export interface MessageThreadInterface {
  threadID: string;
  avatar: any;
  contactName: string;
  thread: { message: string; date?: string }[];
}

const MESSAGE_THREAD = {
  threadID: "38947",
  avatar: ThumbnailAvatar,
  contactName: "Daehan Chi",
  thread: [
    {
      date: "Wednesday 9:32 PM",
      message: "hi!!~~",
    },
    {
      message: "towtwotowtowtowo",
    },
    { date: "Thursdaty 10:03 AM", message: "therheirheirhei" },
  ],
};

export default MESSAGE_THREAD;

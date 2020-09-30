import { ThumbnailAvatar } from "../assets";

export interface MessageThreadInterface {
  threadID: string;
  avatar: any;
  contactName: string;
  thread: {
    messageID: string;
    message: string;
    date?: string;
    type: "send" | "receive";
  }[];
}

const MESSAGE_THREAD = {
  threadID: "38947",
  avatar: ThumbnailAvatar,
  contactName: "Daehan Chi",
  thread: [
    {
      messageID: "1",
      date: "Wednesday 9:32 PM",
      message: "hi!!~~",
      type: "send",
    },
    {
      messageID: "2",
      message: "towtwotowtowtowo",
      type: "receive",
    },
    {
      messageID: "3",
      date: "Thursdaty 10:03 AM",
      message: "therheirheirhei",
      type: "send",
    },
  ],
};

export default MESSAGE_THREAD;

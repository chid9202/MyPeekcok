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
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      type: "send",
    },
    {
      messageID: "2",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      type: "receive",
    },
    {
      messageID: "3",
      date: "Thursdaty 10:03 AM",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      type: "send",
    },
  ],
};

export default MESSAGE_THREAD;

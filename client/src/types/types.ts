//props interfaces
export interface GameItemI {
  gameName: string;
  _id?: string;
  user1?: string;
  user2?: string;
  openMenu?: boolean;
  openMenuHandle?: () => void;
}

export interface MessagePropsI {
  isMe?: boolean;
  text?: string;
}

export interface GameConfigUserPropsI {
  isUserFriend?: boolean;
}

export type Status = "readed" | "sended";

export interface IServerMessage {
    avatar: string;
    message: string;
    id: number;
    date: string;
    is: "my" | "her";
    status?: Status;
}

export interface ITitleMessage {
    type: "title";
    id: string;
    date: string;
}

export interface IMessageItem {
    text: string;
    status: Status;
    id: number;
    date: string;
}

export interface IMessage {
    type: "message";
    id: string;
    avatar: string;
    isReverse: boolean;
    isRemovable: boolean;
    messages: IMessageItem[];
}

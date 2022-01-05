import { IServerMessage, Status } from "../../types";

export type State = {
  messages: IServerMessage[];
};

type Action =
  | { type: "add-message"; payload: IServerMessage | IServerMessage[] }
  | { type: "remove-message"; payload: number }
  | { type: "update-status"; payload: { id: number; status: Status } };

export default function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "remove-message":
      return {
        ...state,
        messages: state.messages.filter(
          (message) => message.id !== action.payload
        ),
      };

    case "add-message":
      return {
        ...state,
        messages: state.messages.concat(action.payload),
      };

    case "update-status":
      return {
        ...state,
        messages: state.messages.map((message) => {
          if (message.id === action.payload.id) {
            return {
              ...message,
              status: action.payload.status,
            };
          }

          return message;
        }),
      };
  }
}

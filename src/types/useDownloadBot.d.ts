import { Bot } from "./bot";

type TUseDownloadBot = () => {
    download: (Bot) => void;
    isLoading: Boolean;
    hasError: Boolean;
};

interface IBot extends Bot {
    content: String;
}
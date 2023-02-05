import { Bot } from "./bot";

type TUseDownloadBot = () => {
    download: (Bot) => void;
    isLoading: boolean;
    hasError: boolean;
    removeDownload: (Bot) => void;
};

interface IBot extends Bot {
    content: String;
}
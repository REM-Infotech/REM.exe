import { downloadBotAction } from "./api";

const fs = require('fs')

const downloadBots = async(token: string | null) => {
    const data: any = await downloadBotAction(token);

    if(data.error) throw data.error

    fs.writeFile('src/scripts/test.py', data.data.content, (err: any) => {
        if (err) throw err;
        console.log(token);
    }); 
}

export { downloadBots }
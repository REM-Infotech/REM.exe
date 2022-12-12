import { downloadBotAction } from "./api";

const fs = require('fs')

const createBotsFolder = () => {
    try {
        if (!fs.existsSync('/scripts')) {
          fs.mkdirSync('/scripts');

          return true
        }

        return false
      } catch (err) {
        console.error(err);

        return false
      }
}

const downloadBots = async(token: string | null) => {
    const data: any = await downloadBotAction(token);

    if(data.error) throw data.error

    fs.writeFile('test.py', data.data.content, (err: any) => {
        if (err) throw err;
        console.log(token);
    }); 
}

export { downloadBots }
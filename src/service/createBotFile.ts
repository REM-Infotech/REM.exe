import useDownloadedBotsStore from "../context/downloadedBotsStore";
import { IBot } from "../types/useDownloadBot";

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

const createBotFile: (bot: IBot) => Promise<boolean> = async(bot: IBot) => {
  const nameFile = bot.link.replace(/\//g, '');

  return new Promise((resolve, reject) => {
    fs.writeFile(nameFile, bot.content, (err: any) => {
      if (err) {
        console.error(err)
        return reject(false)
      }

      return resolve(true)
    })
  })
}

const deleteBotFile: (bot: IBot) => Promise<boolean> = async(bot: IBot) => {
  const nameFile = bot.link.replace(/\//g, '');

  return new Promise((resolve, reject) => {
    fs.unlink(nameFile, (err: any) => {
      if (err) {
        console.error(err)
        return reject(false)
      }

      return resolve(true)
    })
  })

}

export { createBotFile, deleteBotFile }
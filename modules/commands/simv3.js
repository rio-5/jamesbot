module.exports.config = {
  name: "mak",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "james",
  description: "talk to simsimi",
  usePrefix: false,
  commandCategory: "fun",
  usages: "[prompt]",
  cooldowns: 0,
  dependencies: {

  }
};
module.exports.run = async function({ api, event, args }) {
  const axios = require('axios');
  const { threadID, messageID, senderID } = event;
  let prompt = args.join(" ");
  if (!prompt) {
    api.sendMessage(`provide a text!\n usage: ${global.config.PREFIX}mak hello`, threadID, messageID);
    
  };

  try {
    let url = `http://fi1.bot-hosting.net:6378/sim?query=${prompt}`

    let response = await axios.get(url);
    const respond = response.data.respond;
    api.sendMessage(respond, threadID, messageID);
  } catch (error) {
    api.sendMessage("error", threadID, messageID);
  }
}

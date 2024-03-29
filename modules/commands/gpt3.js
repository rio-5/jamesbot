const axios = require('axios');

module.exports.config = {
  name: "gpt",
  version: "1.0",
  hasPermssion: 0,
  credits: "james",
  description: "CHAT GPT",
  usePrefix: true,
  commandCategory: "AI",
  usages: `${global.config.PREFIX}gpt [prompt]`,
  cooldowns: 0,
  dependencies: {

  }
};

module.exports.run = async function ({ api, event, args }) {
  let {threadID, messageID} = event;
  let prompt = args.join(" ");

  if (!prompt) {
    api.sendMessage(`please provide a prompt.`, threadID, messageID)
  };

  try {
    let url = `https://deku-rest-api.replit.app/gpt3?prompt=${encodeURIComponent(prompt)}&uid=${event.senderID}`;
    let response = await axios.get(url);
    let result = response.data.gpt3;

    api.sendMessage(result, threadID, messageID);

  } catch (error) {
    api.sendMessage(`an error occurred`)
  }
};

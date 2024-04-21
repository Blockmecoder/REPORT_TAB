import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
  ],
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  console.log(message.content);
  message.reply({
    content: "CHAL NA LAVDE",
  });
});
client.login(process.env.TOKEN);

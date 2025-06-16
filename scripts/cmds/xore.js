const axios = require("axios");
const fs = require("fs");

module.exports = {
  config: {
    name: "xore",
    aliases: ["xr", "xxx"],
    version: "1.0",
    author: "Alwaysone",
    countDown: 5,
    role: 1,
    shortDescription: "Send random xore video",
    longDescription: "NSFW video - Admin only",
    category: "18+",
    guide: { en: "{pn} — Sends a random adult video" }
  },

  onStart: async function ({ api, event }) {
    const videos = [
      "https://raw.githubusercontent.com/zoro-77/video-hosting/main/cache/video-1747502431713-399.mp4",
      "https://raw.githubusercontent.com/zoro-77/video-hosting/main/cache/video-1747502423767-699.mp4",
      "https://raw.githubusercontent.com/zoro-77/video-hosting/main/cache/video-1747502416742-204.mp4",
      "https://raw.githubusercontent.com/zoro-77/video-hosting/main/cache/video-1747502408017-964.mp4",
      "https://raw.githubusercontent.com/zoro-77/video-hosting/main/cache/video-1747502640250-906.mp4",
      "https://raw.githubusercontent.com/zoro-77/video-hosting/main/cache/video-1747502644784-674.mp4",
      "https://raw.githubusercontent.com/zoro-77/video-hosting/main/cache/video-1747502634169-299.mp4",
      "https://raw.githubusercontent.com/zoro-77/video-hosting/main/cache/video-1747502625579-844.mp4",
      "https://raw.githubusercontent.com/zoro-77/video-hosting/main/cache/video-1747502621514-567.mp4",
      "https://raw.githubusercontent.com/zoro-77/video-hosting/main/cache/video-1747502617975-513.mp4",
      "https://raw.githubusercontent.com/zoro-77/video-hosting/main/cache/video-1747502784810-67.mp4",
      "https://raw.githubusercontent.com/zoro-77/video-hosting/main/cache/video-1747502790886-966.mp4",
      "https://raw.githubusercontent.com/zoro-77/video-hosting/main/cache/video-1747502777553-241.mp4",
      "https://raw.githubusercontent.com/zoro-77/video-hosting/main/cache/video-1747502770920-66.mp4"
    ];

    const videoURL = videos[Math.floor(Math.random() * videos.length)];
    const filePath = "/tmp/xore_video.mp4";

    try {
      const wait = await api.sendMessage("Ruk na, xore chaldai xa... 🔞", event.threadID);

      const res = await axios({ url: videoURL, method: "GET", responseType: "stream" });
      const writer = fs.createWriteStream(filePath);
      res.data.pipe(writer);

      await new Promise((resolve, reject) => {
        writer.on("finish", resolve);
        writer.on("error", reject);
      });

      await api.sendMessage({
        body: "La hera! 🥵",
        attachment: fs.createReadStream(filePath)
      }, event.threadID);

      if (wait?.messageID) {
        await api.unsendMessage(wait.messageID);
      }

      fs.unlink(filePath, () => {});
      await api.sendMessage("Xore sakiyo! Arko chaahi? 😏", event.threadID);
    } catch (err) {
      await api.sendMessage("❌ Error while fetching xore: " + err.message, event.threadID);
    }
  }
};

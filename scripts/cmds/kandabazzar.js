const axios = require("axios");
const fs = require("fs");

module.exports = {
  config: {
    name: "kandabazzar",
    aliases: ["kb"],
    version: "1.4-debug",
    author: "Alwaysone",
    countDown: 5,
    role: 1, // admin only
    shortDescription: "Send random 18+ video",
    longDescription: "Fetches and sends a random kanda video",
    category: "18+",
    guide: { en: "{pn} — admin only" }
  },

  onStart: async function ({ api, event }) {
    const videos = [
      "https://raw.githubusercontent.com/zoro-77/video-hosting/main/cache/video-1747501894011-638.mp4",
      "https://raw.githubusercontent.com/zoro-77/video-hosting/main/cache/video-1747502009974-397.mp4",
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

    const randomVideo = videos[Math.floor(Math.random() * videos.length)];
    const filePath = "/tmp/kandabazzar_video.mp4";

    try {
      console.log("[kandabazzar] Sending waiting message...");
      const waitMsg = await api.sendMessage("Aayo muji xoluwa feri 🤡... Ruk aaudai xa....", event.threadID);

      console.log("[kandabazzar] Downloading video from:", randomVideo);
      const response = await axios({
        url: randomVideo,
        method: "GET",
        responseType: "stream",
        timeout: 20000
      });

      const writer = fs.createWriteStream(filePath);
      response.data.pipe(writer);

      await new Promise((resolve, reject) => {
        writer.on("finish", () => {
          console.log("[kandabazzar] Video downloaded successfully.");
          resolve();
        });
        writer.on("error", (err) => {
          console.error("[kandabazzar] Stream write error:", err);
          reject(err);
        });
      });

      console.log("[kandabazzar] Sending video now...");
      await api.sendMessage(
        {
          body: "La Xolera  bas 🥵",
          attachment: fs.createReadStream(filePath)
        },
        event.threadID
      );

      if (waitMsg?.messageID) {
        console.log("[kandabazzar] Deleting waiting message...");
        await api.unsendMessage(waitMsg.messageID);
      }

      fs.unlink(filePath, (err) => {
        if (err) console.error("[kandabazzar] Failed to delete temp file:", err);
        else console.log("[kandabazzar] Temp file deleted.");
      });

    } catch (err) {
      console.error("[kandabazzar] ERROR:", err);
      await api.sendMessage(`❌ Error occurred: ${err.message || err}`, event.threadID);
    }
  }
};

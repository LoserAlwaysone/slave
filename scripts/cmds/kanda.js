const axios = require("axios");
const fs = require("fs");
const path = require("path");

module.exports = {
  config: {
    name: "kandabazzar",
    aliases: ["kb"],
    version: "1.0",
    author: "Alwaysone",
    countDown: 5,
    role: 1, // Admin only
    shortDescription: "Send random 18+ video",
    longDescription: "Fetches and sends a random 18+ video as a real Messenger attachment",
    category: "18+",
    guide: {
      en: "{pn} or {pn} (alias)"
    }
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
    const filePath = path.join(__dirname, "temp_video.mp4");

    try {
      const response = await axios({
        url: randomVideo,
        method: "GET",
        responseType: "stream"
      });

      const writer = fs.createWriteStream(filePath);
      response.data.pipe(writer);

      await new Promise((resolve, reject) => {
        writer.on("finish", resolve);
        writer.on("error", reject);
      });

      return api.sendMessage(
        {
          body: "🎥 Kandabazzar video just for you!",
          attachment: fs.createReadStream(filePath)
        },
        event.threadID,
        () => fs.unlink(filePath, () => {})
      );
    } catch (err) {
      console.error("❌ Error fetching video:", err);
      return api.sendMessage("❌ Failed to fetch or send the video.", event.threadID);
    }
  }
};

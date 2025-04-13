module.exports = {
  config: {
    name: "kanda",
    aliases: ["kanda1"],
    version: "2.0",
    author: "Alwaysone",
    countDown: 10,
    role: 2,
    shortDescription: "",
    longDescription: "Fetch kanda videos",
    category: "18+",
    guide: "{p}{n}",
  },

  sentVideos: [],

  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;

    // Loading message
    const loadingMessage = await message.reply({
      body: "Aaudai xa ruk muji 🤡",
    });

    const videoLinks = [
      "https://drive.google.com/uc?id=1-bMhZCbyD3thooI0-xSc1f9V64GwCU0S&export=download",
      "https://drive.google.com/uc?id=1-Z_05IyEpcYcLDSBZP6DGDHoTjgdgWWr&export=download",
      "https://drive.google.com/uc?id=1-JuVAaghvVju2ar4HoAUn9znkoVF2UND&export=download",
      "https://drive.google.com/uc?id=1-6NkQ6ySuf_O966Xu3dB6goAuxW6RfrZ&export=download",
      "https://drive.google.com/uc?id=1-3QMhPqgogMf-nRH2XUBwnBZmfEewSY_&export=download",
      "https://drive.google.com/uc?id=1-UXCvIQPEmjcYKqrOn1U5Iy5_nC-zaBG&export=download",
      "https://drive.google.com/uc?id=1-IMsgc93miME2rmFcF8j3IX051POOopL&export=download",
      "https://drive.google.com/uc?id=1-JXYmh5YdO_VFFHdObvZ4AVHp-r69Yc1&export=download"
    ];

    try {
      const randomVideo = videoLinks[Math.floor(Math.random() * videoLinks.length)];
      
      // Updated SUCCESS message below 👇
      await message.reply({
        body: "Xolerai jindagi jane vayo tero 🤡", // New attached message
        attachment: await global.utils.getStreamFromURL(randomVideo)
      });
    } catch (error) {
      console.error("Error sending video:", error);
      // Updated ERROR message below 👇
      await message.reply({
        body: "Tero vagya xaina muji feri try gar 🤡", // Changed error message
      });
    }

    // Cleanup loading message
    try {
      await loadingMessage.delete();
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  },
};

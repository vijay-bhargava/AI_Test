// services/openaiService.js
const langchain = require("./langchain");
const config = require("../config/config");
const axios = require("axios");
const fs = require('file-system');
const path = require('path')
const conkey = require('dotenv').config();


const speechFile = path.resolve("./speech.mp3");

const generateText = async (prompt) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4", // or whichever model you want to use
        messages: [{ role: "user", content: prompt }],
        max_tokens: 150,
      },
      {
        headers: {
          Authorization: `Bearer ${conkey.API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices;
  } catch (error) {
    console.error("Error generating text:", error);
    throw new Error("Failed to generate text");
  }
};

const generateImage = async (prompt) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/images/generations",
      {
        model: "dall-e-3",
        prompt: prompt,
      },
      {
        headers: {
          Authorization: `Bearer ${conkey.API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error generating Image:", error);
    throw new Error("Failed to generate Image");
  }
};
const generateTextSpeach = async (prompt) => {
  try {
    //console.log(prompt)
    const response = await axios.post(
      "https://api.openai.com/v1/audio/speech",
      {
        model: "tts-1",
        voice: "alloy",
        input: prompt,
      },
      {
        headers: {
          Authorization: `Bearer ${conkey.API_KEY}`,
          "Content-Type": "application/json",
        },
        responseType: 'arraybuffer'
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error generating audio speech:", error);
    throw new Error("Failed to generate audio speech");
  }
};
const generateSpeachText = async (prompt) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/audio/transcriptions",
      {
        file: fs.createReadStream("audio.mp3"),
        model: "whisper-1",
      },
      {
        headers: {
          Authorization: `Bearer ${conkey.API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error generating audio transcriptions:", error);
    throw new Error("Failed to generate audio transcriptions");
  }
};
const generateProfile = async (prompt) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4", // or whichever model you want to use
        messages: [{ role: "user", content: prompt }],
        max_tokens: 300,
      },
      {
        headers: {
          Authorization: `Bearer ${conkey.API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices;
  } catch (error) {
    console.error("Error generating profile:", error);
    throw new Error("Failed to generate profile");
  }
};
module.exports = { generateText, generateImage, generateSpeachText, generateTextSpeach, generateProfile };

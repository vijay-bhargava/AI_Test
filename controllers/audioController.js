const langchain = require('../services/langchain');
const { generateSpeachText, generateTextSpeach } = require('../services/openaiService');
const fs = require('file-system');
const path = require('path')

const speechFile = path.resolve("./speech.mp3");

exports.audioGenerate = async (req, res) => {
    var prompt = langchain.enhancePrompt(req.body.prompt)
  
    try {
        const enhancedPrompt = langchain.enhancePrompt(prompt);
        const welcomeMessage = await generateTextSpeach(enhancedPrompt);
        // fs.writeFileSync(speechFile, welcomeMessage);
        res.json({ message: welcomeMessage });
        // res.set({
        //     'Content-Type': 'audio/mpeg',
        //     'Content-Disposition': 'attachment; filename="output.mp3"',
        //     'Content-Length': welcomeMessage.byteLength
        //   });
        //   res.send(welcomeMessage);

    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
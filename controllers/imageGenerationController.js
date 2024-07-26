const langchain = require('../services/langchain');
const { generateImage } = require('../services/openaiService');

exports.imageGenerate = async (req, res) => {
    var prompt = langchain.enhancePrompt(req.body.type + req.body.prompt)
  
    try {
        const enhancedPrompt = langchain.enhancePrompt(prompt);
        const welcomeMessage = await generateImage(enhancedPrompt);
        res.json({ message: welcomeMessage });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
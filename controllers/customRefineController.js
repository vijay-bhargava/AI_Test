const CustomRefine = require('../models/customRefineModel');
const langchain = require('../services/langchain');
const { generateText } = require('../services/openaiService');


exports.customRefine = async (req, res) => {
  const customrefine = new CustomRefine({
    clientName: req.body.clientName,
    clientIndustry: req.body.clientIndustry,
    productDomain: req.body.productDomain,
    clientSubDomain: req.body.clientSubDomain,
    clientBackground: req.body.clientBackground
  });

  try {
    const newCustomRefine = await customrefine.save();
    res.status(201).json(newCustomRefine);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.customRefineAI = async (req, res) => {
  var prompt = langchain.enhancePrompt(req.body.client_background + req.body.custom_instructions)

  try {
      const enhancedPrompt = langchain.enhancePrompt(prompt);
      const welcomeMessage = await generateText(enhancedPrompt);
    res.json({ message: welcomeMessage });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
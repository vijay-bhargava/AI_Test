const langchain = require('../services/langchain');
const { generateProfile } = require('../services/openaiService');

exports.profileGenerate = async (req, res) => {
    //console.log(req.body)
    var profileFor = req.body.profileFor;
    var profile = req.body.profile;
    var designation = req.body.designation;
    var objectivePrompt = "Craft a compelling career objective for a "+designation+ " in software development. This objective should emphasize leadership, innovation, and a commitment to delivering high-quality software solutions. The objective should also reflect a desire for continuous learning, professional growth, and making a positive impact on both the team and the organization."
    var skillPrompt = " and Soft skills that are essential for a "+designation+ " in software development. Provide a one liner explanation on each ["+profile[1].softskills+ "] skills."
    //console.log(skillPrompt);
    var prompt = langchain.enhancePrompt(objectivePrompt + skillPrompt)
  
    try {
        const enhancedPrompt = langchain.enhancePrompt(prompt);
        const welcomeMessage = await generateProfile(enhancedPrompt);
      res.json({ message: welcomeMessage });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
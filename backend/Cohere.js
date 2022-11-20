function getSubGoals(){
    const subGoals = [{"text": "Web Development", "label": "Software"}, {"text": "Data Structures + Algorithms", "label": "Software"}, {"text": "Object Oriented Programming", "label": "Software"}, {"text": "File Management", "label": "Software"}, {"text": "Data Scripting", "label": "Software"}, {"text": "Knowledge of Drawing Tools", "label": "Arts"}, {"text": "Perspective", "label": "Arts"}, {"text": "Shading", "label": "Arts"}, {"text": "Shapes + Lines", "label": "Arts"}, {"text": "Color Theory", "label": "Arts"}, {"text": "Knowledge of Instruments", "label": "Music"}, {"text": "Rhythm", "label": "Music"}, {"text": "Music Theory", "label": "Music"}, {"text": "Music History", "label": "Music"}, {"text": "Sight-Reading", "label": "Music"}, {"text": "Anatomy", "label": "Health"}, {"text": "Homeostasis", "label": "Health"}, {"text": "Cognitive Awareness", "label": "Health"}, {"text": "Patience", "label": "Health"}, {"text": "Medicine", "label": "Health"}, {"text": "Biology", "label": "Science"}, {"text": "Chemistry", "label": "Science"}, {"text": "Physics", "label": "Science"}, {"text": "Periodic Table", "label": "Science"}, {"text": "Lab Procedures", "label": "Science"}, {"text": "Operating Machinery", "label": "Hardware"}, {"text": "3D Modelling", "label": "Hardware"}, {"text": "Spatial Awareness", "label": "Hardware"}, {"text": "Fastener Knowledge", "label": "Hardware"}, {"text": "Factory Safety", "label": "Hardware"}, {"text": "Wire Management", "label": "Electrical"}, {"text": "Circuit Components", "label": "Electrical"}, {"text": "PCB", "label": "Electrical"}, {"text": "Soldering", "label": "Electrical"}, {"text": "Transformers", "label": "Electrical"}, {"text": "Human Rights", "label": "Law"}, {"text": "Attention to Detail", "label": "Law"}, {"text": "Psychology", "label": "Law"}, {"text": "Legal Documentation", "label": "Law"}, {"text": "Understanding Politics", "label": "Law"}, {"text": "Adaptability", "label": "Social"}, {"text": "Communication", "label": "Social"}, {"text": "Collaboration", "label": "Social"}, {"text": "Time Management", "label": "Social"}, {"text": "Organization", "label": "Social"}];
    predict(answer)
    function predict(message) {
        const cohere = require('cohere-ai');
        cohere.init('FJ3fFWNtLgxDXGcXgqqh0JQbP1A6NzbZWN3RdDzR');
        (async () => {
            const response = await cohere.classify({// Set Cohere settings
                model: 'large',
                inputs: [message],
                examples: subGoals,
                //stop_sequences: [""]

            });
            // console.log(`The confidence levels of the labels are ${JSON.stringify(response.body.classifications)}`);
            classified = response.body.classifications[0].prediction;
            console.log(classified);
            for (var i = 0; i < subGoals.length; i++) {
                if (subGoals[i].label == classified) {
                    console.log(subGoals[i].text);
                }
            }
        })();
    }
}
module.exports = { getSubGoals}
  



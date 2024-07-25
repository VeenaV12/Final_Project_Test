const Reference = require('../Model/referenceModel');
const User = require('../Model/User');

const addReference = async (req, res) => {
    try {
        const { week } = req.body;
        const projectId = req.params.project_id;

        if (!week || !week.materials || !Array.isArray(week.materials)) {
            return res.status(400).json({ message: 'Invalid week data' });
        }

        const newReference = new Reference({
            project: projectId,
            week: week
        });

        await newReference.save();
        res.status(200).json({ message: 'Reference added successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal Error' });
    }
}  

const editReference = async (req, res) => {
    try {
        const refId = req.params.ref_id 
        
        const week = req.body.week
        console.log(week)
       
        const updatedRef = await Reference.findByIdAndUpdate(
           refId ,
            { $push: { weeks: [week] } }, 
            { new: true }
        )

        if (!updatedRef) {
            return res.status(404).json({ message: 'Post not found' })
        }
 
        res.status(200).json(updatedRef)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}      


const getReference = async (req, res) => {
    try {
      const userId = req.user.userId; // Assuming you have authentication middleware that sets req.user
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const projectId = user.project;
      
  
      // Find all references for the given project ID, sorted by _id descending
      const references = await Reference.find({ project: projectId })
        .sort({ _id: -1 })
        .populate('week.materials'); // Populate materials within each week
  
      // Aggregate weeks and materials into a single structure per project
      const aggregatedReferences = {};
  
      references.forEach((ref) => {
        if (!aggregatedReferences[ref.week.weekNumber]) {
          aggregatedReferences[ref.week.weekNumber] = {
            weekNumber: ref.week.weekNumber,
            title: ref.week.title,
            materials: []
          };
        }
        aggregatedReferences[ref.week.weekNumber].materials.push(...ref.week.materials);
      });
  
      // Convert object values to array and sort by weekNumber
      const sortedReferences = Object.values(aggregatedReferences)
        .sort((a, b) => a.weekNumber - b.weekNumber);
  
      console.log('Fetched references:', sortedReferences);
      res.status(200).json(sortedReferences);
    } catch (error) {
      console.error('Error fetching references:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  



module.exports = {addReference, editReference, getReference}

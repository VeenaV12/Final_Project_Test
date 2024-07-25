const Project = require('../Model/projectModel')

const User = require('../Model/User');


    const addProject = async(req,res)=>{
        try{
            const { name, batch, desc ,pdf} = req.body
        
            var newProject = new Project({projectName:name,batch,desc,pdf}) 
            await newProject.save()
            res.status(200).json('Uploaded')
        }
        catch(error){
            console.log(error)
            res.status(500).json({message:'Internal Error'})
        }
        }
    

       /* const getProject = async (req, res) => {
            try {
              const projectId = req.params.projectid;
          
              // Assuming 'Project' is your Mongoose model
              const project = await Project.findById(projectId);
          
              if (!project) {
                return res.status(404).json({ message: 'Project not found' });
              }
          
              // Check if project has a PDF file associated
              if (!project.pdf || !project.pdf.filename) {
                console.log('PDF file not found for project with ID:', projectId);
                return res.status(404).json({ message: 'PDF file not found for this project' });
              }
          
              // Respond with the PDF object (or specific properties as needed)
              // Assuming 'project.pdf' contains the necessary data for downloading
              res.json({ pdf: project.pdf });
          
            } catch (error) {
              console.error('Error retrieving project:', error);
              res.status(500).json({ message: 'Internal Server Error' });
            }
          };*/



          /*const getProject = async (req, res) => {
            const { batch } = req.session.user.batchName; // Assuming batch is stored in the session
          
            try {
              const projects = await Project.find({ batch });
          
              return res.status(200).json({ projects });
            } catch (error) {
              console.error('Error fetching projects:', error);
              return res.status(500).json({ message: 'Internal Server Error' });
            }
          };*/
          

          /*const getProject = async (req, res) => {
            const batch = req.session.user.batchName 
            console.log(req.session.user.batchName)

            try {
              const projects = await Project.find({ batch }); // Adjust this query based on your schema
          
              return res.status(200).json(projects);
            } catch (error) {
              console.error('Error fetching projects:', error);
              return res.status(500).json({ message: 'Internal Server Error' });
            }
          }*/


            




          const getProject = async (req, res) => {
            try {
              const userId = req.user.userId; // Assuming decoded token has user ID
              console.log(userId)
              
              // Query the User document by userId to get the project ObjectId
              const user = await User.findById(userId);
          
              if (!user || !user.project) {
                return res.status(404).json({ message: 'Project not found for this user' });
              }
              
              // Retrieve the project ObjectId from the User document
              const projectId = user.project;
          
              // Query the Project collection by the projectId
              const project = await Project.findById(projectId);
          
              if (!project) {
                return res.status(404).json({ message: 'Project details not found' });
              }
              
              // Assuming 'pdf' is a field in your Project schema
              if (project.pdf && project.pdf.path) {
                return res.status(200).json({ pdf: project.pdf.path });
              } else {
                return res.status(404).json({ message: 'PDF path not found for this project' });
              }
            } catch (error) {
              console.error('Error fetching project:', error);
              return res.status(500).json({ message: 'Internal Server Error' });
            }
          };
          
          

          const displayProject = async (req, res) => {
            try {
                const userId = req.user.userId;
              
        
                // Find the user document by userId
                const user = await User.findById(userId);
                if (!user) {
                    return res.status(404).json({ message: 'User not found' });
                }
        
                
        
                // Ensure user has a batch field
                if (!user.batch) {
                    return res.status(404).json({ message: 'Batch not found for this user' });
                }
        
                // Retrieve batchName from user
                const batchName = user.batch;
                
        
                // Query projects based on batchName
                const projects = await Project.find({ batch: batchName });
              
        
                // Return projects as JSON response
                return res.status(200).json(projects);
            } catch (error) {
                console.error('Error fetching projects:', error);
                return res.status(500).json({ message: 'Internal Server Error' });
            }
        };
        
          
      



    module.exports = {addProject, getProject, displayProject}
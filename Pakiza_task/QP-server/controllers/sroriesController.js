const Story = require('./models/Story');

// Example route handler to create a new story
const createStory = async (req, res) => {
    const { title, content, user } = req.body;
    
    try {
        const newStory = new Story({
            title,
            content,
            user,
            // You can optionally omit createdAt; it will default to the current date
        });

        const savedStory = await newStory.save();
        res.status(201).json(savedStory);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

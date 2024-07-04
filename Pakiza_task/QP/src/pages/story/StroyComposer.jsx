import React, { useState } from 'react';
import { styled } from '@mui/material/styles'; // Import styled from '@mui/material/styles'
import {
    Box,
    Drawer,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextareaAutosize,
} from '@mui/material'; // Import components from '@mui/material'

// Define styles using styled-components
const StoryComposerContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '16px', // Adjust padding as needed
});

const LeftDrawer = styled(Drawer)({
    width: '200px',
    padding: '16px',
    borderRight: '1px solid #ccc',
});

const MainContent = styled(Box)({
    flex: '1',
    padding: '16px',
});

const ColorOption = styled('div')({
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    display: 'inline-block',
    marginRight: '8px',
    cursor: 'pointer',
});

const Preview = styled(Box)({
    flex: '1',
    padding: '16px',
});

const PreviewContent = styled(Box)({
    padding: '16px',
    border: '1px solid #ccc',
    minHeight: '200px',
});

const StoryComposer = () => {
    // State variables
    const [storyText, setStoryText] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Default background color
    const [privacy, setPrivacy] = useState('friends'); // Default privacy option

    // Handler for text input change
    const handleTextChange = (e) => {
        setStoryText(e.target.value);
    };

    // Handler for background color change
    const handleBackgroundColorChange = (color) => {
        setBackgroundColor(color);
    };

    // Handler for privacy option change
    const handlePrivacyChange = (e) => {
        setPrivacy(e.target.value);
    };

    return (
        <StoryComposerContainer>
            {/* Left Drawer */}
            <LeftDrawer variant="permanent" anchor="left">
                <Box>
                    <h3>Privacy</h3>
                    <FormControl fullWidth>
                        <InputLabel id="privacy-label">Privacy</InputLabel>
                        <Select
                            labelId="privacy-label"
                            value={privacy}
                            onChange={handlePrivacyChange}
                        >
                            <MenuItem value="public">Public</MenuItem>
                            <MenuItem value="friends">Friends</MenuItem>
                            <MenuItem value="only-me">Only Me</MenuItem>
                        </Select>
                    </FormControl>
                    {/* Additional options can be added here */}
                </Box>
            </LeftDrawer>

            {/* Main Content Area */}
            <MainContent>
                {/* Textarea for story input */}
                <TextareaAutosize
                    placeholder="Type your story here..."
                    value={storyText}
                    onChange={handleTextChange}
                    style={{ backgroundColor, width: '100%' }}
                    rowsMin={8}
                    required
                />
                {/* Background color options */}
                <Box>
                    <h3>Background Color</h3>
                    <ColorOption style={{ backgroundColor: '#ffffff' }} onClick={() => handleBackgroundColorChange('#ffffff')}></ColorOption>
                    <ColorOption style={{ backgroundColor: '#f2f2f2' }} onClick={() => handleBackgroundColorChange('#f2f2f2')}></ColorOption>
                    <ColorOption style={{ backgroundColor: '#d9ead3' }} onClick={() => handleBackgroundColorChange('#d9ead3')}></ColorOption>
                    {/* Add more color options as needed */}
                </Box>
            </MainContent>

            {/* Right Preview Area */}
            <Preview>
                <h2>Preview</h2>
                <PreviewContent style={{ backgroundColor }}>
                    <p>{storyText}</p>
                </PreviewContent>
            </Preview>
        </StoryComposerContainer>
    );
};

export default StoryComposer;

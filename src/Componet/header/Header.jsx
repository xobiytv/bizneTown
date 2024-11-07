import React from 'react';
import { Button, Typography, Box, Grid } from '@mui/material';
import Top from './Top'
import Center from './Center'
const App = () => {
    return (
        <Box className="bg-flow min-h-screen flex justify-evenly  items-start flex-col">
           {/* <Top /> */}
           <Center  />
        </Box>
    );
};

export default App;

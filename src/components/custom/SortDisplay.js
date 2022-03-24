import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { Box, Button,Paper } from '@mui/material';

export default function SortDispaly({sortName,buttonShow}) {
    const testArray =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]

  return (
    <Box sx={{ width: '100%' }}>
        <Box
            sx={{
              display:"flex",
              justifyContent: "center", 
              alignItems: "center",
              flexDirection: "column",
            }}
          >
               <Box
                    sx={{
                    backgroundColor: 'background.default',
                    minHeight: '100%',
                    p: 3
                    }}
                >
                    <Paper
                    elevation={12}
                    sx={{
                        maxWidth: 400,
                        mx: 'auto'
                    }}  
                    >
                    <Box sx={{ p: 2 }}>
                        <Typography
                        color="textPrimary"
                        variant="h6"
                        >
                        {sortName}
                        </Typography>
                    </Box>
                    <Box>       
                    <Typography sx={{ fontSize: 26,wordWrap: "break-word", textAlign: "center", padding: "10px" }} color="text.primary" gutterBottom>
                        [{" "}               
                        {testArray.map((ele) => (ele +  " "))}
                        {" "}]
                        </Typography>
                    </Box>
                    </Paper>
                </Box>
            {(buttonShow &&<Button
              size="small"
              variant="contained"
            >
              SHOW ALL STEPS
            </Button>)}
          </Box>
    </Box>
  );
}
import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { Box, Button,Paper } from '@mui/material';
import {AllSteps} from './AllSteps'

export default function SortDispaly({sortName,buttonShow,array,steps,countCompare,countSwaps}) {
 const [showSteps, setShowSteps] = useState(false);
  return (
    <Box sx={{ width: '100%' }}>
        <Box
            sx={{
              display:"flex",
              justifyContent: "start", 
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
                        maxWidth: 300,
                        mx: 'auto'
                    }}  
                    >
                      <Box sx={{ p: 2 }}>
                          <Typography
                          color="textPrimary"
                          variant="h4"
                          >
                          {sortName}
                          </Typography>
                          {countCompare != null && (
                            <Typography
                            color="textPrimary"
                            sx={{fontSize:"12px"}}
                            >
                              Count of Compare: {countCompare}
                            </Typography>
                          )}
                         {countSwaps  != null && (
                            <Typography
                            color="textPrimary"
                            sx={{fontSize:"12px"}}
                            >
                              Count of Swaps: {countSwaps}
                            </Typography>
                          )}
                      </Box>
                      <Box>       
                      <Typography sx={{ fontSize: 20,wordWrap: "break-word", textAlign: "center", padding: "10px" }} color="text.primary" gutterBottom>
                          {array != null && array.map((ele) => (ele +  " "))}
                          </Typography>
                      </Box>
                    </Paper>
                </Box>

            {(buttonShow && array.length <= 50 && <Button
              size="small"
              variant="contained"
              onClick={() => {setShowSteps(!showSteps)}}
            >
              SHOW ALL STEPS
            </Button>)}
          </Box>
          <Box sx={{display: "flex", flexDirection:'column', alignItems:"center"}}>
            {showSteps && (<AllSteps allSteps={steps}/>)}
          </Box>
    </Box>
  );
}
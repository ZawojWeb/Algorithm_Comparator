import {useEffect} from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { Box, Button,Paper } from '@mui/material';

export default function SortDispaly({sortName,buttonShow,array}) {

    

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
                    <Typography sx={{ fontSize: 20,wordWrap: "break-word", textAlign: "center", padding: "10px" }} color="text.primary" gutterBottom>
                        {array != null && array.map((ele) => (ele +  " "))}
                        </Typography>
                    </Box>
                    </Paper>
                </Box>
            {(buttonShow && array.length <= 50 && <Button
              size="small"
              variant="contained"
            >
              SHOW ALL STEPS
            </Button>)}
          </Box>
    </Box>
  );
}
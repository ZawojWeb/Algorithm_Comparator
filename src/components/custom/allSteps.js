import { Box,Paper,Typography } from "@mui/material"

export const AllSteps = ({allSteps}) =>{

    console.log(allSteps)
    return (
        <Box>
            {allSteps != null && allSteps.map(Step =>(
                <Paper
                elevation={12}
                sx={{
                    maxWidth: 400,
                    mx: 'auto'
                }}  
                >
                <Box sx={{ p: 2 }}>
                </Box>
                <Box>       
                <Typography sx={{ fontSize: 20,wordWrap: "break-word", textAlign: "center", padding: "10px" }} color="text.primary" gutterBottom>
                    {Step != null && Step.map((ele) => (ele +  " "))}
                    </Typography>
                </Box>
            </Paper>))}
            
        </Box>
       
    )
}
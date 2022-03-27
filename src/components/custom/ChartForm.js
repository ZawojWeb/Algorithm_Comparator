import { Box, Button, Divider, Grid, TextField,Autocomplete,InputLabel,Select,MenuItem,Checkbox,FormControlLabel } from '@mui/material';
import {useEffect, useState} from 'react';


export const ChartForm = ({howManyRepeats,setHowManyRepeats,typeOfChart,setTypeOfChart,whichAlgo,setWhichAlgo,generateChart}) =>{ 

    const handleChange1 = (event) => {
        setWhichAlgo([event.target.checked, event.target.checked,event.target.checked]);
      };
    
    const handleChange2 = (event) => {
        setWhichAlgo([event.target.checked,whichAlgo[1],whichAlgo[2]]);
    };

    const handleChange3 = (event) => {
        setWhichAlgo([whichAlgo[0],event.target.checked, whichAlgo[2]]);
    };

    const handleChange4 = (event) => {
        setWhichAlgo([whichAlgo[0] ,whichAlgo[1], event.target.checked]);
    };

    useEffect(() => {
        if(howManyRepeats > 25){
            setWhichAlgo([whichAlgo[0] ,whichAlgo[1], false]);
        }
    },[howManyRepeats])

  return(
    <Box
        sx={{
        backgroundColor: 'background.paper',
        minHeight: '100%',
        p: 3
        }}
    >
        <form onSubmit={(event) => generateChart(event)}>
        <Grid
            container
            spacing={3}
        >
            <Grid
            item
            md={4}
            sm={6}
            xs={12}
            >
            <InputLabel id="demo-simple-select-label">How many repeats</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={howManyRepeats}
                label="HowManyRepeats"
                sx={{width:"100%"}}
                onChange={(e) => setHowManyRepeats(e.target.value)}
                required
            >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={25}>25</MenuItem>
                <MenuItem value={100}>100</MenuItem>
            </Select>
            </Grid>
            <Grid
            item
            md={4}
            sm={6}
            xs={12}
            >
            <InputLabel id="demo-simple-select-label">Which type of char</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={typeOfChart}
                label="WhichtypeOfChar"
                sx={{width:"100%"}}
                onChange={(e) => setTypeOfChart(e.target.value)}
                required
            >
                <MenuItem value={1}>średnią liczbę wykonanych porównań (c) w zależności od n,</MenuItem>
                <MenuItem value={2}>średnią liczbę przestawień kluczy (s) w zależności od n,</MenuItem>
                <MenuItem value={3}>iloraz c/n w zależności od n,</MenuItem>
                <MenuItem value={4}>iloraz s/n w zależności od n.</MenuItem>
            </Select>
            </Grid>
              <Grid
                item
                md={4}
                sm={6}
                xs={12}
                >
                <FormControlLabel
                    label="All"
                    control={
                    <Checkbox
                        checked={whichAlgo[0] && whichAlgo[1] && whichAlgo[2]}
                        indeterminate={whichAlgo[0] !== whichAlgo[1] && whichAlgo[1] !== whichAlgo[2]}
                        onChange={handleChange1}
                        disabled={howManyRepeats <= 25 ? false : true}
                    />
                    }
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                    <FormControlLabel
                        label="Quick Sort"
                        control={<Checkbox checked={whichAlgo[0]} onChange={handleChange2} />}
                    />
                    <FormControlLabel
                        label="Merege Sort"
                        control={<Checkbox checked={whichAlgo[1]} onChange={handleChange3} />}
                    />
                    <FormControlLabel
                        label="Insert Sort"
                        control={<Checkbox checked={whichAlgo[2]} onChange={handleChange4} disabled={howManyRepeats <= 25 ? false : true} />}
                    />
                 </Box>
              </Grid>
        </Grid>
        <Divider sx={{ pt: 2 }} />
        <Box
            sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
            }}
        >
            <Button
            color="primary"
            type="submit"
            variant="contained"
            >
            Generate Chart
            </Button>
        </Box>
        </form>
    </Box>
    )
};

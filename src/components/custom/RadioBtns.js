import { Box, FormControlLabel, Paper, Radio, RadioGroup, Typography } from '@mui/material';

const typeOptions = [
  {
    title: 'Radnom Array',
    value: 'random'
  },
  {
    title: 'Sorted ASC',
    value: 'asc'
  },
  {
    title: 'Sorted DESC',
    value: 'desc'
  }
];

export const RadioBtns = ({typeOfStartArr,setTypeOfStartArr }) => (
  <Box
    sx={{
      minHeight: '100%',
      minWidth: '100%',
    }}
  >
    <form onSubmit={(event) => event.preventDefault()}>
      <RadioGroup
        defaultValue="random"
        onChange={(event) => setTypeOfStartArr(event.target.value)}
        sx={{
          mb: 8,
          mt: 8,
          flexDirection: 'row',
          minWidth: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',

        }}
      >
        {typeOptions.map((typeOption) => (
          <Paper
            key={typeOption.value}
            sx={{
              alignItems: 'flex-start',
              display: 'flex',
              p: 2
            }}
            variant="outlined"
          >
            <FormControlLabel
              control={<Radio />}
              key={typeOption.value}
              label={(
                <Box sx={{ ml: 2 }}>
                  <Typography variant="subtitle2">
                    {typeOption.title}
                  </Typography>
                </Box>
              )}
              value={typeOption.value}
            />
          </Paper>
        ))}
      </RadioGroup>
    </form>
  </Box>
);

import {useState} from 'react';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './FeedbackForm.scss';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
  });

function FeedbackForm() {
    const [alignment, setAlignment] = useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
    return (
        <div className="FeebackForm">
            <div className="container">
                <h1>Feedback</h1>

                <div className="ques-container">
                    <h3>How much did you like these placemaking interventions?</h3>
                    <StyledRating
                        name="customized-color"
                        defaultValue={2}
                        getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
                        precision={1}
                        icon={<FavoriteIcon fontSize="inherit" />}
                        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                    />
                </div>

                <div className="ques-container">
                    <h3>Would you like these interventions to be made permanent here?</h3>
                    <ToggleButtonGroup
                        value={alignment}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="text alignment"
                        >
                        <ToggleButton value="left" aria-label="left aligned">
                            Yes
                        </ToggleButton>
                        <ToggleButton value="center" aria-label="centered">
                            No 
                        </ToggleButton>
                        <ToggleButton value="right" aria-label="right aligned">
                            Maybe
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>

                <div className="ques-container">
                    <h3>Do you have any comments or suggestions for us?</h3>
                    <TextField
                        id="outlined-multiline-static"
                        label=""
                        multiline
                        rows={4}
                        defaultValue=""
                    />
                </div>

                <Button variant="contained">Submit</Button>
            </div>
        </div>
    )
}

export default FeedbackForm;

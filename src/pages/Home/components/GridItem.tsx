import { Button, Card, CardActionArea, CardActions, CardContent, Chip, Typography } from '@mui/material';
import React from 'react'
import { Bot, Chip as ChipType } from '../../../types/Bots';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { links } from '../../../constants/link';

type Props = {
    bot: Bot
}

const GridItem = (props: Props) => {
    const navigate = useNavigate()

    const handleClick = () => {
        console.log(props.bot.type)
        navigate(links.bots.mov.replace('{botID}',props.bot.id.toString()))
    }
  return (
    <Card 
        sx={{ 
            width: 275, 
            height: 250,
            '&.MuiCard-root': {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center'
            }
        }}
    >
        <CardContent>
            {props.bot.chips.map(chip => 
                <Chip 
                    key={chip.link}
                    label={chip.label}
                    onClick={() => console.log(chip.link)}
                    sx={{marginRight: '.25rem'}}
                />
            )}
            <Typography variant="h5" component="div" gutterBottom sx={{marginTop: '1rem'}}>
                {props.bot.title}
            </Typography>
            <Typography variant="body2"
            >
                {props.bot.description}
            </Typography>
        </CardContent>
      <CardActions
        sx={{
            width: '100%'
        }}
      >
        <Button 
            size="large"
            variant='contained'
            sx={{
                width: '100%'
            }}
            onClick={handleClick}
        >
            Abrir
        </Button>
      </CardActions>
    </Card>
  )
}

export default GridItem;

const Container = styled.div``
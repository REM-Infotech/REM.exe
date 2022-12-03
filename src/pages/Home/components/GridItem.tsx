import { Button, Card, CardActions, CardContent, Chip, Zoom, Typography, CardMedia } from '@mui/material';
import React from 'react'
import { Bot, Chip as ChipType } from '../../../types/Bots';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { links } from '../../../constants/link';
import { getBotImage } from '../../../service/utils';
import { colors } from '../../../service/theme';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

type Props = {
    bot: Bot,
    index: number
}

const GridItem = (props: Props) => {
    const navigate = useNavigate()

    const handleClick = () => {
        console.log(props.bot.type)
        navigate(links.bots[props.bot.type].replace('{botID}',props.bot.id.toString()))
    }
  return (
    <Zoom
        in={true}
        style={{ 
            transitionDelay: `${100 * props.index}ms`
        }}
        timeout={500}
    >
    <Card 
        sx={{ 
            width: 275, 
            height: 300,
            '&.MuiCard-root': {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center'
            }
        }}
    >
        <CardMedia
            component="img"
            height="100"
            image={getBotImage(props.bot.plataform)}
            alt={props.bot.plataform}
            sx={{
                backgroundColor: colors.primary_light
            }}
        />
        <CardContent>
            {/* {props.bot.chips.map(chip => 
                <Chip 
                    key={chip.link}
                    label={chip.label}
                    onClick={() => console.log(chip.link)}
                    sx={{marginRight: '.25rem'}}
                />
            )} */}
            <Typography variant="h5" component="div" gutterBottom>
                {props.bot.title}
            </Typography>
            <Typography 
                variant="body2"
                color={'#848484'}
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
            disableElevation
            onClick={handleClick}
            endIcon={<OpenInNewIcon />}
        >
            Abrir
        </Button>
      </CardActions>
    </Card>
    </Zoom>
  )
}

export default GridItem;

const Container = styled.div``
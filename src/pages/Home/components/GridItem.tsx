import { Button, Card, CardActionArea, CardActions, CardContent, Chip, Typography } from '@mui/material';
import React from 'react'
import { Chip as ChipType } from '../../../types/Bots';
import styled from 'styled-components';

type Props = {
    chips?: ChipType[],
    title: string,
    description: string
}

const GridItem = (props: Props) => {
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
            {props.chips.map(chip => 
                <Chip 
                    label={chip.label}
                    onClick={() => console.log(chip.link)}
                />
            )}
            <Typography variant="h5" component="div" gutterBottom sx={{marginTop: '1rem'}}>
                {props.title}
            </Typography>
            <Typography variant="body2"
            >
                {props.description}
            </Typography>
        </CardContent>
      <CardActions
        sx={{
            width: '100%'
        }}
      >
        <Button 
            size="large"
            variant='outlined'
            sx={{
                width: '100%'
            }}
        >
            Abrir
        </Button>
      </CardActions>
    </Card>
  )
}

export default GridItem;

const Container = styled.div``
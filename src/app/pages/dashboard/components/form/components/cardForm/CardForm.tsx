import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import React from 'react';

interface ICardProps{
    value: string,
    label: string;
    icon?: any;
    onClick: (newvalue: string) => void;
};


export const CardForm:  React.FC<ICardProps> = (props) => {


    return(
   
        <FormControlLabel
            value='{props.label}'
            control={
                <Checkbox
                    sx={{
                        color: '#4A3AFF',
                        '&.Mui-checked': {
                            color: '#4A3AFF',
                        },
                    }}
                />
            }
            label={
                <Typography 
                    sx={{ 
                        fontSize: '.8rem',
                        fontWeight: 600,
                        
                    }}>
                    {props.label}
                </Typography>
            }
            sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',

                width: '15rem',
                height: '7rem',
                paddingRight: '4rem',
                borderRadius: '1rem',

                backgroundImage: `{props.icon}`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right .5rem center',
                backgroundColor: '##FFFFFF',

                boxShadow: '0px 4px 10px 0px rgba(31, 37, 89, 0.07), 0px 2px 11px 0px rgba(69, 65, 164, 0.06)',
            }}
        />
    );
};


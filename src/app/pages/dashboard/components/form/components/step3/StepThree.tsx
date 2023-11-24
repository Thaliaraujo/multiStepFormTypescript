import styled from "styled-components";

import { Paragraphs } from "../../../paragraphs/Paragraphs";
import { Titles } from "../../../titles/Titles";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormControl, Typography } from "@mui/material";

const SStepThree = styled.div `
     margin: 0 1rem;
`

export const StepThree = (props: {
    price: string,
    onPriceChange: (value: string) => void,
}) => {
    const handlePriceChange = (selectedPrice: string) => {
        props.onPriceChange(selectedPrice);
    };

    return(
        <SStepThree>
            <Titles>Qual é o orçamento do seu projeto?</Titles>
            <Paragraphs>Selecione a faixa de orçamento do projeto que você tem em mente.</Paragraphs>
            
            <>
                <FormControl>
                    <RadioGroup
                        row
                        defaultValue="R$5.000 - R$10.000"
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            margin: '1rem 0',
                            gap: '2rem'
                        }}
                    >   
                        <FormControlLabel 
                            value="R$5.000 - R$10.000"
                            onClick={() => handlePriceChange("R$5.000 - R$10.000")} 
                            control={
                                <Radio 
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
                                    R$5.000 - R$10.000
                                </Typography>
                            }
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-evenly',
                                alignItems: 'center',

                                width: '15rem',
                                height: '7rem',
                                borderRadius: '1rem',

                                backgroundColor: '##FFFFFF',
                                boxShadow: '0px 4px 10px 0px rgba(31, 37, 89, 0.07), 0px 2px 11px 0px rgba(69, 65, 164, 0.06)',
                            }}
                        />

                        <FormControlLabel 
                            value="R$10.000 - R$20.000"
                            onClick={() => handlePriceChange("R$10.000 - R$20.000")} 
                            control={
                                <Radio 
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
                                    }}
                                >
                                    R$10.000 - R$20.000
                                </Typography>
                            }
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-evenly',
                                alignItems: 'center',

                                width: '15rem',
                                height: '7rem',
                                borderRadius: '1rem',

                                backgroundColor: '##FFFFFF',
                                boxShadow: '0px 4px 10px 0px rgba(31, 37, 89, 0.07), 0px 2px 11px 0px rgba(69, 65, 164, 0.06)',
                            }}
                        />

                        <FormControlLabel 
                            value="R$20.000 - $50.000"
                            onClick={() => handlePriceChange("R$20.000 - $50.000")} 
                            control={
                                <Radio 
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
                                    R$20.000 - $50.000
                                </Typography>
                            }
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-evenly',
                                alignItems: 'center',

                                width: '15rem',
                                height: '7rem',
                                borderRadius: '1rem',

                                backgroundColor: '##FFFFFF',
                                boxShadow: '0px 4px 10px 0px rgba(31, 37, 89, 0.07), 0px 2px 11px 0px rgba(69, 65, 164, 0.06)',
                            }}
                        />

                        <FormControlLabel 
                            value="R$50.000 +"
                            onClick={() => handlePriceChange("R$50.000 +")} 
                            control={
                                <Radio 
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
                                    R$50.000 +
                                </Typography>
                            }
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-evenly',
                                alignItems: 'center',

                                width: '15rem',
                                height: '7rem',
                                borderRadius: '1rem',
                                
                                backgroundColor: '##FFFFFF',
                                boxShadow: '0px 4px 10px 0px rgba(31, 37, 89, 0.07), 0px 2px 11px 0px rgba(69, 65, 164, 0.06)',
                            }}
                        />
                    </RadioGroup> 
                </FormControl>
            </>
        </SStepThree>
    );
};
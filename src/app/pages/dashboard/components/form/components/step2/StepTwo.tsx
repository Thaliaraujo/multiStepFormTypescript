import styled from "styled-components";
import {FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";

import { Paragraphs } from "../../../paragraphs/Paragraphs";
import { Titles } from "../../../titles/Titles";

import developer from "./imagesStepTwo/developer.svg";
import design from "./imagesStepTwo/design.svg";
import marketing from "./imagesStepTwo/marketing.svg";
import setting from "./imagesStepTwo/Setting.svg";


const SStepTwo = styled.div `
     margin: 0 1rem;
`

export const StepTwo = (props: {
    service: string,
    onServiceChange: (value: string) => void,
}) => {
    const handleServiceChange = (selectedService: string) => {
        props.onServiceChange(selectedService);
    };

    return(
        <SStepTwo>
            <Titles>Nossos serviços</Titles>
            <Paragraphs>Selecione os serviços de seu interesse.</Paragraphs>
            
            <RadioGroup
                row
                defaultValue="desenvolvimento"
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
                    value="desenvolvimento"
                    onClick={() => handleServiceChange("desenvolvimento")} 
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
                            Desenvolvimento
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

                        backgroundImage: `url(${developer})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right .5rem center',
                        backgroundColor: '##FFFFFF',

                        boxShadow: '0px 4px 10px 0px rgba(31, 37, 89, 0.07), 0px 2px 11px 0px rgba(69, 65, 164, 0.06)',
                    }}
                />

                <FormControlLabel 
                    value="design"
                    onClick={() => handleServiceChange("design")} 
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
                            Web Design
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

                        backgroundImage: `url(${design})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right .5rem center',
                        backgroundColor: '##FFFFFF',

                        boxShadow: '0px 4px 10px 0px rgba(31, 37, 89, 0.07), 0px 2px 11px 0px rgba(69, 65, 164, 0.06)',
                    }}
                />

                <FormControlLabel 
                    value="marketing"
                    onClick={() => handleServiceChange("marketing")} 
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
                            Marketing
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

                        backgroundImage: `url(${marketing})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right .5rem center',
                        backgroundColor: '##FFFFFF',

                        boxShadow: '0px 4px 10px 0px rgba(31, 37, 89, 0.07), 0px 2px 11px 0px rgba(69, 65, 164, 0.06)',
                    }}
                />

                <FormControlLabel 
                    value="outro"
                    onClick={() => handleServiceChange("outro")} 
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
                            Outro
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

                        backgroundImage: `url(${setting})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right .5rem center',
                        backgroundColor: '##FFFFFF',

                        boxShadow: '0px 4px 10px 0px rgba(31, 37, 89, 0.07), 0px 2px 11px 0px rgba(69, 65, 164, 0.06)',
                    }}
                />
            </RadioGroup> 
        </SStepTwo>
    );
};
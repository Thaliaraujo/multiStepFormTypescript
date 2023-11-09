import { Input } from "../../../input/Input";
import { Paragraphs } from "../../../paragraphs/Paragraphs";
import { Titles } from "../../../titles/Titles";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

export const StepTwo = (props: {
    teste: string,
    onTesteChange: (value: string) => void,
}) => {
    return(
        <div>
            <Titles>Nossos serviços</Titles>
            <Paragraphs>Selecione os serviços de seu interesse.</Paragraphs>
            <Input 
                label= "test"
                placeholder="tets"
                value={props.teste}
                icon= {<PersonOutlineOutlinedIcon />}
                onChange={props.onTesteChange}
            />
        </div>
    );
};
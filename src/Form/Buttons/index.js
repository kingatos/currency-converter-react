import { ButtonArea, Button } from "./styled.js";


export const Buttons = ({ onResetClick }) => (
    <ButtonArea>
        <Button>
            Calculate
        </Button>
        <Button
            type="reset"
            onClick={onResetClick}
        >
            Clear
        </Button>
    </ButtonArea>
);

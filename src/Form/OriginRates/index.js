import { StyledDescription, StyledDate } from "./styled.js";
import { useCurrentDate } from "../../Clock/useCurrentDate.js";

export const OriginRates = () => {
  const currentDate = useCurrentDate();

  if (!currentDate) {
    return null;
  }

  const date = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const formattedDate = `${date}-${month}-${year}`;

  return (
    <StyledDescription>
      Currency rates are taken from the European Central Bank. <br />
      Current as of: <StyledDate>{formattedDate}</StyledDate>
    </StyledDescription>
  );
};

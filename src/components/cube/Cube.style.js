import styled from "styled-components";

export const RowContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Face = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 150px;
    height: 150px;
`;

export const Square = styled.div`
    width: 50px;
    height: 50px;
    border: 1px solid #000;
    border-radius: 5px;
    background-color: ${(props) => props.colorOfPiece};
`;

// You can then use these components in your React component like this:

// <Face>
//     <Square />
//     <Square />
//     <Square />
//     <Square />
//     <Square />
//     <Square />
//     <Square />
//     <Square />
//     <Square />
// </Face>
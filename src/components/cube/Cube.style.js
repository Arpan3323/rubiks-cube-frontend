import styled from "styled-components";

export const CubeContainer = styled.div`

    padding: 2rem 0;
    margin-top: 1rem;
    border: 1px solid #000;

`;

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
    @media (max-width: 768px) {
        width: 90px;
        height: 90px;
    }
`;

export const Square = styled.div`
    width: 50px;
    height: 50px;
    border: 1px solid #000;
    border-radius: 5px;
    background-color: ${(props) => props.colorOfPiece};
    &:hover {
        border-radius: 10px;
        background-color: ${(props) => props.colorOfPiece === "white" ? "silver" : props.colorOfPiece === "yellow" ? "gold" : props.colorOfPiece === "green" ? "lime" : props.colorOfPiece === "blue" ? "cyan" : props.colorOfPiece === "red" ? "tomato" : "tan"};

    }

    @media (max-width: 768px) {
        width: 30px;
        height: 30px;
    }

    
`;

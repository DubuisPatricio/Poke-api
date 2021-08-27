import styled from "styled-components";

export const PokemonCard = styled.div`
  display: flex;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
`;

export const PokemonImageContainer = styled.div`
  width: 80px;
  height: 80px;
  padding: 10px;
`;

export const PokemonCardBody = styled.div`
  display: flex;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
`;

export const PokemonCardTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-transform: capitalize;
`;

export const PokemonCardBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PokemonTypeContainer = styled.div`
  display: flex;
`;

export const PokemonTypeText = styled.div`
  margin-right: 10px;
  text-transform: capitalize;
`;

import styled from "styled-components";

export const AppContainer = styled.div`
  align-items: flex-start;
  background-color: #3179ba;
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 20px;
  width: 100%;
`;
export const ColumnContainer = styled.div`
  background-color: #ebecf0;
  width: 300px;
  min-height: 40px;
  margin-right: 20px;
  border-radius: 3px;
  padding: 8px 8px;
  flex-grow: 0;
`;
export const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
`;
export const CardContainer = styled.div`
  background-color: #fff;
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  max-width: 300px;
  border-radius: 3px;
  box-shadow: #091e4240 0px 1px 0px 0px;
`;
interface AddItemButtonProps {
  dark?: boolean;
}
export const AddItemButton = styled.button<AddItemButtonProps>`
  background-color: #ffffff3d;
  width: 100%;
  max-width: 300px;
  border: transparent;
  text-align: left;
  cursor: pointer;
  text-transform: capitalize;
  color: ${(props) => (props.dark ? "#000" : "#fff")};
  padding: 0.5rem 0.2rem;
`;
export const NewItemFormContainer = styled.div`
  width: 100%;
  max-width: 300px;
  flex-direction: column;
  display: flex;
  align-items: flex-start;
`;
export const NewItemButton = styled.button`
  background-color: #5aac44;
  text-transform: capitalize;
  color: white;
  border-radius: 4px;
  padding: 0.3rem 0.5rem;
  text-align: center;
  box-shadow: none;
  border: transparent;
  cursor: pointer;
  &:hover {
    background-color: #06d6a0;
    font-weight: bold;
  }
`;
export const NewItemInput = styled.input`
  border-radius: 3px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
  &:focus {
    outline: none !important;
    border: 2px red solid;
  }
`;

import styled from 'styled-components';

export const StyledList = styled.ul``;
export const StyledItem = styled.li`
  margin: 0.5em 0px;
  padding: 0.5em 0px;
  border-bottom: 1px solid #d3d3d3;
  display: flex;
`;

export const StyledName = styled.span`
  flex: 999;
`;

export const StyledButton = styled.button`
  display: flex;
  flex: 1;
  cursor: pointer;
  border-width: 0px;
  border-color: #dd4b3e;
  background-color: #dd4b3e;
  color: #fff;

  transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s ease-out, border-color 0.4s ease-out;
  box-shadow: 0 0 0 0 #fff;

  font-size: 14px;
  padding: 0 4px;
  height: 20px;
  border-radius: 4px;

  font-weight: 600;
  text-align: center;
  display: inline-block;
  width: auto;
  margin-right: 0.5em;

  outline: none;

  &:hover {
    border-color: #822f2b;
    background-color: #822f2b;
    color: #fff;
    transition: background-color 0.2s ease-in;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);
  }

  &:active {
    border-color: #822f2b;
    background-color: #822f2b;
    color: #fff;
  }

  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0.5);
    color: #fff !important;
  }

  &,
  & * {
    box-sizing: border-box;
  }

  svg {
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 2px;
  }
`;

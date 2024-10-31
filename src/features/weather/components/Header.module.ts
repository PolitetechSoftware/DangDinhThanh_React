import styled from "styled-components";

const S_Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  align-items: center;
`;

const S_List = styled.ul`
  max-height: 120px;
  cursor: pointer;
  overflow-y: auto;
  border: 1px solid #e5e7eb;
  width: 160px;
  margin-top: 0;
  padding: 0 10px;
  position: absolute;
  z-index: 2;
  background: #fff;

  li {
    border-bottom: 1px solid #e5e7eb;
  }
  li:last-child {
    border-bottom: unset;
  }
`;

export { S_Header, S_List };

import styled from 'styled-components';

const List = styled.ul`
    list-style-type: none;
    padding: 0;

    li {
        padding: 12px;
        font-size: 16px;
        font-weight: bold;
        border: 1px solid gainsboro;
        border-radius: 2px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    
        &:not(:first-child) {
            margin-top: 12px;
        }
    }

`;

export default List;
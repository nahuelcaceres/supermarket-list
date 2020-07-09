import styled from "styled-components";

const Link = styled.span`
    color: ${({ theme, color = "primary" }) => theme.colors[color] };
    font-size: 16px;
    cursor: pointer;
    padding: 6px;

    & + & {
        margin-left: 12px;
    }
`;

export default Link;
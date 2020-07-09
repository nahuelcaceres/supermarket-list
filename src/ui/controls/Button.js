import styled from "styled-components";

const Button = styled.button`
    background: ${({ theme, color = "primary" }) => theme.colors[color] };
    padding: 12px 24px;
    border-radius: 4px;
    color: white;
    font-size: 16px;
    border: none;
    cursor: pointer;
    width: ${({ width = "100%" }) => width};

`;

export default Button;
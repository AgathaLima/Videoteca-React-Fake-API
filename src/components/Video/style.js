import styled from 'styled-components'

export const Container= styled.div`
    background: #fff;
    padding: 10px;
    height: 200px;
    width: 250px;

    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    h2 {
        color: #1e1e1e;
    }
    a {
        border-left: 3px solid #bbb;
        padding-left: 10px;
        max-width: 230px;

        color: #999;
        font-style: italic ;
        align-self: start;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        transition: opacity 0.2s ease-out;

        &:hover{
            opacity: 0.5;
        }
    }
`;

export const ButtonArea= styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`;

export const Button = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;

    transition: opacity 0.2s ease-out;

    svg{
        height: 20px;
        width: 20px;

        color: ${(props) => (props.liked ? '#3ea6ff' : '#1e1e1e')};
        /* color: #1e1e1e; */
    }
    &:hover{
        opacity: 0.5;
    }
`
import styled from 'styled-components'

// div main styled
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
`
// form style
export const Form = styled.form`

    margin-top: 20px;
    width: 100%;
    max-width: 400px;
    display: flex;

    button, input {
        height: 55px;
        padding: 0 20px;
        color: #444;
        outline: 0;
    }

    input {
        flex: 1;
        background: #fff;
        border: ${props => (props.searchWithError ? '2px solid #F00' : 0)};
        font-size: 18px;
        border-radius: 3px;
    }

    button {
        margin-left: 10px;
        font-size: 14px;
        background: #8fe48f;
        font-weight: bold;
        border-radius: 3px;
        &:hover {
            background: #7abb7a;
        }
    }

`



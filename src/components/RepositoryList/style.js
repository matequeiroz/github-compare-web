import styled from 'styled-components'

// container from the repository list
export const Container = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;

`
// component styles for each repository
export const Repository = styled.div`
    display: flex;
    width: 250px;
    background: #fff;
    border-radius: 3px;
    flex-direction: column;
    margin: 0 10px;

    header {
        padding: 30px 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            width: 64px;
        }

        h3 {
            font-size: 24px;
            margin-top: 10px;
        }

        h5 {
            color: #666;
            font-size: 14px;
        }
    }

    ul {
        list-style: none;
        width: 250px;
        margin-top: 30px;

        li {
            font-weight: bold;
            padding: 12px 20px;

            small {
                font-weight: normal;
                font-size: 12px;
                font-style: italic;
                color: #999;
            }
            &:nth-child(2n){
                background: #f5f5f5;
            }
        }
    }
`

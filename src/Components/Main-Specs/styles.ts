import styled from 'styled-components';

export const Container = styled.div`

    table{
        margin-top: 20px
    }
    tr {
        height: 60px;
    }
    td{
        text-transform: uppercase;
        font-size: 18px;
        margin: 10px 0
    }
    td:nth-child(odd){
        padding-right: 55px
    }
    td > span > p{
        color: #7E7E7E!important;
    }
`;

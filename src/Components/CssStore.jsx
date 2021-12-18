import styled from 'styled-components';

const Appbar = styled.input`
    width:100%;
    height: 50px;
    padding: 10px;
    border:2px solid #DEDEDE;
    outline: none;
    :focus {
        border: 2px solid #87C8FD;
    }
    ::placeholder {
        color: black;
        opacity: 1; 
    }
    :-ms-input-placeholder {
    color: black;
    }

    ::-ms-input-placeholder { 
    color: black;
    }
`
const NameSpace = styled.div`
    width:100%;
    font-size:28px;
    font-weight:600;
    line-height:1.5;
    padding:10px;
    display:flex;
    flex-flow:row;
    :hover{
        background-color: #FAFAFA;
    }
`
const CompanyName = styled.div`
    width:100%;
    font-size:28px;
    font-weight:600;
    line-height:0.7;
    display:flex;
    flex-flow:row;
    justify-content:space-between;
    :hover{
        background-color: #FAFAFA;
    }
`


export { Appbar,NameSpace,CompanyName}
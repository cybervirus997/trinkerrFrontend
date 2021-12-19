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
    border-bottom: 3px solid #F2F2F2;
    justify-content:space-between;
    :hover{
        background-color: #FAFAFA;
    }
    &:hover .showMethebutton {
        display: block;
    }
    &:hover .showMethebutton123456 {
        display: block;
    }
`
const Hiddenandseek = styled.div`
  display:none;
  cursor:pointer;
  color: grey;
  padding: 7px 10px;
  font-weight: 500;
  font-size:50px;
  width:60px;
  height: 60px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`
const FooterCss = styled.div`
    font-size:24px;
    font-weight:600;
    height:60px;
    text-align:center;
    border: 1px solid #D8D8D8;
    background-color: white ;
    position: fixed ;
    bottom: 4px;
    justify-content: space-between;
    .create123456789{
        padding-left:11px;
        margin-top:-4px;
    }
    .image02323{
        width:20%;
        height: 130%;
    }
    .bldhwfbwe23
    {
       margin-top:-4px; 
    }  
    .qwertgfvbhjn1234
    {
        border: 1px solid #D8D8D8
    }
    &:hover .vfwehgf3456
    {
        border: 2px solid #3FA9FF;
    }
    &:hover .create123456789
    {
        color: #3FA9FF;
    }
`

export { Appbar,NameSpace,CompanyName,Hiddenandseek,FooterCss}
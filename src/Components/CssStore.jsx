import styled from 'styled-components';

const HoverText = styled.p`
	color: #000;
	:hover {
		color: #ed1212;
		cursor: pointer;
	}
`

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
    font-size:20px;
    font-weight:600;
    line-height:1.5;
    padding:10px;
    display:flex;
    flex-flow:row;
    justify-content: space-between;
    border-top: 3px solid #F2F2F2;
    border-bottom: 3px solid #F2F2F2;
`


export { Appbar,NameSpace}
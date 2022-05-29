import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
 width: 100%
 width: 800px;
 margin:0;
`;
export const Title = styled.h1`
 text-align: center;
 font-size: 2rem;
 font-family: sans-serif;
`;
export const List = styled.ul`
 list-style: none;
 text-align: center;
 padding: 0;
 margin: 0; 
 font-family: sans-serif;
`;
export const ListItem = styled.li`
 margin: .5rem 0;
 background: #f5a364;
 color: #fff;
 padding: .5rem;
`;

export const LinkHome = styled(Link)`
 display: block;
 width: 4rem;
 text-align: center;
 background: #f5a364;
 margin: 2rem auto;
 padding: .5rem 0;
 color: #fff;
 text-decoration: none;
`;

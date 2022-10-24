import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Footer = ({title}) => (
    <ContainerFooter>
        <p>&copy;{new Date().getFullYear()} Derechos Reservados. {title}</p>
        <p
            css={css`
                font-size: 12px;
            `}
        >Hecho por Ezequiel Luján Escobar</p>
    </ContainerFooter>
);

const ContainerFooter = styled.footer`
    margin-top: 5rem;
    text-align: center;
    color: #fff;
    background-color: rgb(33,44,66);
    padding: .8rem;
    line-height: .5;
`;

export default Footer;
import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import HabitacionPreview from './habitacionPreview';
import useHabitaciones from '../hooks/use-habitaciones.js';

const SectionHabitaciones = () => {

    const habitaciones = useHabitaciones();

    return ( 
        <>
            <h2
                css={css`
                text-align: center;
                margin-top: 5rem;
                font-size: 3rem;
                `}
            >Nuestras habitaciones</h2>

            <ListadoHabitaciones>
                {habitaciones.map(habitacion => (
                    <HabitacionPreview 
                        key={habitacion.id}
                        habitacion={habitacion}
                    />
                ))}
            </ListadoHabitaciones>
        </>
    );
}

const ListadoHabitaciones = styled.ul`
    max-width: 1200px;
    width: 95%;
    margin: 4rem auto 0 auto;
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 3rem;
    }
`;

export default SectionHabitaciones;
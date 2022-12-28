import React, { FC } from 'react';
import { Figure } from '../models/figures/Figure';

interface LostFugresProps {
    title: string;
    figures: Figure[]
}

const LostFigures: FC<LostFugresProps> = ({title, figures}) => {
    return (
        <div className='lost'>
            <h3>{title}</h3>
            {figures.map(figure =>
                <div key={figure.id}>
                    {figure.name} {figure.logo && <img width={20} height={20} src={figure.logo}/>}        
                </div>    
            )}
        </div>
    );
};

export default LostFigures; 
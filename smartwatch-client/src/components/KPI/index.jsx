import React from 'react';
import { Icon } from "@iconify/react";
import "./style.css";
const KPI = ({title, num, iconName}) => {
    return (
        <div className='kpi-card'>
            <div className="kpi-title flex flex-row g-1 justify-center align-center">
                <p>{title}</p>
                <Icon icon={iconName} width="24" height="24" />
            </div>
            <div className="kpi-num ">
            {num}
            </div>
        </div>
    );
};

export default KPI;
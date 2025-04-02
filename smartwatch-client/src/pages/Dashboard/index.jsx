import React, { useState , useEffect } from 'react';
import "./style.css"
import ActivityChart from '../../components/LineChart';
import KPI from '../../components/KPI';
import CaloriesBurnedChart from '../../components/ActivePieChart';
import StepsBarChart from '../../components/BarChart';
import { useSelector } from 'react-redux'
import FileUploadModal from '../../components/Modal';

const Dashboard = () => {
    const kpiData = useSelector((state) => state.KPIData);
    console.log(kpiData)
    const [kpis , setKpis] = useState({
        steps:0,
        distance:0,
        time:0,
        calories:0
    });
    useEffect(() => {
        setKpis({
            steps: kpiData?.steps,
            distance:  kpiData?.distance,
            time: kpiData?.time ,
            calories: kpiData?.calories 
        });
    }, [kpiData]);
    return (
        <div>
            <div className="kpis flex flex-row justify-center ">
            <KPI 
            title={"Steps"}
            num={kpis.steps}
            iconName={"material-symbols:steps"}
            />
            <KPI 
            title={"Distance"}
            num={kpis.distance+ " /m"}
            iconName={"material-symbols:distance"}
            /><KPI 
            title={"Time"}
            num={kpis.time+ " /min"}
            iconName={"material-symbols:nest-clock-farsight-analog"}
            /><KPI 
            title={"Calories"}
            num={kpis.calories}
            iconName={"material-symbols:local-fire-department"}
            />
            </div>  
          <div className='charts-container flex flex-row flex-wrap'>
            <div className="small-chart">
            <h2>Today: Calories Burning & Steps</h2>
            <CaloriesBurnedChart />
            </div> 
            <div className="small-chart">
            <h2>Total Calories Burned</h2>
            <CaloriesBurnedChart />
            </div> 
          </div>
        
        <div className='activity-chart'>
            <ActivityChart />
        </div>
        <div className='activity-chart'>
        <h2>Weakly Steps</h2>
           <StepsBarChart />
        </div>
        </div>
    );
};

export default Dashboard;
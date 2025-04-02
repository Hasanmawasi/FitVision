import React, { useState , useEffect } from 'react';
import "./style.css"
import ActivityChart from '../../components/LineChart';
import KPI from '../../components/KPI';
import CaloriesBurnedChart from '../../components/ActivePieChart';
import StepsBarChart from '../../components/BarChart';
import { useSelector ,useDispatch } from 'react-redux'
import { getData } from '../../features/KPI/KPISlice';
import { getWeaklyData } from '../../features/StepsAndMin/StepsAndMinSlice';
const Dashboard = () => {
    const dispatch = useDispatch();
    const kpiData = useSelector((state) => state.KPIData);
    const StepsWeaklyData = useSelector((state)=> state.StepsAndMin.data)
    console.log(kpiData)
    // console.log(StepsWeaklyData)
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

    useEffect(()=>{
        dispatch(getData())
        dispatch(getWeaklyData());
    },[])
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
            <ActivityChart data={StepsWeaklyData}/>
        </div>
        <div className='activity-chart'>
        <h2>Weakly Steps</h2>
           <StepsBarChart />
        </div>
        </div>
    );
};

export default Dashboard;
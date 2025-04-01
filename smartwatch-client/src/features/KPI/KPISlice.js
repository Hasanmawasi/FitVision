import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    steps:1000,
    time: 30,
    calories: 350,
    distance: 200
}

export const KPISlice = createSlice({
    name:"KPI",
    initialState,
    reducers:{
        getData: ()=> console.log("from kpi reducer")
    }


});

export const {getData} = KPISlice.actions;
export default KPISlice.reducer;
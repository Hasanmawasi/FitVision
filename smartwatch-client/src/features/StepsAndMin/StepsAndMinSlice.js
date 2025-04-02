import { createSlice } from '@reduxjs/toolkit';

const data = [
    { date: "Mon", steps: 1000, activeMinutes: 10 },
    { date: "Tue", steps: 7000, activeMinutes: 20 },
    { date: "Wed", steps: 6000, activeMinutes: 15 },
    { date: "Thu", steps: 9000, activeMinutes: 30 },
    { date: "Fri", steps: 10000, activeMinutes: 45 },
    { date: "Sat", steps: 4000, activeMinutes: 30},
    { date: "Sun", steps: 5000, activeMinutes: 23},
  ];

const initialState = {
    data
}
export const StepsAndMin = createSlice({
    name:"StepsAndMin",
    initialState,
    reducers:{
        getWeaklyData: ()=> console.log("from Steps&Min reducer put function to call api")
    }


});

export default StepsAndMin.reducer;
export const {getWeaklyData} = StepsAndMin.actions;
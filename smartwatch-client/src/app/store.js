import { configureStore } from '@reduxjs/toolkit';
import KPIReducer from '../features/KPI/KPISlice';
import StepsMinReducer from '../features/StepsAndMin/StepsAndMinSlice'
export default configureStore({
  reducer: {
    KPIData: KPIReducer,
    StepsAndMin: StepsMinReducer,
  },
})
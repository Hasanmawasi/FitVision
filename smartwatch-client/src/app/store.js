import { configureStore } from '@reduxjs/toolkit'
import KPIReducer from '../features/KPI/KPISlice'
export default configureStore({
  reducer: {
    KPIData: KPIReducer,
    
  },
})
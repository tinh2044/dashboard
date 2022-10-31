import { configureStore } from '@reduxjs/toolkit';
import formAddSlice from '../scenes/FromAdd/FormAddSlice';
import formAddCustomSlice from '../scenes/FromAddCustom/FormAddCustomSlice';

const store = configureStore({
    reducer: {
        dataTeam: formAddSlice.reducer,
        dataCustomer: formAddCustomSlice.reducer,
    },
});
export default store;

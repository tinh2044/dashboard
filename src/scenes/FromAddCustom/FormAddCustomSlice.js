import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 } from 'uuid';
import { mockDataInvoices } from '../../data/mockData';

const formAddCustomSlice = createSlice({
    name: 'customer',
    initialState: mockDataInvoices,
    reducers: {
        addCustom: (state, action) => {
            const newMember = action.payload;
            const phone = action.payload.phone;
            newMember.id = v4();
            newMember.index = state.length + 1;
            newMember.phone = `${phone.slice(0, 3)} ${phone.slice(3, 6)} ${phone.slice(6)}`;
            newMember.name = newMember.firstName + ' ' + newMember.lastName;
            newMember.cost = newMember.cost + ' $';
            state.push(newMember);
        },
    },
});

export const { actions } = formAddCustomSlice;
export default formAddCustomSlice;

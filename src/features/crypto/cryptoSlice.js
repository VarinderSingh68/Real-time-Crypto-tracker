import { createSlice } from '@reduxjs/toolkit';
import sampleData from '../../utils/sampleCryptoData';

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: sampleData,
  reducers: {
    updateCrypto: (state, action) => {
      const index = state.findIndex(c => c.symbol === action.payload.symbol);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    }
  }
});

export const { updateCrypto } = cryptoSlice.actions;
export default cryptoSlice.reducer;

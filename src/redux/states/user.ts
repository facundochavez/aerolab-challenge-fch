import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { showToast } from '@/utils/showToast';
import { User, AppDispatch, RootState } from '@/types';

const initialState: User = {
  id: null,
  name: '',
  points: undefined,
  redeemHistory: [],
  status: 'idle',
};

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  try {
    const response = await fetch(
      'https://coding-challenge-api.aerolab.co/user/me',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_AEROLAB_CHALLENGE_API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage =
        errorData.message || `Error ${response.status}: ${response.statusText}`;

      showToast('error', '', 'There was an error loading user data.');
      throw new Error(errorMessage);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error instanceof Error ? error.message : 'Unknown error');
    showToast('error', '', 'There was an error loading user data.');
    throw error;
  }
});

export const addUserPoints = createAsyncThunk(
  'user/addUserPoints',
  async (points: number) => {
    try {
      const response = await fetch(
        'https://coding-challenge-api.aerolab.co/user/points',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_AEROLAB_CHALLENGE_API_KEY}`,
          },
          body: JSON.stringify({
            amount: points,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage =
          errorData.message ||
          `Error ${response.status}: ${response.statusText}`;

        showToast('error', '', 'Failed to add points.');
        throw new Error(errorMessage);
      }

      const data = await response.json();
      showToast('success', String(points + ' points'), ' added successfully');
      return data;
    } catch (error) {
      console.log(error instanceof Error ? error.message : 'Unknown error');
      showToast('error', '', 'Failed to add points.');
      throw error;
    }
  }
);

interface RedeemProductArgs {
  productId: string;
  productName: string;
  cost: number;
}

export const redeemProduct = createAsyncThunk<
  any,
  RedeemProductArgs,
  { state: RootState }
>(
  'user/redeemProduct',
  async ({ productId, productName, cost }, { dispatch, getState }) => {
    const state = getState();
    const user = state.user;
    dispatch(
      updateUser({
        ...user,
        status: 'processing',
      })
    );
    try {
      const response = await fetch(
        'https://coding-challenge-api.aerolab.co/redeem',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_AEROLAB_CHALLENGE_API_KEY}`,
          },
          body: JSON.stringify({
            productId,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage =
          errorData.message ||
          `Error ${response.status}: ${response.statusText}`;
        showToast('error', '', 'There was a problem with the transaction');
        throw new Error(errorMessage);
      }

      const data = await response.json();

      if (user.points !== undefined) {
        dispatch(
          updateUser({
            ...user,
            points: user.points - cost,
            status: 'succeeded',
          })
        );
      }

      console.log(data);

      showToast('success', productName, ' redeemed successfully');
      return data;
    } catch (error) {
      console.log(error instanceof Error ? error.message : 'Unknown error');
      showToast('error', '', 'Failed to redeem product');
      throw error;
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.name = action.payload.name;
      state.points = action.payload.points;
      state.redeemHistory = action.payload.redeemHistory;
      state.status = action.payload.status;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.id = action.payload.id;
        state.name = action.payload.name;
        state.points = action.payload.points;
        state.redeemHistory = action.payload.redeemHistory;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
      })
      .addCase(addUserPoints.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addUserPoints.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.points = action.payload['New Points'];
      })
      .addCase(addUserPoints.rejected, (state, action) => {
        state.status = 'failed';
      })
      .addCase(redeemProduct.pending, (state) => {
        state.status = 'processing';
      })
      .addCase(redeemProduct.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(redeemProduct.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;

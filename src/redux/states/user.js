import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Acción asíncrona para obtener los datos del usuario usando fetch
export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  const response = await fetch('https://coding-challenge-api.aerolab.co/user/me', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${process.env.AEROLAB_CHALLENGE_API_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error('Error fetching user data');
  }

  const data = await response.json();  // Convierte la respuesta a JSON
  return data;  // Devuelve los datos del usuario
});

// Slice de usuario para manejar el estado de los puntos y el usuario
const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: null,
    name: '',
    points: 0,
    redeemHistory: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
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
        state.error = action.error.message;
      });
  },
});

// Exporta el reducer para usarlo en el store
export default userSlice.reducer;

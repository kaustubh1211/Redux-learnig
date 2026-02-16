import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 1. Create the Thunk (The Async Action)
// This is a function that returns a promise.
export const fetchUsers = createAsyncThunk(
  'user/fetchUsers', // Action name
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data; // This becomes "action.payload" automatically
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    // Standard reducers go here (like clearUsers)
  },
  // 2. Handle the "Lifecycle" of the API call
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload; // Update the store with API data
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    filename: '',
    columns: [],
  },
  reducers: {
    applyFilename : (state, action) => {
      console.log(action.payload);
      state.filename = action.payload;
    },
    applyColumns : (state, action) => {
        console.log(action.payload);
        state.columns = action.payload;
    }
  },
});

export const { applyColumns, applyFilename } = dataSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const getFilename = state => state.data.filename;
export const getColumns = state => state.data.columns;

export default dataSlice.reducer;

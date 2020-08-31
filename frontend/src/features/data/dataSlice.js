import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    file: null,
    filename: '',
    columns: [],
    dataX: [],
    dataY: [],
    size: []
  },
  reducers: {
    applyFile: (state, action) => {
      console.log(action.payload);
      state.file = action.payload;
    },
    applyFilename: (state, action) => {
      console.log(action.payload);
      state.filename = action.payload;
    },
    applyColumns: (state, action) => {
      console.log(action.payload);
      state.columns = action.payload;
    },
    applyDataX: (state, action) => {
      console.log(action.payload);
      state.dataX = action.payload;
    },
    applyDataY: (state, action) => {
      console.log(action.payload);
      state.dataY = action.payload;
    },
    applyDataSize: (state, action) => {
      console.log(action.payload);
      state.size = action.payload;
    }
  },
});

export const { applyColumns, applyFilename, applyFile, applyDataX, applyDataY, applyDataSize } = dataSlice.actions;

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
export const getFile = state => state.data.file;
export const getDataX = state => state.data.dataX;
export const getDataY = state => state.data.dataY;
export const getDataSize = state => state.data.size;

export default dataSlice.reducer;

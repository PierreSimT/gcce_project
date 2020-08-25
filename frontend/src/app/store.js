import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import dataReducer from '../features/data/dataSlice';

export default configureStore({
  middleware: getDefaultMiddleware({
    serializableCheck: {
      // Ignore these action types
      ignoredActions: ['data/fileUpload'],
      //   // Ignore these field paths in all actions
      //   ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
      //   // Ignore these paths in the state
      //   ignoredPaths: ['items.dates']
    }
  }),
  reducer: {
    data: dataReducer
  },
});

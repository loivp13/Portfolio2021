import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

export default (() => {
  let store = createStore(
    persistedReducer,
    composeEnhancer(applyMiddleware(reduxThunk))
  );
  let persistors = persistStore(store);
  return { store, persistors };
})();

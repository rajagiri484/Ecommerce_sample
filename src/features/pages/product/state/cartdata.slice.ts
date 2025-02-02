import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { RequestStatus } from "../../../../types";
import { addToCart } from "./cartdata.thunk";
import { ProductResponse } from "../../../../types/ProductListInterface";

interface IProductDataState {
  cartdata: ProductResponse;
  status: RequestStatus;
}

const initialState: IProductDataState = {
  cartdata: [],
  status: RequestStatus.IDLE,
};
const homeSlice = createSlice({
  name: "productdata",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<IProductDataState>) => {
    builder.addCase(addToCart.pending, (nextState) => {
      nextState.cartdata = [];
      nextState.status = RequestStatus.PENDING;
    });
    builder.addCase(addToCart.fulfilled, (nextState, action) => {
      nextState.cartdata = action.payload;
      nextState.status = RequestStatus.SUCCESSFULL;
    });
    builder.addCase(addToCart.rejected, (nextState) => {
      nextState.status = RequestStatus.FAILED;
    });
  },
});

export default homeSlice.reducer;

import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { fetchProductListings, updateSearchItems } from "./homedata.thunk";
import { ProductResponse } from "../../../../types/ProductListInterface";
import { RequestStatus } from "../../../../types";

interface IProductDataState {
  data: ProductResponse;
  immutableData: ProductResponse;
  status: RequestStatus;
}

const initialState: IProductDataState = {
  data: [],
  immutableData: [],
  status: RequestStatus.IDLE,
};
const homeSlice = createSlice({
  name: "productdata",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<IProductDataState>) => {
    builder.addCase(fetchProductListings.pending, (nextState) => {
      nextState.data = [];
      nextState.status = RequestStatus.PENDING;
    });
    builder.addCase(fetchProductListings.fulfilled, (nextState, action) => {
      nextState.data = action.payload;
      nextState.immutableData = action.payload;
      nextState.status = RequestStatus.SUCCESSFULL;
    });
    builder.addCase(updateSearchItems.fulfilled, (nextState, action) => {
      nextState.data = action.payload;
      nextState.status = RequestStatus.SUCCESSFULL;
    });
    builder.addCase(fetchProductListings.rejected, (nextState) => {
      nextState.status = RequestStatus.FAILED;
    });
  },
});

export default homeSlice.reducer;

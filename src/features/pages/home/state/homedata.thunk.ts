import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { getRequest } from "../../../../network/Network";
import { Data, ProductResponse } from "../../../../types/ProductListInterface";

export const fetchProductListings = createAsyncThunk(
  "productdata/fetch",
  async (endPoint: string, thunkAPI) => {
    try {
      const response = await getRequest(endPoint);
      if (response.status !== 200) {
        return thunkAPI.rejectWithValue(
          new AxiosError(`Request error: ${response.status} code`)
        );
      }
      return response.data as ProductResponse;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const updateSearchItems = createAsyncThunk(
  "productdata/update",
  async (data: Data[], thunkAPI) => {
    return data as ProductResponse;
  }
);

export const mockImages = [
  "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
];

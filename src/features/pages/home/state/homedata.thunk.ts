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

// these are some sample images to show banner since the api we are using provides single image for product

export const mockImages = [
  "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
];

export const offerMockImages = [
  "https://img.freepik.com/free-vector/modern-super-sale-promotion-bright-banner_1055-6985.jpg?t=st=1738607642~exp=1738611242~hmac=80b23f42a10d3108cd3a368af15ae88d50ebb8e8747703ab4092aee9a38e0da1&w=1800",
  "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
];

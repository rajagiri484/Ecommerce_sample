import { createAsyncThunk } from "@reduxjs/toolkit";
import { Data, ProductResponse } from "../../../../types/ProductListInterface";

export const addToCart = createAsyncThunk(
  "cartdata/insert",
  async (data: Data[]) => {
    return data as ProductResponse;
  }
);

export const updateSearchItems = createAsyncThunk(
  "cartdata/update",
  async (data: Data[]) => {
    return data as ProductResponse;
  }
);

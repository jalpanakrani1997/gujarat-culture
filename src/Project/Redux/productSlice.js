import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    loading: false,
    error: null,
    pagination: {
        currentPage: 1,
        totalPages: 1,
        limit: 100
    }
};

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        try {
            const response = await fetch('http://localhost:3003/products');
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    }
);

export const fetchProductById = createAsyncThunk(
    'products/fetchProductById',
    async (id) => {
        const response = await fetch(`http://localhost:3003/products/${id}`);
        return response.json();
    }
);

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.pagination.currentPage = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
                state.error = null;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchProductById.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.loading = false;
                state.currentProduct = action.payload;
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const { setCurrentPage } = productSlice.actions;
export default productSlice.reducer; 
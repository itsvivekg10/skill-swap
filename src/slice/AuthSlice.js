import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: null,
  status: "idle", // idle | loading | succeeded | failed
  error: null,
};

// Register
export const registerThunk = createAsyncThunk("auth/register", async ({ email, password }, { rejectWithValue }) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (err) {
    console.log(err);
    return rejectWithValue(err.message);
  }
});

// Login
export const LoginThunk = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Only return plain serializable data
      return {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      };
    } catch (err) {
      console.log("Login Error:", err);
      return rejectWithValue(err.message);
    }
  }
);

// Logout
export const logoutThunk = createAsyncThunk("auth/logout", async (_, { rejectWithValue }) => {
  try {
    await signOut(auth);
    return true;
  } catch (err) {
    console.log(err);
    return rejectWithValue(err.message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(registerThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.user = action.payload;
        state.error = null;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })

      // Login
      .addCase(LoginThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(LoginThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.user = action.payload;
        state.error = null;
      })
      .addCase(LoginThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })

      // Logout
      .addCase(logoutThunk.fulfilled, (state) => {
        state.user = null;
        state.status = "idle";
        state.error = null;
      });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;

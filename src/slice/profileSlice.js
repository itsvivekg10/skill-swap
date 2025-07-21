import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

// Async thunk to save profile to Firestore
export const saveProfile = createAsyncThunk(
  "profile/saveProfile",
  async ({ uid, profile }, { rejectWithValue }) => {
    try {
      await setDoc(doc(db, "profiles", uid), profile);
      return profile;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk to fetch profile from Firestore
export const fetchProfile = createAsyncThunk(
  "profile/fetchProfile",
  async (uid, { rejectWithValue }) => {
    try {
      const docRef = doc(db, "profiles", uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        return rejectWithValue("No profile found");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profileData: null,
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {
    clearProfile(state) {
      state.profileData = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetchProfile
      .addCase(fetchProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.profileData = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // saveProfile
      .addCase(saveProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(saveProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.profileData = action.payload;
      })
      .addCase(saveProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { clearProfile } = profileSlice.actions;
export default profileSlice.reducer;

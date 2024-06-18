import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IVisualInitialState} from "@/store/visual/visual.types";



const initialState: IVisualInitialState = {
    activeTab: "home",
}

export const visualSlice = createSlice({
    name: 'visual',
    initialState,
    reducers: {

    }
});

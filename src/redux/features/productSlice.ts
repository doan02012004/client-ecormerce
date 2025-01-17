import { Imodel, IoptionProduct, Iproduct, IproductAtrribute } from "@/shemas/product";
import { genarateId } from "@/utils/client/main";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productInfor:{
        name:'',
        categories:[],
        description:'',
        images:[],
        type: 'configurable',
        original_price:0,
        price:0
    } as Iproduct,
    productOptions:[
        {
            is_show_image:true,
            name:'',
            _id:genarateId(),
            values:[
               {
                _id:genarateId(),
                label:'',
                image:null
               }
            ]
        }
    ] as IoptionProduct[],
    productModels:[] as Imodel[],
    productAttributes: [] as IproductAtrribute[],
    productShip:{
        weight:0,
        height:0,
        width:0,
        length:0,
        volume:0
    }
}

const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        setProductInfor: (state,action) =>{
            state.productInfor = action.payload
        },
        setProductOptions:(state,action) =>{
            state.productOptions = action.payload
        },
        setProductModels:(state,action) =>{
            state.productModels = action.payload
        },
        setProductAttributes: (state,action) =>{
            state.productAttributes = action.payload
        },
        setProductShip: (state,action) =>{
            state.productShip = action.payload
        },
        setProductImages:(state,action) =>{
            state.productInfor.images.push(action.payload)
        },
    }
})

export const {setProductInfor,setProductOptions, setProductModels, setProductAttributes, setProductShip,setProductImages} = productSlice.actions
 
export default productSlice.reducer
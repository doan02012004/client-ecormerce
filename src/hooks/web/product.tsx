
// import { productInforSchema, productModelsSchema, productOptionsSchema } from "@/schemas/product";
// import { Imodel, IoptionProduct, Iproduct } from "@/types/product";


// export const useValidateProductInfor = (data: Iproduct) => {
//     const result = productInforSchema.safeParse(data);
//     if (!result.success) {
//         return false
//     }
//     return true
// }

// export const useValidateProductModels = (data: Imodel[]) => {
//     const result = productModelsSchema.safeParse(data);
//     if (!result.success) {
//         return false
//     }
//     return true
// }

// export const useValidateProductOptions = (data: IoptionProduct[]) => {
//     const result = productOptionsSchema.safeParse(data);
//     if (!result.success) {
//         return false
//     }
//     return true
// }

// export const useValidateProductconfigurable = (data:Iproduct, options:IoptionProduct[],models:Imodel[]) => {
//     const checkOptions = useValidateProductOptions(options)
//     const checkModels = useValidateProductModels(models)
//     if(data.type=='configurable'){
//         if (!checkOptions) {
//             return false
//         }
//     }
//     if (!checkModels) {
//         return false
//     }

//     return true
// }
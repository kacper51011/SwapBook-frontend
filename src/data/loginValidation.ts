import * as yup from "yup"

interface ILoginInitialValues {
    email: string
    password: string
    
}
const loginInitialValues: ILoginInitialValues = {
    email: "",
    password: "",
    
}

const loginValidationSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required()
})

export {loginInitialValues, loginValidationSchema, type ILoginInitialValues};
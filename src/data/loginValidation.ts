import * as yup from "yup"

interface ILoginInitialValues {
    email: string
    password: string
    
}
const loginInitialValues: ILoginInitialValues = {
    email: "",
    password: "",
    
}
const requiredError: string = "This field is required"

const loginValidationSchema = yup.object({
    email: yup.string().email("Invalid email").required(requiredError),
    password: yup.string().required(requiredError)
})

export {loginInitialValues, loginValidationSchema, type ILoginInitialValues};
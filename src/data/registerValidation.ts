import * as yup from "yup"

interface IRegisterInitialValues {
    nickname: string
    email: string
    password: string
    confirmPassword: string
}

const registerInitialValues: IRegisterInitialValues = {
    nickname: "",
    email: "",
    password: "",
    confirmPassword: ""
}
const requiredError: string = "This field is required"
const minError = (characters: number) => {
    return `this field require minimum ${characters} characters`
}
const maxError = (characters: number) => {
    return `this field require maximum ${characters} characters`
}

const registerValidationSchema = yup.object({
    nickname: yup.string().required(requiredError).min(5, minError(5)).max(20, maxError(20)),
    email: yup.string().email("Invalid email").required(requiredError) ,
    password: yup.string().required(requiredError).min(6, minError(6)),
    confirmPassword: yup.string().required().oneOf([yup.ref('password'), null], 'Passwords must match')
})

export {registerInitialValues, registerValidationSchema, type IRegisterInitialValues};
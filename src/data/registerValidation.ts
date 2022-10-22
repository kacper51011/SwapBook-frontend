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

const registerValidationSchema = yup.object({
    nickname: yup.string().required(),
    email: yup.string().email().required() ,
    password: yup.string().required(),
    confirmPassword: yup.string().required().oneOf([yup.ref('password'), null], 'Passwords must match')
})

export {registerInitialValues, registerValidationSchema, type IRegisterInitialValues};
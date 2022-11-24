import * as yup from "yup";

export const loginSchema = yup.object({
    token: yup.string().test('required', 'Forneça um token válido', (token) => {
        if(!token || token.length != 10) return false;
        return true
    }),
}).required();
import z from "zod";

const sendEmailSchema = z.object({
    name: z.string({
        required_error: "Name is Required!"
    }).min(1, "Name must be at least 1 CHARACTER LONG!"),
    email: z.string({
        required_error: "E-mail Is Required!"
    }).email("Must Be A Valid E-Mail Address!"),
    message: z.string({
        required_error: "Message is Required!"
    }).min(1, "Message must be at least 1 CHARACTER LONG!")
});

export {
    sendEmailSchema
}
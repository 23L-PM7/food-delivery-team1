import Mailjet from "node-mailjet";
import { version } from "os";

const mailjet = Mailjet({
    apiKey: "6b9efdd291d488005cf51a8d54bb159c",
    apiSecret: "c24f5aa20994a49b83b6ecf026bb16a5",
});

type SendEmailProps = {
    ToEmail: string;
    ToName: string;
    Subject: string;
    TextPart?: string
    HTMLPart?: string
};


export const SendEmail = async (props: SendEmailProps) => {
    const response = await mailjet.post("send", { version: "v3.1" }).request({
        Messages: [
            {
                From: {
                    Email: "dmngo63@gmail.com",
                    Name: "dmngo"
                },
                To: [
                    {
                        Email: props.ToEmail,
                    },
                ],
                Name: props.ToName,
                Subject: props.Subject,
                TextPart: props.TextPart,
                HTMLPart: props.HTMLPart,
            },
        ],
    });
    console.log(response);
    return response;
};



// const Mailjet = require('node-mailjet');
// const mailjet = Mailjet.apiConnect(
//     process.env.MJ_APIKEY_PUBLIC,
//     process.env.MJ_APIKEY_PRIVATE,
// );

// const request = mailjet
//     .post('send', { version: 'v3.1' })
//     .request({
//         Messages: [
//             {
//                 From: {
//                     Email: "pilot@mailjet.com",
//                     Name: "Mailjet Pilot"
//                 },
//                 To: [
//                     {
//                         Email: "passenger1@mailjet.com",
//                         Name: "passenger 1"
//                     }
//                 ],
//                 Subject: "Your email flight plan!",
//                 TextPart: "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
//                 HTMLPart: "<h3>Dear passenger 1, welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />May the delivery force be with you!"
//             }
//         ]
//     })

// request
//     .then((result) => {
//         console.log(result.body)
//     })
//     .catch((err) => {
//         console.log(err.statusCode)
//     })
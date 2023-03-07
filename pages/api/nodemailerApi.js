import nodemailer from "nodemailer"
export default function sendMail(req, res) {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
            user: process.env.NEXT_PUBLIC_GMAILUSER,
            pass: process.env.NEXT_PUBLIC_GMAILPASSWORD
        }
    })

    //管理人が受け取るメール
    const toHostMailData = {
        from: req.body.email,
        to: 'ryuta0takamiya@gmail.com',
        subject: '【重要】お問合せがありました',
        text: `${req.body.message} Send from ${req.body.email}`,
        html: `
        <p>お名前</p>
        <p>${req.body.name}</p>
        <p>メールアドレス</p>
        <p>${req.body.email}</p>
        <p>メッセージ</p>
        <p>${req.body.message}</p>
        `,
    }

    //送信者が受け取るメール
    const toSenderMailData = {
        from: 'info@wasabi-web.net',
        to: req.body.email,
        subject: 'お問合せを受け付けました',
        text: ` お問合せを受け付けました。回答をお待ちください。${req.body.message}`,
        html: `
        <p>送信内容</p>
        <p>お名前</p>
        <p>${req.body.name}</p>
        <p>メールアドレス</p>
        <p>${req.body.email}</p>
        <p>メッセージ</p>
        <p>${req.body.message}</p>
        `,
    }
    transporter.sendMail(toHostMailData, function (err, info) {
        if (err) console.log(err);
        else {
            console.log(info);
            transporter.sendMail(toSenderMailData, function (err, info) {
                if (err) console.log(err);
                else console.log(info);
            })
        }
    })

    return res.send("成功しました")
}
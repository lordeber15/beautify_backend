const nodemailer = require("nodemailer");

// Llamar a la función `mail` y pasar `mailOptions` como argumento
const sendMail = async (toSend) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: "BeautifyStaff@hotmail.com",
        pass: "beautify123",
      },
    });

    const info = await transporter.sendMail({
      from: "Beautify <BeautifyStaff@hotmail.com>",
      to: toSend.to,
      subject: toSend.subject,
      html: toSend.html,
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = sendMail;

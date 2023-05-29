const { Appointment, Client, Service, Profesional } = require('../../db.js')

const createAppointment = async (profesionalId, clientId, serviceId, date, hour, paid) => {
    const appointment = await Appointment.create({
        paid,
        date,
        hour
    });

    const professional = await Profesional.findByPk(profesionalId);
    const client = await Client.findByPk(clientId);
    const service = await Service.findByPk(serviceId);

    await appointment.setProfesional(professional);
    await appointment.setClient(client);
    await appointment.setService(service);



    return appointment;
}

module.exports = {
    createAppointment
}
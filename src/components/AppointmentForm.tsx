import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        to_email: 'cazelada@live.cl',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        date: formData.date,
        message: formData.description
      };

      await emailjs.send(
        'service_cazelada',
        'template_cazelada',
        templateParams,
        'o4_usdQDusT5Ip8Ue'
      );

      toast.success('Solicitud enviada exitosamente. Nos contactaremos pronto.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        description: ''
      });
    } catch (error) {
      toast.error('Error al enviar la solicitud. Por favor, intente nuevamente.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Toaster position="top-center" />
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            onChange={handleChange}
            value={formData.name}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            onChange={handleChange}
            value={formData.phone}
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700">Servicio</label>
          <select
            id="service"
            name="service"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            onChange={handleChange}
            value={formData.service}
          >
            <option value="">Seleccione un servicio</option>
            <option value="mantenimiento">Mantenimiento de Computadoras</option>
            <option value="redes">Redes y Conectividad</option>
            <option value="software">Instalación de Software</option>
            <option value="seguridad">Seguridad Informática</option>
          </select>
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Fecha preferida</label>
          <input
            type="date"
            id="date"
            name="date"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            onChange={handleChange}
            value={formData.date}
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descripción del problema</label>
          <textarea
            id="description"
            name="description"
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            onChange={handleChange}
            value={formData.description}
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Enviando...' : 'Agendar Servicio'}
        </button>
      </form>
    </>
  );
}
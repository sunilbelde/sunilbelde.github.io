// Contact form component
export function initContactForm() {
  const form = document.getElementById('contact-form');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    // TODO: Implement form submission logic
    // For now, just log the data and show a success message
    console.log('Form submitted:', data);

    // Show success message
    alert('Thank you for your message! I will get back to you soon.');

    // Reset form
    form.reset();
  });
}

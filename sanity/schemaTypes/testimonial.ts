export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the person giving the testimonial'
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'Job title or role (e.g., CEO at Company)'
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      description: 'The testimonial text'
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Controls the order in the carousel'
    },
    {
      name: 'visible',
      title: 'Visible',
      type: 'boolean',
      initialValue: true
    }
  ]
}

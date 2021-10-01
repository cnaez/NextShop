const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'https://api.mostafa-h.ir/api' : 'https://yourwebsite.com'

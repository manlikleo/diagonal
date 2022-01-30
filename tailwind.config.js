module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        primary: '#FFE300',
        ideas:'#333333',
        grad: '#222222',
        social:'#727272'
      },
      screens:{
        'sm':"320px",
        'md':"768px",
        'lg':'1024px',
        'xl':'1440px',
        '2xl':'2560px',
      },

    },
  },
  plugins: [],
}

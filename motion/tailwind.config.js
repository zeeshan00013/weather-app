module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust the path according to your folder structure
  ],
  theme: {
    extend: {
      fontFamily:{
        ExtendDeca:["Lexend Deca ","Deca"]
       },
       colors: {
        darkBlue: '#070C38', // Custom dark blue
        transparentPurple: 'rgba(10, 10, 190, 0.70)', // Custom semi-transparent purple
      },
    },
  },
  plugins: [],
};

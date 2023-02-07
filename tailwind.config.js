module.exports = {
    theme: {
      extend: {
        animation: {
          text: 'text 5s ease infinite',
        },
        keyframes: {
          text: {
            '0%, 100%': {
              transform:'rotate(-3deg)'
            },
            '50%': {
              transform:'rotate(3deg)'
          },
        },
      },
    },
    plugins: [],
  }
}
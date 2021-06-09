const tailwindcss = requir('tailwindcss');

module.exports ={
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ]
}
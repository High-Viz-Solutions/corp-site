module.exports = {
    content: [
        './_includes/**/*.html',
        './_layouts/**/*.html',
        './_posts/*.md',
        './*.html',
        './*.md'
    ],
    theme: {
        extend: {
            backgroundImage: {
                'hero-pattern': "url('/assets/img/hero-pattern.jpeg')",
                'contact': "url('/assets/img/contact.jpeg')"
            },
        },
    },
    plugins: [],
};

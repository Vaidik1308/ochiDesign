/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["ochi.design"]
    }

};
const withTM = require('next-transpile-modules')(['gsap']);
module.exports = withTM();

export default nextConfig;

import adapter from '@sveltejs/adapter-vercel';

const config = {
    kit: { adapter: adapter() },
    typescript: { types: ["node"] }
};

export default config;

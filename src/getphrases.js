import phrases from './phrases';
module.exports = {
    random: () => {
        return phrases[Math.round(Math.random() * phrases.length)];
    }
}
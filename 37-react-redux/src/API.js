const botsUrl = 'http://localhost:3000/bots'

export const getBots = () => fetch(botsUrl)
    .then(res => res.json())

export default {
    getBots
}
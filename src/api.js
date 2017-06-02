export default {
    async getTimelines(type) {
        return (await fetch(
            `${window.config.API_HOST}/timeline?type=${type}`, {
                headers: { "Content-Type": "application/json" },
                credentials: 'include'
            })).json()
    },
}
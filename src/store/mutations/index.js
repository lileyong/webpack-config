export default {
    updateCount (state, num) {
        state.count = num
    },
    updateName (state, {
        firstName,
        lastName
    }) {
        state.firstName = firstName
        state.lastName = lastName
    }
}

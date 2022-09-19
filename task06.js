module.exports = {
    objectsDeeplyEqual: function (cmp1, cmp2) {

        if (cmp1 === cmp2) return true

        if (cmp1 === null || cmp2 === null) return false

        if (typeof cmp1 !== 'object' || typeof cmp2 !== 'object') return false

        let cmp1_keys = Object.entries(cmp1)
        let cmp2_keys = Object.entries(cmp2)

        if (cmp1_keys.length !== cmp2_keys.length) return false

        for (key in cmp1_keys) {
            if (!cmp2_keys.includes(key)) {
                return false
            } 
            if (!objectsDeeplyEqual(cmp1[key], cmp2[key])) return false
        }
        return true
    }
}
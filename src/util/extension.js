/**
 * update array (clear all and then push new items)
 */
// eslint-disable-next-line
Array.prototype.update = function (newItems) {
    this.length = 0
    this.push(...newItems)
}
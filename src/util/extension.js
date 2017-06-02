/**
 * update array (clear all and then push new items)
 */
Array.prototype.update = function (newItems) {
    this.length = 0
    this.push(...newItems)
}
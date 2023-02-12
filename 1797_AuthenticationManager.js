/**
 * @param {number} timeToLive
 */
var AuthenticationManager = function (timeToLive) {
    this.timeToLive = timeToLive;
    this.generateTimes = [];
    this.tokens = new Map();//token -> generateTimes的idx
    this.offset = 0;
};

/** 
 * @param {string} tokenId 
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.generate = function (tokenId, currentTime) {
    this.tokens.set(tokenId, this.generateTimes.length);
    this.generateTimes.push([currentTime, tokenId]);
};

/** 
 * @param {string} tokenId 
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.renew = function (tokenId, currentTime) {
    //token不存在
    if (!this.tokens.has(tokenId)) return;

    //token存在但过期
    if (currentTime - this.timeToLive >= this.generateTimes[this.tokens.get(tokenId)][0]) {
        return;
    }

    //将过期的时间标记为-1，不删除，generate新数据
    this.generateTimes[this.tokens.get(tokenId)][0] = -1;
    this.generate(tokenId, currentTime);
};

/** 
 * @param {number} currentTime
 * @return {number}
 */
AuthenticationManager.prototype.countUnexpiredTokens = function (currentTime) {
    //所有token都过期
    if (this.generateTimes.length === 0
        || currentTime - this.timeToLive
        >= this.generateTimes[this.generateTimes.length - 1][0]
    ) {
        this.tokens.clear();
        this.generateTimes = [];
        this.offset = 0;
        return 0;
    }

    //清除过期部分的tokens，用offset标记过期的generateTimes，还是不删除
    for (let i = this.offset; i < this.generateTimes.length; i++) {
        if (currentTime - this.timeToLive < this.generateTimes[i][0]) {
            this.offset = i;
            break;
        }
        if (this.generateTimes[i][0] !== -1)
            this.tokens.delete(this.generateTimes[i][1]);
    }
    return this.tokens.size;
};

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */
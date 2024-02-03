export function animationHandler() {
    return {
        isBusy: false,
        _pendingActions: [],
        _duration: 100, // ms
        afterRelease(callback) {
            if(this.isBusy) {
                this._pendingActions.push(callback);
            } else {
                callback();
            }
        },
        clearPendingActions() {
            this._pendingActions = [];
        },
        ifReleased(callback) {
            if(!this.isBusy) {
                callback();
            }
        },
        start() {
            this.isBusy = true;
        },
        release() {
            this.isBusy = false;
            this._pendingActions.forEach((callback, index) => {
                callback();
                delete this._pendingActions[index];
            })
        },
    }
}
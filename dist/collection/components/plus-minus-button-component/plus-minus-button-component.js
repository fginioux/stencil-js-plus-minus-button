export class MinusPlusButtonComponent {
    constructor() {
        this._count = 0;
        this.desc = 'Nurun Plus Minus Button Component...';
    }
    async getCount() {
        return Promise.resolve(this._count);
    }
    plusClickHandler() {
        if (!this._isMaxReached() || this.max === undefined) {
            this._count++;
        }
        this.onChanged.emit({
            value: this._count,
            type: MinusPlusButtonComponent.EVENT_TYPES.PLUS
        });
    }
    minusClickHandler() {
        if (!this._isMinReached() || this.min === undefined) {
            this._count--;
        }
        this.onChanged.emit({
            value: this._count,
            type: MinusPlusButtonComponent.EVENT_TYPES.MINUS
        });
    }
    componentDidLoad() {
        if (this.border) {
            this.host.style.setProperty('--button-border-width', `${this.border}px`);
        }
    }
    render() {
        return (h("div", null,
            h("p", null, this.desc),
            h("div", null,
                h("button", { class: "button", onClick: () => this.minusClickHandler() }, "-"),
                h("button", { onClick: () => this.plusClickHandler() }, "+"))));
    }
    _isMinReached() {
        if (this.min !== undefined) {
            return this._count <= this.min;
        }
        return true;
    }
    _isMaxReached() {
        if (this.max !== undefined) {
            return this._count >= this.max;
        }
        return true;
    }
    static get is() { return "plus-minus-button-component"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "border": {
            "type": Number,
            "attr": "border"
        },
        "desc": {
            "type": String,
            "attr": "desc"
        },
        "getCount": {
            "method": true
        },
        "host": {
            "elementRef": true
        },
        "max": {
            "type": Number,
            "attr": "max"
        },
        "min": {
            "type": Number,
            "attr": "min"
        }
    }; }
    static get events() { return [{
            "name": "onChanged",
            "method": "onChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:plus-minus-button-component:**/"; }
}
MinusPlusButtonComponent.EVENT_TYPES = {
    MINUS: 'DECREASE',
    PLUS: 'INCREASE'
};

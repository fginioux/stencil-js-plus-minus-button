import { Component, Prop, Event, EventEmitter, Method, Element } from '@stencil/core';

@Component({
  tag: 'plus-minus-button-component',
  styleUrl: 'plus-minus-button-component.css',
  shadow: true
})
export class MinusPlusButtonComponent {
  static EVENT_TYPES: any = {
    MINUS: 'DECREASE',
    PLUS: 'INCREASE'
  };

  private _count: number = 0;

  @Prop()
  desc: string = 'Nurun Plus Minus Button Component...';

  @Prop()
  min: number;

  @Prop()
  max: number;

  @Prop()
  border: number;

  @Element() host: HTMLElement;

  @Event({
    eventName: 'onChanged',
    composed: true,
    cancelable: true,
    bubbles: true
  }) onChanged: EventEmitter;

  @Method()
  async getCount(): Promise<number> {
    return Promise.resolve(this._count);
  }

  plusClickHandler(): void {
    if (!this._isMaxReached() || this.max === undefined) {
      this._count++;
    }

    this.onChanged.emit({
      value: this._count,
      type: MinusPlusButtonComponent.EVENT_TYPES.PLUS
    });
  }

  minusClickHandler(): void {
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
    return(
      <div>
        <p>{this.desc}</p>
        <div>
          <button class="button" onClick={() => this.minusClickHandler()}>-</button>
          <button onClick={() => this.plusClickHandler()}>+</button>
        </div>
      </div>
    );
  }

  private _isMinReached(): boolean {
    if (this.min !== undefined) {
      return this.min <= this._count;
    }

    return true;
  }

  private _isMaxReached(): boolean {
    if (this.max !== undefined) {
      return this._count >= this.max;
    }

    return true;
  }
}

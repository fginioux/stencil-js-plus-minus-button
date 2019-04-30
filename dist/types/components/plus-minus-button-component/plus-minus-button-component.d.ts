import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class MinusPlusButtonComponent {
    static EVENT_TYPES: any;
    private _count;
    desc: string;
    min: number;
    max: number;
    border: number;
    host: HTMLElement;
    onChanged: EventEmitter;
    getCount(): Promise<number>;
    plusClickHandler(): void;
    minusClickHandler(): void;
    componentDidLoad(): void;
    render(): JSX.Element;
    private _isMinReached;
    private _isMaxReached;
}

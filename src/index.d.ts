import {Component} from 'react';

export interface IMathProps {
    children?: string,
    errorColor?: string,
    math?: string,
    renderError?(error: Error): void;
}

export class BlockMath extends Component<IMathProps>{}

export class InlineMath extends Component<IMathProps>{}
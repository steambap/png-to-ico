/// <reference types="node" />

export interface PngToIcoOptions {
	interpolation?: any;
}

declare function pngToIco(filepath: string | Buffer | any[], options?: PngToIcoOptions): Promise<Buffer>;

export function imagesToIco(images: any[]): Buffer;

export default pngToIco;

/// <reference types="node" />

export type PngToIcoInterpolation =
	| "nearestNeighbor"
	| "bilinearInterpolation"
	| "bicubicInterpolation"
	| "hermiteInterpolation"
	| "bezierInterpolation";

export interface PngToIcoOptions {
	interpolation?: PngToIcoInterpolation;
}

declare function pngToIco(filepath: string | Buffer | any[], options?: PngToIcoOptions): Promise<Buffer>;

export function imagesToIco(images: any[]): Buffer;

export default pngToIco;

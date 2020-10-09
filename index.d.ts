/// <reference types="node" />

declare module "png-to-ico" {
	const constructor: (filename: string | Buffer | any[]) => Promise<Buffer>;
	export = constructor;
}

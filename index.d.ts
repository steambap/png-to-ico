/// <reference types="node" />

declare module "png-to-ico" {
	const constructor: (filename: string | Buffer) => Promise<Buffer>;
	export = constructor;
}

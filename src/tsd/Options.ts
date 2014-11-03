/// <reference path="../xm/assertVar.ts" />
/// <reference path="../xm/typeOf.ts" />

module tsd {
	'use strict';
	/*
	 Options: bundles options
	 */
	export class Options {

		minMatches:number = 0;
		maxMatches:number = 0;
		limitApi:number = 5;

		resolveDependencies:boolean = false;
		overwriteFiles:boolean = false;
		saveToConfig:boolean = false;
		saveBundle:boolean = false;
		addToBundles:string[] = [];

		// TODO implement timeout (limitless powerr!)
		timeout:number = 10000;

		static fromJSON(json:Object):tsd.Options {
			var opts = new Options();
			if (json) {
				Object.keys(opts).forEach((key:string) => {
					if (key in json) {
						xm.assertVar(json[key], xm.typeOf(opts[key]), 'json[' + key + ']');
						opts[key] = json[key];
					}
				});
			}
			return opts;
		}

		static main = Object.freeze(new Options());
	}
}

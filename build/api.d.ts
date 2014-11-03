/// <reference path="../src/_ref.d.ts" />
/// <reference path="../typings/fixes.d.ts" />
/// <reference path="../src/xm/_ref.d.ts" />
/// <reference path="../typings/miniwrite/miniwrite.d.ts" />
/// <reference path="../typings/ministyle/ministyle.d.ts" />
/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../src/git/_ref.d.ts" />
declare module tsd {
}
declare module xm {
    function typeOf(obj: any): string;
    function toProtoString(obj: any): string;
    function hasOwnProp(obj: any, prop: string): boolean;
    function isType(obj: any, type: string): boolean;
    function isArguments(obj: any): boolean;
    function isArray(obj: any): boolean;
    function isDate(obj: any): boolean;
    function isFunction(obj: any): boolean;
    function isNumber(obj: any): boolean;
    function isRegExp(obj: any): boolean;
    function isString(obj: any): boolean;
    function isNull(obj: any): boolean;
    function isUndefined(obj: any): boolean;
    function isObject(obj: any): boolean;
    function isBoolean(obj: any): boolean;
    function isArrayLike(obj: any): boolean;
    function isOk(obj: any): boolean;
    function isFlagOn(obj: any): boolean;
    function isValid(obj: any): boolean;
    function isJSONValue(obj: any): boolean;
    function isPrimitive(obj: any): boolean;
    function isValueType(obj: any): boolean;
    function getTypeOfMap(add?: any): {};
    function getTypeOfWrap(add?: any): (obj: any, type: string) => boolean;
}
declare module xm {
    function keysOf<K, V>(map: Map<K, V>): K[];
    function valuesOf<K, V>(map: Map<K, V>): V[];
    function toArray<T>(iterator: ArrayIterator<T>): T[];
}
declare module xm {
    module object {
        function hasOwnProp(obj: any, prop: string): boolean;
        function defineProp(object: Object, property: string, settings: any): void;
        function defineProps(object: Object, propertyNames: string[], settings: any): void;
        function hidePrefixed(object: Object, ownOnly?: boolean): void;
        function hideProps(object: Object, props: string[]): void;
        function lockProps(object: Object, props: string[], pub?: boolean, pref?: boolean): void;
        function forceProps(object: Object, props: Object): void;
        function freezeProps(object: Object, props: string[]): void;
        function lockPrimitives(object: Object): void;
        function deepFreeze(object: Object): void;
    }
}
declare module xm {
    var singleQuoteExp: RegExp;
    var doubleQuoteExp: RegExp;
    interface ReplaceCallback {
        (substring: string, ...args: any[]): string;
    }
    function getReplacerFunc(matches: string[], values: string[]): ReplaceCallback;
    interface IReplacer {
        (input: string): string;
    }
    function getEscaper(vars: any): IReplacer;
    function getMultiReplacer(vars: any): IReplacer;
    var unprintCC: IReplacer;
    var unprintNL: IReplacer;
    var unprintNotNL: IReplacer;
    var unprintNLS: IReplacer;
    function quoteSingle(input: string): string;
    function quoteDouble(input: string): string;
    function quoteSingleWrap(input: string): string;
    function quoteDoubleWrap(input: string): string;
    function escapeControl(input: string, reAddNewlines?: boolean): string;
    function wrapQuotes(input: string, double?: boolean): string;
    function wrapIfComplex(input: string, double?: boolean): string;
    function trim(value: string, cutoff?: number): string;
    function trimWrap(value: string, cutoff?: number, double?: boolean): string;
    function escapeSimple(str: string): string;
    function escapeHTML(html: string): string;
}
interface Function {
    name: string;
}
declare module xm {
    function getFuncLabel(func: any): string;
    function toValueStrim(obj: any, depth?: number, cutoff?: number): string;
}
declare module xm {
    function isSha(value: any): boolean;
    function isShaShort(value: any): boolean;
    function isMd5(value: any): boolean;
    function assert(pass: boolean, message: string, actual?: any, expected?: any, showDiff?: boolean, ssf?: any): void;
    function throwAssert(message: string, actual?: any, expected?: any, showDiff?: boolean, ssf?: any): void;
    function assertVar(value: any, type: any, label: string, opt?: boolean): void;
}
declare module xm {
    class StyledOut {
        private _style;
        private _line;
        private _tabSize;
        nibs: {
            arrow: string;
            double: string;
            single: string;
            bullet: string;
            edge: string;
            ruler: string;
            shell: string;
            dash: string;
            decl: string;
            none: string;
        };
        constructor(write?: MiniWrite.Line, style?: MiniStyle.Style);
        write(str: any): StyledOut;
        line(str?: any): StyledOut;
        ln(): StyledOut;
        span(str: any): StyledOut;
        block(str: any): StyledOut;
        clear(): StyledOut;
        ruler(levels?: number): StyledOut;
        heading(str: any, level?: number): StyledOut;
        plain(str: any): StyledOut;
        accent(str: any): StyledOut;
        muted(str: any): StyledOut;
        space(): StyledOut;
        sp(): StyledOut;
        success(str: any): StyledOut;
        warning(str: any): StyledOut;
        error(str: any): StyledOut;
        cond(condition: boolean, str: any, alt?: any): StyledOut;
        alt(str: any, alt: any): StyledOut;
        inspect(value: any, depth?: number, showHidden?: boolean): StyledOut;
        stringWrap(str: string): StyledOut;
        glue(out: StyledOut): StyledOut;
        swap(out: StyledOut): StyledOut;
        label(label: string): StyledOut;
        indent(levels?: number): StyledOut;
        bullet(accent?: boolean): StyledOut;
        index(num: any): StyledOut;
        info(accent?: boolean): StyledOut;
        report(accent?: boolean): StyledOut;
        note(accent?: boolean): StyledOut;
        shell(accent?: boolean): StyledOut;
        dash(accent?: boolean): StyledOut;
        edge(accent?: boolean): StyledOut;
        tweakURI(str: string, trimHttp?: boolean, wrapAngles?: boolean): StyledOut;
        tweakPath(str: string, muted?: boolean): StyledOut;
        tweakPunc(str: string, muted?: boolean): StyledOut;
        tweakBraces(str: string, muted?: boolean): StyledOut;
        tweakExp(str: string, expr: RegExp, muted?: boolean): StyledOut;
        unfunk(): StyledOut;
        finalise(): void;
        useStyle(mini: MiniStyle.Style): StyledOut;
        useWrite(mini: MiniWrite.Line): StyledOut;
        getWrite(): MiniWrite.Chars;
        getStyle(): MiniStyle.Style;
    }
}
declare module xm {
    var consoleOut: StyledOut;
    var log: Logger;
    interface Logger {
        (...args: any[]): void;
        ok(...args: any[]): void;
        log(...args: any[]): void;
        warn(...args: any[]): void;
        error(...args: any[]): void;
        debug(...args: any[]): void;
        status(...args: any[]): void;
        level(level: string, ...args: any[]): void;
        inspect(value: any, depth?: number, label?: string): void;
        json(value: any): void;
        enabled: boolean;
        out: StyledOut;
    }
    class LogLevel {
        static ok: string;
        static log: string;
        static warn: string;
        static error: string;
        static debug: string;
        static status: string;
    }
    function getLogger(label?: string): Logger;
}
declare module tsd {
    var Const: {
        rc: string;
        ident: string;
        configFile: string;
        typingsDir: string;
        cacheDir: string;
        bundleFile: string;
        settings: string;
        configVersion: string;
        configSchemaFile: string;
        definitelyRepo: string;
        mainBranch: string;
        statsDefault: boolean;
        shaShorten: number;
    };
}
declare module tsd {
    function shaShort(sha: string): string;
}
declare module xm {
    module file {
        function distributeDir(base: string, name: string, levels: number, chunk?: number): string;
        function parseJson(text: string): any;
        function readJSONSync(src: string): any;
        function readJSON(src: string, callback: (err: Error, res: any) => void): void;
        function readJSONPromise(src: string): Q.Promise<any>;
        function writeJSONSync(dest: string, data: any): void;
        function writeJSONPromise(dest: string, data: any): Q.Promise<void>;
        function readFileSync(dest: string, encoding?: string): any;
        function writeFileSync(dest: string, data: any, encoding?: string): void;
        function mkdirCheckSync(dir: string, writable?: boolean, testWritable?: boolean): string;
        function mkdirCheckQ(dir: string, writable?: boolean, testWritable?: boolean): Q.Promise<string>;
        function canWriteFile(targetPath: string, overwrite: boolean): Q.Promise<any>;
        function removeFile(target: string): Q.Promise<void>;
        function touchFile(src: string, atime?: Date, mtime?: Date): Q.Promise<void>;
        function findup(dir: string, name: string): Q.Promise<string>;
    }
}
declare module xm {
    function eachElem(collection: any[], callback: (value: any, index: number, collection: any[]) => void, thisArg?: any): void;
    function eachProp(collection: any, callback: (value: any, prop: string, collection: Object) => void, thisArg?: any): void;
    function reduceArray(collection: any[], memo: any, callback: (memo: any, value: any, index: number, collection: any[]) => void, thisArg?: any): any;
    function reduceHash(collection: any, memo: any, callback: (memo: any, value: any, prop: string, collection: Object) => void, thisArg?: any): any;
    function mapArray(collection: any[], callback: (value: any, index: number, collection: any[]) => void, thisArg?: any): any[];
    function mapHash(collection: any, callback: (value: any, prop: string, collection: Object) => void, thisArg?: any): any;
    function filterArray(collection: any[], callback: (value: any, index: number, collection: any[]) => boolean, thisArg?: any): any[];
    function filterHash(collection: any, callback: (value: any, prop: string, collection: Object) => boolean, thisArg?: any): any;
}
declare module xm {
    class PackageJSON {
        path: string;
        private _pkg;
        private static _localPath;
        private static _local;
        constructor(pkg: any, path?: string);
        raw: any;
        name: string;
        description: string;
        version: string;
        getNameVersion(): string;
        getKey(): string;
        getHomepage(short?: boolean): string;
        static find(): string;
        static getLocal(): PackageJSON;
    }
}
declare module xm {
    class JSONPointer {
        objects: Object[];
        prefix: string;
        constructor(object?: Object, prefix?: string);
        hasValue(path: string): boolean;
        getValue(path: string, alt?: any): any;
        addSource(object: Object): any;
        setValue(path: string, value?: any): void;
        getChild(path: string, alt?: any): JSONPointer;
        getNumber(path: string, alt?: number): number;
        getBoolean(path: string, alt?: boolean): boolean;
        getString(path: string, alt?: string): string;
        getDate(path: string, alt?: Date): Date;
        getDurationSecs(path: string, alt?: number): number;
    }
}
declare module xm {
    class JSONStabilizer {
        depth: number;
        style: CodeStyle;
        keys: string[];
        parent: JSONStabilizer;
        children: Map<string, JSONStabilizer>;
        constructor(depth?: number, style?: CodeStyle);
        root: JSONStabilizer;
        parseString(jsonString: string): Object;
        sniff(jsonString: string): void;
        snapshot(object: Object): void;
        getStablized(json: Object): Object;
        toJSONString(json: Object, assumeStable?: boolean): string;
    }
    class CodeStyle {
        eol: string;
        indent: string;
        trailingEOL: boolean;
        clone(): CodeStyle;
    }
    class JSONStabilizerMap {
        depth: number;
        style: CodeStyle;
        map: WeakMap<Object, JSONStabilizer>;
        constructor(depth?: number, style?: CodeStyle);
        parseString(jsonString: string): Object;
        associate(object: Object, snapshotNow?: boolean): JSONStabilizer;
        toJSONString(object: Object): string;
    }
}
declare module tsd {
    class Def {
        static nameExp: RegExp;
        static nameExpEnd: RegExp;
        static versionEnd: RegExp;
        static twoNums: RegExp;
        path: string;
        project: string;
        name: string;
        semver: string;
        head: DefVersion;
        history: DefVersion[];
        constructor(path: string);
        toString(): string;
        pathTerm: string;
        static getPathExp(trim: boolean): RegExp;
        static getFileFrom(path: string): string;
        static isDefPath(path: string, trim?: boolean): boolean;
        static getFrom(path: string, trim?: boolean): Def;
    }
}
declare module xm {
    class AuthorInfo {
        name: string;
        url: string;
        email: string;
        constructor(name?: string, url?: string, email?: string);
        toString(): string;
        toJSON(): any;
    }
}
declare module tsd {
    class DefInfo {
        name: string;
        version: string;
        description: string;
        projectUrl: string;
        authors: xm.AuthorInfo[];
        reposUrl: string;
        references: string[];
        constructor();
        resetFields(): void;
        resetAll(): void;
        toString(): string;
        isValid(): boolean;
    }
}
declare module git {
    module GitUtil {
        function decodeBlobJson(blobJSON: any): NodeBuffer;
        function blobShaHex(data: NodeBuffer): string;
    }
}
declare module tsd {
    class DefBlob {
        sha: string;
        content: NodeBuffer;
        encoding: string;
        constructor(sha: string, content?: any, encoding?: string);
        hasContent(): boolean;
        setContent(content: NodeBuffer, encoding?: string): void;
        shaShort: string;
        toString(): string;
    }
}
declare module tsd {
    class DefVersion {
        private _def;
        private _commit;
        private _blob;
        dependencies: Def[];
        solved: boolean;
        info: DefInfo;
        constructor(def: Def, commit: DefCommit);
        setContent(blob: DefBlob): void;
        hasContent(): boolean;
        key: string;
        def: Def;
        commit: DefCommit;
        blob: DefBlob;
        blobShaShort: string;
        toString(): string;
    }
}
declare module tsd {
    class InstalledDef {
        path: string;
        commitSha: string;
        constructor(path: string);
        update(file: DefVersion): void;
        toString(): string;
    }
    class Config implements git.GithubRepoConfig {
        path: string;
        version: string;
        repo: string;
        ref: string;
        stats: boolean;
        bundle: string;
        private _installed;
        private _schema;
        private _stable;
        log: xm.Logger;
        constructor(schema: any);
        reset(): void;
        resolveTypingsPath(relativeToDir: string): string;
        repoOwner: string;
        repoProject: string;
        repoRef: string;
        schema: any;
        addFile(file: DefVersion): void;
        hasFile(filePath: string): boolean;
        getFile(filePath: string): InstalledDef;
        removeFile(filePath: string): void;
        getInstalled(): InstalledDef[];
        getInstalledPaths(): string[];
        toJSON(): any;
        toJSONString(): string;
        parseJSONString(input: string, label?: string, log?: boolean): any;
        parseJSON(json: any, label?: string, log?: boolean): any;
        validateJSON(json: any, schema: any, label?: string, log?: boolean): any;
    }
}
declare module tsd {
    class Paths {
        configFile: string;
        cacheDir: string;
        startCwd: string;
        constructor();
        static getCacheDirName(): string;
        static getUserHome(): string;
        static getUserRoot(): string;
        static getUserCacheDir(): string;
    }
}
declare module tsd {
    class Context {
        paths: Paths;
        config: Config;
        packageInfo: xm.PackageJSON;
        verbose: boolean;
        settings: xm.JSONPointer;
        configSchema: any;
        constructor(configFile?: string, verbose?: boolean);
        stackSettings(src: string): void;
        getTypingsDir(): string;
        getInfo(details?: boolean): Object;
    }
}
declare module xm {
    class RegExpGlue {
        parts: any[];
        constructor(...exp: any[]);
        static get(...exp: any[]): RegExpGlue;
        static escapeChars(str: string): string;
        append(...exp: any[]): RegExpGlue;
        getBody(exp: RegExp): string;
        getFlags(exp: RegExp): string;
        getCleanFlags(flags: String): string;
        join(flags?: string, seperator?: RegExp): RegExp;
    }
}
declare module tsd {
    class NameMatcher {
        pattern: string;
        private projectExp;
        private nameExp;
        constructor(pattern: string);
        filter(list: Def[], current: Def[]): Def[];
        toString(): string;
        private compile();
        private compileSingle();
        private compileSplit();
        private getFilterFunc(current);
    }
}
declare module tsd {
    class InfoMatcher {
        filter(list: DefVersion[]): DefVersion[];
    }
}
declare module xm {
    module date {
        function getISOString(input: any): string;
        function toNiceUTC(date: Date): string;
        function isBeforeDate(actual: Date, base: Date): boolean;
        function isAfterDate(actual: Date, base: Date): boolean;
        function isEqualDate(actual: Date, base: Date): boolean;
        function compare(date1: Date, date2: Date): number;
    }
}
declare module tsd {
    class DateComp {
        operator: string;
        comparator: (date1: Date, date2: Date) => boolean;
        date: Date;
        satisfies(date: Date): boolean;
    }
    class DateMatcher {
        comparators: DateComp[];
        constructor(pattern?: string);
        filter(list: DefVersion[]): DefVersion[];
        best(list: DefVersion[]): DefVersion;
        latest(list: DefVersion[]): DefVersion;
        extractSelector(pattern: string): void;
        private getFilterFunc();
    }
}
declare module tsd {
    class VersionMatcher {
        static latest: string;
        static all: string;
        range: string;
        constructor(range: string);
        filter(list: Def[]): Def[];
        private getLatest(list);
    }
}
declare module tsd {
    class CommitMatcher {
        commitSha: string;
        minimumShaLen: number;
        constructor(commitSha?: string);
        filter(list: DefVersion[]): DefVersion[];
        getFilterFunc(commitSha: string): (file: DefVersion) => boolean;
    }
}
declare module tsd {
    class Query {
        patterns: NameMatcher[];
        versionMatcher: VersionMatcher;
        dateMatcher: DateMatcher;
        infoMatcher: InfoMatcher;
        commitMatcher: CommitMatcher;
        parseInfo: boolean;
        loadHistory: boolean;
        constructor(pattern?: string);
        addNamePattern(pattern: string): void;
        requiresSource: boolean;
        requiresHistory: boolean;
        toString(): string;
    }
}
declare module xm {
    interface URLTemplateParser {
        (template: string): URLTemplate;
    }
    interface URLTemplate {
        fillFromObject(vars: any): string;
        fill(callback: (varName: string) => string): string;
        fromUri(uri: string): any;
    }
    class URLManager {
        private _templates;
        private _vars;
        constructor(common?: any);
        addTemplate(id: string, url: string): void;
        setVar(id: string, value: any): void;
        getVar(id: string): string;
        setVars(map: any): void;
        getTemplate(id: string): URLTemplate;
        getURL(id: string, vars?: any): string;
    }
}
declare module git {
    class GithubURLs extends xm.URLManager {
        private _base;
        private _apiBase;
        private _api;
        private _raw;
        private _repo;
        constructor(repo: GithubRepo);
        getURL(id: string, vars?: any): string;
        api(): string;
        base(): string;
        raw(): string;
        rawFile(ref: string, path: string): string;
        htmlFile(ref: string, path: string): string;
        apiBranches(): string;
        apiBranch(name: string): string;
        apiTree(tree: string, recursive?: any): string;
        apiPathCommits(path: string): string;
        apiCommit(commit: string, recursive?: any): string;
        apiBlob(sha: string): string;
        rateLimit(): string;
    }
}
declare module git {
    interface GithubRepoConfig {
        repoOwner: string;
        repoProject: string;
    }
}
declare module xm {
    class ActionMap<T> {
        private _map;
        constructor(data?: any);
        run(id: string, call: (value: T) => any, optional?: boolean): Q.Promise<T>;
        runSerial(ids: string[], call: (value: T) => any, optional?: boolean): Q.Promise<T>;
        has(key: string): boolean;
        get(key: string): T;
        set(key: string, value: T): Map<string, T>;
    }
    class PromiseHandle<T> {
        promise: Q.Promise<T>;
        defer: Q.Deferred<T>;
        constructor(defer?: Q.Deferred<T>, promise?: Q.Promise<T>);
    }
    class PromiseStash<T> {
        private _stash;
        constructor();
        has(key: string): boolean;
        promise(key: string): Q.Promise<T>;
        defer(key: string): Q.Deferred<T>;
        remove(key: string): void;
    }
}
declare module xm {
    class StatCounter {
        stats: {
            [x: string]: number;
        };
        log: Logger;
        constructor(log?: Logger);
        count(id: string, label?: string): number;
        get(id: string): number;
        has(id: string): boolean;
        zero(): void;
        total(): number;
        counterNames(): string[];
        hasAllZero(): boolean;
        clear(): void;
        getReport(label?: string): string;
        getObject(): any;
    }
}
declare module xm {
    function valueMap(data: any): any;
    var EventLevel: {
        start: string;
        complete: string;
        failure: string;
        skip: string;
        share: string;
        event: string;
        error: string;
        warning: string;
        success: string;
        status: string;
        promise: string;
        resolve: string;
        reject: string;
        notify: string;
        debug: string;
        log: string;
    };
    var startTime: number;
    class EventLog {
        private _items;
        private _label;
        private _prefix;
        private _startAt;
        logger: Logger;
        logEnabled: boolean;
        private _trackEnabled;
        private _trackLimit;
        private _trackPrune;
        private _mutePromises;
        constructor(prefix?: string, label?: string, logger?: Logger);
        promise(promise: Q.Promise<any>, type: string, message?: string, data?: any): EventLogItem;
        start(type: string, message?: string, data?: any): EventLogItem;
        complete(type: string, message?: string, data?: any): EventLogItem;
        failure(type: string, message?: string, data?: any): EventLogItem;
        event(type: string, message?: string, data?: any): EventLogItem;
        skip(type: string, message?: string, data?: any): EventLogItem;
        share(type: string, message?: string, data?: any): EventLogItem;
        error(type: string, message?: string, data?: any): EventLogItem;
        warning(type: string, message?: string, data?: any): EventLogItem;
        success(type: string, message?: string, data?: any): EventLogItem;
        status(type: string, message?: string, data?: any): EventLogItem;
        log(type: string, message?: string, data?: any): EventLogItem;
        debug(type: string, message?: string, data?: any): EventLogItem;
        track(action: string, type: string, message?: string, data?: any, group?: any): EventLogItem;
        trim(all?: boolean): void;
        reset(): void;
        isMuted(action: string): boolean;
        muteActions(actions: string[]): void;
        unmuteActions(actions?: string[]): void;
        unmuteAll(): void;
        setTrack(enabled: boolean, limit?: number, prune?: number): void;
        getItemString(item: EventLogItem, multiline?: boolean): string;
        getHistory(): string;
        getStats(): StatCounter;
        getItems(): EventLogItem[];
        getReport(label?: string): string;
    }
    class EventLogItem {
        type: string;
        action: string;
        message: string;
        data: any;
        index: number;
        time: number;
        group: any;
        constructor();
        toString(): string;
    }
}
declare module xm {
    function md5(data: any): string;
    function sha1(data: any): string;
    function sha1Short(data: any, length?: number): string;
    function hashNormalines(input: string): string;
    function jsonToIdent(obj: any): string;
    function jsonToIdentHash(obj: any, length?: number): string;
}
declare module xm {
    interface IContentKoder<T> {
        decode(content: NodeBuffer): Q.Promise<T>;
        encode(value: T): Q.Promise<NodeBuffer>;
    }
    class StringKoder implements IContentKoder<string> {
        encoding: string;
        constructor(encoding?: string);
        decode(content: NodeBuffer): Q.Promise<string>;
        encode(value: string): Q.Promise<NodeBuffer>;
        static utf8: StringKoder;
    }
    class ByteKoder implements IContentKoder<NodeBuffer> {
        decode(content: NodeBuffer): Q.Promise<NodeBuffer>;
        encode(value: NodeBuffer): Q.Promise<NodeBuffer>;
        static main: ByteKoder;
    }
    class JSONKoder<T> implements IContentKoder<T> {
        schema: any;
        constructor(schema?: Object);
        decode(content: NodeBuffer): Q.Promise<T>;
        assert(value: T): void;
        encode(value: T): Q.Promise<NodeBuffer>;
        static main: JSONKoder<any>;
    }
}
declare module xm {
    interface Notification {
        code: string;
        message: string;
        data: any;
    }
    function getNote(message: string, code?: any, data?: any): Notification;
}
declare module xm {
    module http {
        enum CacheMode {
            forceLocal = 1,
            forceRemote = 2,
            forceUpdate = 3,
            allowRemote = 4,
            allowUpdate = 5,
        }
        class CacheOpts {
            compressStore: boolean;
            splitDirLevel: number;
            splitDirChunk: number;
            cacheRead: boolean;
            cacheWrite: boolean;
            remoteRead: boolean;
            allowClean: boolean;
            cacheCleanInterval: number;
            jobTimeout: number;
            constructor(mode?: CacheMode);
            applyCacheMode(mode: CacheMode): void;
        }
    }
}
declare module xm {
    module http {
        class CacheStreamLoader {
            static get_object: string;
            static info_read: string;
            static cache_read: string;
            static cache_write: string;
            static cache_remove: string;
            static http_load: string;
            static http_error: string;
            static local_info_bad: string;
            static local_info_empty: string;
            static local_info_malformed: string;
            static local_body_bad: string;
            static local_body_empty: string;
            static local_cache_hit: string;
            static http_cache_hit: string;
            cache: HTTPCache;
            request: CacheRequest;
            object: CacheObject;
            infoCacheValidator: IObjectValidator;
            bodyCacheValidator: IObjectValidator;
            track: EventLog;
            private _defer;
            constructor(cache: HTTPCache, request: CacheRequest);
            destruct(): void;
            private canUpdate();
            getObject(): Q.Promise<CacheObject>;
            private cacheRead();
            private httpLoad(httpCache?);
            private cacheWrite(cacheWasFresh);
            private checkExists(file, label);
            private cacheRemove();
            private cacheTouch();
            private copyInfo(res, checksum);
            private updateInfo(res, checksum);
            private readInfo();
            toString(): string;
        }
    }
}
declare module xm {
    function assertJSONSchema(value: any, schema: any): void;
}
declare module xm {
    module http {
        class CacheRequest {
            key: string;
            locked: boolean;
            url: string;
            headers: any;
            localMaxAge: number;
            httpInterval: number;
            forceRefresh: boolean;
            static lockProps: string[];
            static keyHeaders: string[];
            constructor(url: string, headers?: any);
            lock(): CacheRequest;
        }
        class CacheObject {
            request: CacheRequest;
            storeDir: string;
            infoFile: string;
            info: CacheInfo;
            response: ResponseInfo;
            bodyFile: string;
            bodyChecksum: string;
            body: NodeBuffer;
            constructor(request: CacheRequest);
        }
        class ResponseInfo {
            status: number;
            headers: any;
        }
        interface CacheInfo {
            url: string;
            key: string;
            contentType: string;
            httpETag: string;
            httpModified: string;
            cacheCreated: string;
            cacheUpdated: string;
            contentChecksum: string;
        }
        interface IObjectValidator {
            assert(object: CacheObject): void;
        }
        class SimpleValidator implements IObjectValidator {
            assert(object: CacheObject): void;
            static main: SimpleValidator;
        }
        class CacheValidator implements IObjectValidator {
            schema: any;
            constructor(schema: any);
            assert(object: CacheObject): void;
        }
        class CacheAgeValidator implements IObjectValidator {
            schema: any;
            maxAgeMili: number;
            constructor(schema: any, maxAgeMili?: number);
            assert(object: CacheObject): void;
        }
        class ChecksumValidator implements IObjectValidator {
            assert(object: CacheObject): void;
        }
    }
}
declare module xm {
    module http {
        interface CacheManage {
            lastSweep: string;
        }
        class HTTPCache {
            static get_object: string;
            static drop_job: string;
            static cache_clean: string;
            static check_cache_clean: string;
            static clean_cache_age: string;
            static dir_create: string;
            static dir_exists: string;
            static dir_error: string;
            static ignore_error: string;
            storeDir: string;
            opts: CacheOpts;
            track: EventLog;
            infoKoder: IContentKoder<CacheInfo>;
            infoSchema: any;
            proxy: string;
            private jobs;
            private jobTimers;
            private _init;
            private manageFile;
            private manageKoder;
            private manageSchema;
            private cacheSweepLast;
            constructor(storeDir: string, opts?: CacheOpts);
            setStoreDir(dir: string): void;
            getObject(request: CacheRequest): Q.Promise<CacheObject>;
            private scheduleRelease(key);
            private init();
            checkCleanCache(): Q.Promise<void>;
            cleanupCacheAge(maxAge: number): Q.Promise<void>;
            verbose: boolean;
        }
    }
}
declare module git {
    class GithubLoader {
        repo: GithubRepo;
        track: xm.EventLog;
        cache: xm.http.HTTPCache;
        options: xm.JSONPointer;
        storeDir: string;
        label: string;
        formatVersion: string;
        headers: {};
        constructor(repo: GithubRepo, options: xm.JSONPointer, storeDir: string, prefix: string, label: string);
        _initGithubLoader(lock?: string[]): void;
        getCacheKey(): string;
        copyHeadersTo(target: any, source?: any): void;
        verbose: boolean;
    }
}
declare module git {
    class GitRateInfo {
        limit: number;
        remaining: number;
        reset: number;
        resetAt: string;
        lastUpdate: number;
        constructor(map?: any);
        readFromRes(map: any): void;
        toString(): string;
        getResetString(): string;
        getTimeToReset(): number;
        getMinutesToReset(): number;
        isBlocked(): boolean;
        isLimited(): boolean;
        hasRemaining(): boolean;
    }
}
declare module git {
    class GithubAPI extends GithubLoader {
        static get_cachable: string;
        static get_rate: string;
        private apiVersion;
        constructor(repo: GithubRepo, options: xm.JSONPointer, storeDir: string);
        getBranches(): Q.Promise<any>;
        getBranch(branch: string): Q.Promise<any>;
        getTree(sha: string, recursive: boolean): Q.Promise<any>;
        getCommit(sha: string): Q.Promise<any>;
        getBlob(sha: string): Q.Promise<any>;
        getPathCommits(path: string): Q.Promise<any>;
        getCachableURL(url: string): Q.Promise<any>;
        getCachable(request: xm.http.CacheRequest, addMeta: boolean): Q.Promise<any>;
        getRateInfo(): Q.Promise<GitRateInfo>;
        getCacheKey(): string;
    }
}
declare module git {
    class GithubRaw extends GithubLoader {
        static get_file: string;
        constructor(repo: GithubRepo, options: xm.JSONPointer, storeDir: string);
        getText(ref: string, filePath: string): Q.Promise<string>;
        getJSON(ref: string, filePath: string): Q.Promise<any>;
        getBinary(ref: string, filePath: string): Q.Promise<NodeBuffer>;
        getFile<T>(ref: string, filePath: string, koder: xm.IContentKoder<T>): Q.Promise<T>;
        getCacheKey(): string;
    }
}
declare module git {
    class GithubRepo {
        config: GithubRepoConfig;
        storeDir: string;
        urls: GithubURLs;
        api: GithubAPI;
        raw: GithubRaw;
        constructor(config: GithubRepoConfig, storeDir: string, opts: xm.JSONPointer);
        getCacheKey(): string;
        toString(): string;
        verbose: boolean;
    }
}
declare module tsd {
    class Options {
        minMatches: number;
        maxMatches: number;
        limitApi: number;
        resolveDependencies: boolean;
        overwriteFiles: boolean;
        saveToConfig: boolean;
        saveBundle: boolean;
        addToBundles: string[];
        timeout: number;
        static fromJSON(json: Object): Options;
        static main: any;
    }
}
declare module tsd {
    class SubCore {
        core: Core;
        track: xm.EventLog;
        private _verbose;
        constructor(core: Core, track: string, label: string);
        verbose: boolean;
    }
}
declare module tsd {
    class DefUtil {
        static getDefs(list: DefVersion[]): Def[];
        static getHeads(list: Def[]): DefVersion[];
        static getHistoryTop(list: Def[]): DefVersion[];
        static getHistoryBottom(list: Def[]): DefVersion[];
        static getLatest(list: DefVersion[]): DefVersion;
        static getRecent(list: DefVersion[]): DefVersion;
        static getPaths(list: Def[]): string[];
        static getPathsOf(list: DefVersion[]): string[];
        static uniqueDefVersion(list: DefVersion[]): DefVersion[];
        static uniqueDefs(list: Def[]): Def[];
        static extractReferenceTags(source: string): string[];
        static contains(list: DefVersion[], file: DefVersion): boolean;
        static containsDef(list: Def[], def: Def): boolean;
        static mergeDependencies(list: DefVersion[], target?: DefVersion[]): DefVersion[];
        static mergeDependenciesOf(list: Def[], target?: DefVersion[]): DefVersion[];
        static matchCommit(list: DefVersion[], commitSha: string): DefVersion[];
        static haveContent(list: DefVersion[]): DefVersion[];
        static fileCompare(aa: DefVersion, bb: DefVersion): number;
        static defCompare(aa: Def, bb: Def): number;
        static fileCommitCompare(aa: DefVersion, bb: DefVersion): number;
    }
}
declare module tsd {
    class Resolver extends SubCore {
        static active: string;
        static solved: string;
        static remove: string;
        static bulk: string;
        static resolve: string;
        static parse: string;
        static subload: string;
        static dep_recurse: string;
        static dep_added: string;
        static dep_missing: string;
        private _stash;
        constructor(core: Core);
        resolveBulk(list: DefVersion[]): Q.Promise<DefVersion[]>;
        resolveDeps(file: DefVersion): Q.Promise<DefVersion>;
        applyResolution(index: DefIndex, file: DefVersion, content: string): Q.Promise<DefVersion>[];
        extractPaths(file: DefVersion, content: string): string[];
    }
}
declare module git {
    interface GithubJSONTreeElem {
        mode: string;
        type: string;
        sha: string;
        path: string;
        size: number;
        url: string;
    }
    interface GithubJSONCommit {
        mode: string;
        type: string;
        sha: string;
        path: string;
        size: number;
        url: string;
    }
}
declare module git {
    class GitUserCommit {
        name: string;
        email: string;
        date: Date;
        toString(): string;
        static fromJSON(json: any): GitUserCommit;
    }
}
declare module git {
    class GithubUser {
        id: number;
        login: string;
        avatar_url: string;
        toString(): string;
        static fromJSON(json: any): GithubUser;
    }
}
declare module git {
    class GitCommitMessage {
        text: string;
        subject: string;
        body: string;
        constructor(text?: string);
        parse(text: string): void;
        toString(): string;
    }
}
declare module tsd {
    class DefCommit {
        commitSha: string;
        hasMeta: boolean;
        message: git.GitCommitMessage;
        hubAuthor: git.GithubUser;
        hubCommitter: git.GithubUser;
        gitAuthor: git.GitUserCommit;
        gitCommitter: git.GitUserCommit;
        constructor(commitSha: string);
        parseJSON(commit: any): void;
        hasMetaData(): boolean;
        toString(): string;
        changeDate: Date;
        commitShort: string;
    }
}
declare module tsd {
    class DefIndex {
        private _branchName;
        private _hasIndex;
        private _indexCommit;
        private _definitions;
        private _commits;
        private _blobs;
        private _versions;
        constructor();
        hasIndex(): boolean;
        init(branch: any, tree: any): void;
        setHistory(def: Def, commitJsonArray: any[]): void;
        procureCommit(commitSha: string): DefCommit;
        procureBlob(blobSha: string): DefBlob;
        procureBlobFor(content: NodeBuffer): DefBlob;
        procureDef(path: string): Def;
        procureVersion(def: Def, commit: DefCommit): DefVersion;
        procureVersionFromSha(path: string, commitSha: string): DefVersion;
        getDef(path: string): Def;
        hasDef(path: string): boolean;
        getBlob(sha: string): DefBlob;
        hasBlob(sha: string): boolean;
        getCommit(sha: string): DefCommit;
        hasCommit(sha: string): boolean;
        getPaths(): string[];
        toDump(): string;
        branchName: string;
        list: Def[];
        indexCommit: DefCommit;
        toString(): string;
    }
}
declare module tsd {
    class IndexManager extends SubCore {
        static init: string;
        static tree_get: string;
        static branch_get: string;
        static procure_def: string;
        static procure_file: string;
        static procure_commit: string;
        private _defer;
        constructor(core: Core);
        getIndex(): Q.Promise<DefIndex>;
        procureDef(path: string): Q.Promise<Def>;
        procureFile(path: string, commitSha: string): Q.Promise<DefVersion>;
        procureCommit(commitSha: string): Q.Promise<DefCommit>;
        findFile(path: string, commitShaFragment: string): Q.Promise<DefVersion>;
    }
}
declare module tsd {
    class ConfigIO extends SubCore {
        static config_init: string;
        static config_read: string;
        static config_save: string;
        constructor(core: Core);
        initConfig(overwrite: boolean): Q.Promise<string>;
        readConfig(optional?: boolean): Q.Promise<void>;
        saveConfig(target?: string): Q.Promise<string>;
    }
}
declare module tsd {
    class ContentLoader extends SubCore {
        constructor(core: Core);
        loadCommitMetaData(commit: DefCommit): Q.Promise<DefCommit>;
        loadContent(file: DefVersion, tryHead?: boolean): Q.Promise<DefVersion>;
        loadContentBulk(list: DefVersion[]): Q.Promise<DefVersion[]>;
        loadHistory(def: Def): Q.Promise<Def>;
        loadHistoryBulk(list: Def[]): Q.Promise<DefVersion[]>;
    }
}
declare module tsd {
    class Installer extends SubCore {
        constructor(core: Core);
        installFile(file: DefVersion, addToConfig?: boolean, overwrite?: boolean): Q.Promise<string>;
        installFileBulk(list: DefVersion[], addToConfig?: boolean, overwrite?: boolean): Q.Promise<Map<string, DefVersion>>;
        reinstallBulk(list: InstalledDef[], overwrite?: boolean): Q.Promise<Map<string, DefVersion>>;
        useFile(file: DefVersion, overwrite: boolean): Q.Promise<string>;
        useFileBulk(list: DefVersion[], overwrite?: boolean): Q.Promise<Map<string, DefVersion>>;
    }
}
declare module xm {
    class LineParserCore {
        verbose: boolean;
        parsers: Map<string, LineParser>;
        constructor(verbose?: boolean);
        addParser(parser: LineParser): void;
        getInfo(): any;
        getParser(id: string): LineParser;
        private link();
        get(ids: string[]): LineParser[];
        all(): LineParser[];
        listIds(parsers: LineParser[]): string[];
        parse(source: string, asType: string[]): void;
    }
    class LineParser {
        id: string;
        exp: RegExp;
        groupsMin: number;
        callback: (match: LineParserMatch) => void;
        nextIds: string[];
        next: LineParser[];
        constructor(id: string, exp: RegExp, groupsMin: number, callback: (match: LineParserMatch) => void, nextIds?: string[]);
        match(str: string, offset: number, limit: number): LineParserMatch;
        getName(): string;
    }
    class LineParserMatch {
        parser: LineParser;
        match: RegExpExecArray;
        constructor(parser: LineParser, match: RegExpExecArray);
        extract(): void;
        getGroup(num: number, alt?: string): string;
        getGroupFloat(num: number, alt?: number): number;
        getName(): string;
    }
}
declare module tsd {
    class DefInfoParser {
        verbose: boolean;
        parser: xm.LineParserCore;
        constructor(verbose?: boolean);
        parse(data: DefInfo, source: string): void;
    }
}
declare module tsd {
    class InfoParser extends SubCore {
        constructor(core: Core);
        parseDefInfo(file: DefVersion): Q.Promise<DefVersion>;
        parseDefInfoBulk(list: DefVersion[]): Q.Promise<DefVersion[]>;
    }
}
declare module tsd {
    class Selection {
        query: Query;
        definitions: Def[];
        selection: DefVersion[];
        error: any;
        constructor(query?: Query);
    }
}
declare module tsd {
    class SelectorQuery extends SubCore {
        constructor(core: Core);
        select(query: Query, options: Options): Q.Promise<Selection>;
    }
}
declare module tsd {
    class Bundle {
        private head;
        private eol;
        target: string;
        baseDir: string;
        constructor(target: string, baseDir?: string);
        parse(content: string): void;
        has(ref: string): boolean;
        append(ref: string): void;
        remove(ref: string): void;
        toArray(all?: boolean): string[];
        private first(all?);
        private last(all?);
        getContent(): string;
    }
}
declare module tsd {
    class BundleManager extends SubCore {
        static bundle_init: string;
        static bundle_read: string;
        static bundle_save: string;
        static bundle_add: string;
        constructor(core: Core);
        addToBundle(target: string, refs: string[], save: boolean): Q.Promise<Bundle>;
        readBundle(target: string, optional: boolean): Q.Promise<Bundle>;
        saveBundle(bundle: Bundle): Q.Promise<void>;
    }
}
declare module tsd {
    class Core {
        context: Context;
        repo: git.GithubRepo;
        index: IndexManager;
        selector: SelectorQuery;
        config: ConfigIO;
        content: ContentLoader;
        parser: InfoParser;
        installer: Installer;
        resolver: Resolver;
        bundle: BundleManager;
        track: xm.EventLog;
        _components: MultiManager;
        _cacheMode: string;
        constructor(context: Context);
        updateConfig(): void;
        getInstallPath(def: Def): string;
        useCacheMode(modeName: string): void;
        verbose: boolean;
    }
    interface ITrackable {
        track: xm.EventLog;
        verbose: boolean;
    }
    class MultiManager {
        core: Core;
        private _verbose;
        trackables: Set<ITrackable>;
        constructor(core: Core);
        add(list: any[]): void;
        remove(list: any[]): void;
        replace(fields: Object): void;
        verbose: boolean;
    }
}
declare module tsd {
    class InstallResult {
        options: Options;
        written: Map<string, DefVersion>;
        removed: Map<string, DefVersion>;
        skipped: Map<string, DefVersion>;
        constructor(options: Options);
    }
    class CompareResult {
    }
    class API {
        context: Context;
        core: Core;
        track: xm.EventLog;
        constructor(context: Context);
        initConfig(overwrite: boolean): Q.Promise<string>;
        readConfig(optional: boolean): Q.Promise<void>;
        saveConfig(): Q.Promise<string>;
        select(query: Query, options?: Options): Q.Promise<Selection>;
        install(selection: Selection, options?: Options): Q.Promise<InstallResult>;
        private saveBundles(files, options);
        reinstall(options?: Options): Q.Promise<InstallResult>;
        update(options?: Options, version?: string): Q.Promise<InstallResult>;
        getRateInfo(): Q.Promise<git.GitRateInfo>;
        compare(query: Query): Q.Promise<CompareResult>;
        browse(list: DefVersion[]): Q.Promise<string[]>;
        visit(list: DefVersion[]): Q.Promise<string[]>;
        purge(raw: boolean, api: boolean): Q.Promise<void>;
        verbose: boolean;
    }
}
declare module xm {
    var parseStringMap: any;
    function parseStringTo(input: string, type: string): any;
}
declare module xm {
    function exposeSortIndex(one: ExposeCommand, two: ExposeCommand): number;
    function exposeSortHasElem(one: any[], two: any[], elem: any): number;
    function exposeSortId(one: ExposeCommand, two: ExposeCommand): number;
    function exposeSortGroup(one: ExposeGroup, two: ExposeGroup): number;
    function exposeSortOption(one: ExposeOption, two: ExposeOption): number;
    class ExposeLevel {
        static min: number;
        static med: number;
        static max: number;
    }
    class ExposeReporter {
        output: StyledOut;
        expose: Expose;
        constructor(expose: Expose, output?: StyledOut);
        printCommands(level: string): void;
    }
}
declare module xm {
    class ExposeContext {
        expose: Expose;
        command: ExposeCommand;
        argv: any;
        out: StyledOut;
        constructor(expose: Expose, argv: any, command?: ExposeCommand);
        hasOpt(name: string, strict?: boolean): any;
        getOptRaw(name: string, alt?: any): any;
        getOpt(name: string, alt?: any): any;
        getOptAs(name: string, type: string, alt?: any): any;
        getOptNames(strict?: boolean): string[];
        getOptEnum(name: string, alt?: any): any;
        getDefault(name: string, alt?: any): any;
        isDefault(name: string): boolean;
        getArgAt(index: number, alt?: any): any;
        getArgAtAs(index: number, type: string, alt?: any): any;
        getArgsAs(type: string): any[];
        shiftArg(alt?: string): any;
        shiftArgAs(type: string, alt?: string): any;
        getArgs(alt?: string): any;
        numArgs: number;
    }
}
declare module xm {
    interface ExposeHook {
        (ctx: ExposeContext): any;
    }
    interface ExposeHandle {
        (res: ExposeResult): any;
    }
    interface ExposeOptionApply {
        (value: any, ctx: ExposeContext): void;
    }
    interface ExposeResult {
        code: number;
        ctx: ExposeContext;
        error: ExposeError;
    }
    interface ExposeError extends Error {
    }
    interface ExposeSorter {
        (one: ExposeCommand, two: ExposeCommand): number;
    }
    class ExposeCommand {
        name: string;
        execute: ExposeHook;
        index: number;
        label: string;
        hidden: boolean;
        options: string[];
        variadic: string[];
        groups: string[];
        examples: string[][];
        note: string[];
        internal: boolean;
        constructor();
    }
    class ExposeGroup {
        name: string;
        label: string;
        index: number;
        sorter: ExposeSorter;
        options: string[];
        constructor();
    }
    class ExposeOption {
        name: string;
        description: string;
        short: string;
        type: string;
        placeholder: string;
        default: any;
        command: string;
        global: boolean;
        optional: boolean;
        enum: any[];
        note: string[];
        apply: ExposeOptionApply;
    }
    class Expose {
        commands: Map<string, ExposeCommand>;
        options: Map<string, ExposeOption>;
        groups: Map<string, ExposeGroup>;
        mainGroup: ExposeGroup;
        private _isInit;
        private _index;
        reporter: ExposeReporter;
        before: ExposeHook;
        after: ExposeHook;
        end: ExposeHandle;
        constructor(output?: StyledOut);
        defineOption(build: (opt: ExposeOption) => void): void;
        defineCommand(build: (cmd: ExposeCommand) => void): void;
        defineGroup(build: (group: ExposeGroup) => void): void;
        applyOptions(argv: any): ExposeContext;
        init(): void;
        validateOptions(opts: string[]): void;
        exit(code: number): void;
        executeArgv(argvRaw: any, alt?: string, exitAfter?: boolean): void;
        executeRaw(argvRaw: any, alt?: string): Q.Promise<ExposeResult>;
        executeCommand(name: string, ctx?: ExposeContext): Q.Promise<ExposeResult>;
    }
}
declare module tsd {
    module cli {
        class Printer {
            output: xm.StyledOut;
            indent: number;
            skipProgress: RegExp[];
            private _remainingPrev;
            constructor(output: xm.StyledOut, indent?: number);
            fmtSortKey(key: string): string;
            fmtGitURI(str: string): string;
            file(file: DefVersion, sep?: string): xm.StyledOut;
            fileEnd(file: DefVersion, sep?: string): xm.StyledOut;
            fileCommit(file: DefVersion, skipNull?: boolean): xm.StyledOut;
            fileHead(file: DefVersion): xm.StyledOut;
            fileInfo(file: DefVersion, skipNull?: boolean): xm.StyledOut;
            dependencies(file: DefVersion): xm.StyledOut;
            history(file: DefVersion): xm.StyledOut;
            installResult(result: InstallResult): xm.StyledOut;
            rateInfo(info: git.GitRateInfo, note?: boolean, force?: boolean): xm.StyledOut;
            reportError(err: any, head?: boolean): xm.StyledOut;
            reportProgress(obj: any): xm.StyledOut;
        }
    }
}
declare module tsd {
    module cli {
        function runUpdateNotifier(context: Context, promise?: boolean): Q.Promise<any>;
        function showUpdateNotifier(output: xm.StyledOut, context?: Context, promise?: boolean): Q.Promise<void>;
    }
}
declare module tsd {
    module cli {
        class Tracker {
            private _enabled;
            private _debug;
            private _accountID;
            private _client;
            private _context;
            private _minor;
            private _page;
            private _eventQueue;
            private _workers;
            private _workersMax;
            private _workersGrow;
            constructor();
            init(context: Context, enabled?: boolean, debug?: boolean): void;
            getPage(parts?: string[]): string;
            pageview(...parts: string[]): void;
            query(query: Query): void;
            install(action: string, result: InstallResult): void;
            browser(url: string): void;
            visit(url: string): void;
            error(err: any): void;
            sendEvent(event?: any): void;
            private doEvent(event);
            getTimer(variable: string, label?: string): (err?: any) => void;
            client: UniversalAnalytics.Client;
            enabled: boolean;
        }
        function getDummy(): any;
    }
}
declare module tsd {
    module cli {
        class StyleMap {
            outputs: Set<xm.StyledOut>;
            private _styleMap;
            constructor(output: xm.StyledOut);
            addOutput(output: xm.StyledOut): void;
            getKeys(): string[];
            useStyle(color: string, ctx: xm.ExposeContext): void;
        }
    }
}
declare module xm {
    function enumNames(enumer: Object): string[];
}
declare module tsd {
    module cli {
        module Opt {
            var version: string;
            var verbose: string;
            var style: string;
            var dev: string;
            var config: string;
            var cacheDir: string;
            var cacheMode: string;
            var resolve: string;
            var save: string;
            var bundle: string;
            var overwrite: string;
            var min: string;
            var max: string;
            var limit: string;
            var timeout: string;
            var commit: string;
            var semver: string;
            var date: string;
            var progress: string;
            var action: string;
            var info: string;
            var history: string;
            var detail: string;
            var services: string;
        }
        module Group {
            var primary: string;
            var query: string;
            var support: string;
            var help: string;
        }
        module Action {
            var install: string;
            var open: string;
            var browse: string;
            var visit: string;
            var compare: string;
            var update: string;
        }
    }
}
declare module tsd {
    module cli {
        function addCommon(expose: xm.Expose, print: Printer, style: StyleMap): void;
    }
}
declare module tsd {
    class Job {
        ctx: xm.ExposeContext;
        api: API;
        context: Context;
        query: Query;
        options: Options;
    }
    interface JobSelectionAction {
        (ctx: xm.ExposeContext, job: Job, selection: Selection): Q.Promise<any>;
    }
    function getExpose(): xm.Expose;
    function runARGV(argvRaw: any): void;
}
declare module tsd {
    function getAPI(configPath: string, verbose?: boolean): API;
}

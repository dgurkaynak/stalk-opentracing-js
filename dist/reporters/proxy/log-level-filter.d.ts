import BaseReporter from '../base';
import StalkSpan, { ISpanLog } from '../../stalk/span';
import LogFilterProxyReporter from './log-filter';
import { SpanLoggerLogLevel } from '../../opentracing/span-logger';
export declare class LogLevelFilterProxyReporter extends LogFilterProxyReporter {
    private _logLevel;
    constructor(targetReporter: BaseReporter, logLevel: SpanLoggerLogLevel);
    updateLevel(logLevel: SpanLoggerLogLevel): void;
    testSpanLog(span: StalkSpan, log: ISpanLog): boolean;
}
export default LogLevelFilterProxyReporter;
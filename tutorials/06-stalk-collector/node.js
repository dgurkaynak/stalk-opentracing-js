const { opentracing, stalk } = require('../../');
const sleep = (duration) => new Promise(resolve => setTimeout(resolve, duration));

const stalkTracer = new stalk.Tracer();
opentracing.initGlobalTracer(stalkTracer);
const globalTracer = opentracing.globalTracer();

// Let's create a stalk-collector reporter
const stalkCollectorReporter = new stalk.reporters.StalkCollectorReporter({
    stalkCollectorApiRoot: 'http://localhost:7855',
    serviceName: 'my-awesome-service',

    // Optional process tags
    tags: {
        tag1: 'value1',
        tag2: 'value2'
    },

    // If you're on node.js use `node-fetch` package
    fetch: require('node-fetch'),

    // Extra http headers
    // requestHeaders: {},
});

// Add this reporter to stalk.Tracer
stalkTracer.addReporter(stalkCollectorReporter);

// You can remove it anytime you want
// stalkTracer.removeReporter(stalkCollectorReporter);

async function main() {
    const span = globalTracer.startSpan('main()');
    span.addTags({
        tag1: 'value1',
        tag2: 'value2'
    });

    span.log({ message: 'Will wait 1 second' });
    await sleep(1000);
    await printHello(span);
    span.finish();
}


async function printHello(parentSpan) {
    const span = globalTracer.startSpan('printHello()', { childOf: parentSpan });
    span.log({ message: 'Will wait 500ms more, because I can' });
    await sleep(500);
    console.log('Hello world!');
    span.finish();
}

main().then(async () => {
    try {
        await stalkCollectorReporter.report();
        console.log('Reported!');
        process.exit(0);
    } catch (err) {
        console.error(`Could not reported`, err);
        process.exit(1);
    }
}).catch((err) => {
    console.error(err);
    process.exit(1);
});

const { createLogger, transports, format} = require("winston");
const {combine, timestamp, label, printf, simple, colorize} = format;


const printFormat = printf(({timestamp, label, level,  message})=>{
    return `${timestamp} [${label}] ${level} : ${message}`;
});

const printLogFormat = {
    file: combine(
        label({
            label: "백엔드",
        }),
        //colorize(),
        timestamp({
            format: "YYYY-MM-DD HH:mm:dd",
        }),
        printFormat
    ),
    console: combine(
        colorize(),
        simple()
    ),
};

const opts = {
    file: new transports.File({
        filename: "access.log",
        dirname: "./log",
        level: "info", //레벨
        format: printLogFormat.file, //출력포맷
    }),
    console: new transports.Console({
        level: "info", //레벨
        format: printLogFormat.console, //출력포맷
    })
};

const logger = createLogger({
    transports: [opts.file],
});

if(process.env.NODE_ENV != "production"){
    logger.add(opts.console);
}

module.exports= logger;
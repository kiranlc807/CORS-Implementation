const {createLogger,transports, format} = require('winston')

const customFormat = format.combine(format.timestamp(),format.printf((obj)=>{
    return `[${obj.timestamp}]<----->[${obj.level.toUpperCase().padEnd(7)}]<----->${obj.message}`
}))

const logger = createLogger({
     format: customFormat,
        level:"silly",
        transports :[
        new transports.Console(),
        new transports.File({filename:"app.log",level:"silly"})
    ]
});

module.exports = logger;

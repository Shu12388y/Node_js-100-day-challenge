const os=require('os')

const properties={
    user:os.userInfo,
    version:os.version,
    time:os.uptime,
    total_memory:os.totalmem,
    free_memory:os.freemem
    
};
console.log(properties)
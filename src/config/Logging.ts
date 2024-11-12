// class Logging {
//    public static debug(reqUrl:string,data){
//       console.log(`${reqUrl}`,JSON.stringify(data))
//     }
// }
class Logging {
    // Utility method to log debug messages with timestamp
    public static debug(message, data = "") {
       console.log(`${message}:`, JSON.stringify(data, null, 2));
    }
    public static error(message,data=""){
        console.error(`${message}: `,JSON.stringify(data))
    }
 };
 export {Logging}
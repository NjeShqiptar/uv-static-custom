self.__uv$config = {
    prefix: "/service/",  // SW intercepts requests starting with this
    wisp: "wss://proxy-backend-jf48.onrender.com/wisp", // your backend
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: "./uv/uv.handler.js",
    client: "./uv/uv.client.js",
    bundle: "./uv/uv.bundle.js",
    config: "./uv/uv.config.js",
    sw: "./uv.sw.js" // SW is now in root
};

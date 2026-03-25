self.__uv$config = {
    prefix: "/service/",        // UV proxy prefix (used in iframe)
    wisp: "wss://proxy-backend-jf48.onrender.com/wisp",
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: "./uv/uv.handler.js",
    client: "./uv/uv.client.js",
    bundle: "./uv/uv.bundle.js",
    config: "./uv/uv.config.js",
    sw: "./uv/uv.sw.js",
};

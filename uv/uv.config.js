self.__uv$config = {
    prefix: "/service/",  // UV proxy prefix, intercepted by the service worker
    wisp: "wss://proxy-backend-jf48.onrender.com/wisp", // Your Wisp backend
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: "./uv/uv.handler.js",
    client: "./uv/uv.client.js",
    bundle: "./uv/uv.bundle.js",
    config: "./uv/uv.config.js",
    sw: "./uv/uv.sw.js"
};

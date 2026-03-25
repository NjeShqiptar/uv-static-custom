self.__uv$config = {
    prefix: "/uv-static-custom/service/",
    wisp: "wss://proxy-backend-jf48.onrender.com/wisp",
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: "/uv-static-custom/uv/uv.handler.js",
    client: "/uv-static-custom/uv/uv.client.js",
    bundle: "/uv-static-custom/uv/uv.bundle.js",
    config: "/uv-static-custom/uv/uv.config.js",
    sw: "/uv-static-custom/uv/uv.sw.js",
};

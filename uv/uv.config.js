// This is your Frontend Server Config using the Wisp Protocol
self.__uv$config = {
    prefix: "/active/service/", // This is the virtual path
    
    // 👇 WISP SERVER URL 👇
    // If you have a custom Wisp server on Render, put it here.
    // Example: "wss://your-wisp-server.onrender.com/"
    wisp: "wss://proxy-backend-jf48.onrender.com/wisp/", 
    
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: "/active/uv/uv.handler.js",
    client: "/active/uv/uv.client.js",
    bundle: "/active/uv/uv.bundle.js",
    config: "/active/uv/uv.config.js",
    sw: "/active/uv/uv.sw.js",
};

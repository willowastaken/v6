const defaultConfig = {
    prefix: '/static/pa/',
    bare: 'https://bonkerbankers-xyz.onrender.com/bare/', 
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/static/uv/uv.handler.js',
    bundle: '/static/uv/uv.bundle.js',
    sw: '/static/uv/uv.sw.js',
};

window.addEventListener('load', () => {
    const savedConfig = localStorage.getItem('bare');
    if (savedConfig) {
        defaultConfig.bare = savedConfig;
    }

    self.__uv$config = defaultConfig;

    initializeUltraviolet();
});

function initializeUltraviolet() {
   
    if (self.__uv$config) {
        console.log('Using bare link:', self.__uv$config.bare);
        
    } else {
        console.error('Configuration not found');
    }
}

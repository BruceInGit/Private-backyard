axios.defaults.baseURL = `请求地址`; /* 设置初始地址，当使用axios时地址用含http则默认不使用初始地址*/
/* 封装axiosget、post请求 */
export function http(method, url, params) {
    return new Promise((resolve, reject) => {
        if (method == 'get') {
            axios.get(url, {
                    params: params /* get第二个参数是一个对象，这个对象的params是一个参数对象 */
                })
                .then(response => {
                    resolve(JSON.parse(JSON.stringify(response.data)));
                }, err => {
                    reject(err);
                })
                .catch((error) => {
                    reject(error)
                })
        } else if (method == 'post') {
            axios.post(url, params) /*post的第二个参数就是一个参数对象 */
                .then(response => {
                    resolve(JSON.parse(JSON.stringify(response.data)));
                }, err => {
                    reject(err);
                })
                .catch((error) => {
                    reject(error)
                })
        }
    })
}
// 添加一个请求拦截器

axios.interceptors.request.use((config) => {
    let securitykey = null;
    let timeStamp = new Date().getTime();
    let configData = '';
    let configData1 = "";
    if (config.data || config.params) {
        configData = config.data || config.params;
        configData1 = JSON.stringify(hash(configData));
    }
    // 判断是否登录接口，登录接口不需要密钥
    if (config.url.indexOf('odLogin') > -1) {
        securitykey = md5(configData1 + timeStamp);
    } else {
        securitykey = md5(configData1 + timeStamp + "skzXcNWoeDfVSld");
        config.headers["token"] = Cookies.get("token") ? Cookies.get("token") : "";
    }
    config.headers["timeStamp"] = timeStamp;
    config.headers["Authorization"] = securitykey;
    return config;
}, (error) => {
    return Promise.reject(error);
});

// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
    if (response.data.code === 401) {
        Message.error({
            content: "用户登录已过期！请重新登录"
        })
        router.push({
            path: "/login"
        });
    }
    return response;
}, function (error) {
    return Promise.reject(error);
});